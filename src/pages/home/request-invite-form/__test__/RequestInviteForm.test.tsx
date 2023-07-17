/* eslint-disable testing-library/render-result-naming-convention */
/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { rest } from "msw";
import { setupServer } from "msw/node";
import RequestInviteForm from "../RequestInviteForm";

describe("RequestInviteForm", () => {
	const serverPositive = setupServer(
		rest.post(
			"https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth",
			async (req, res, ctx) => {
				console.log("Mock server handler triggered");

				// parse the request body to get the email
				const { email } = await req.json();

				console.log("email!!!", email);
				// check if the email is "usedemail@airwallex.com"
				if (email === "usedemail@airwallex.com") {
					console.log("400 returned!!!");
					return res(
						ctx.status(400),
						ctx.json({ error: "Email is already in use" })
					);
				}

				return res(
					ctx.delay(200),
					ctx.status(200),
					ctx.json({ message: "success" })
				);
			}
		)
	);

	beforeAll(() => serverPositive.listen());
	afterEach(() => serverPositive.resetHandlers());
	afterAll(() => serverPositive.close());

	const queryClient = new QueryClient();

	// Positive tests:
	it("renders correctly", () => {
		render(
			<QueryClientProvider client={queryClient}>
				<RequestInviteForm />
			</QueryClientProvider>
		);
		expect(screen.getByText("Request an invite")).toBeInTheDocument();
		expect(screen.getByPlaceholderText("Full Name")).toBeInTheDocument();
		expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
		expect(screen.getByPlaceholderText("Confirm Email")).toBeInTheDocument();
		expect(screen.getByText("Send")).toBeInTheDocument();
	});

	it("initial status matches the snapshot", () => {
		const tree = render(
			<QueryClientProvider client={queryClient}>
				<RequestInviteForm />
			</QueryClientProvider>
		);
		expect(tree).toMatchSnapshot();
	});

	it("shows `Sending, please wait...` if submiting the form correctly, before server response arrives", async () => {
		render(
			<QueryClientProvider client={queryClient}>
				<RequestInviteForm />
			</QueryClientProvider>
		);
		fireEvent.change(screen.getByPlaceholderText("Full Name"), {
			target: { value: "Stephen Shi" },
		});
		fireEvent.change(screen.getByPlaceholderText("Email"), {
			target: { value: "test@test.com" },
		});
		fireEvent.change(screen.getByPlaceholderText("Confirm Email"), {
			target: { value: "test@test.com" },
		});

		fireEvent.click(screen.getByTestId("submit-button"));

		await waitFor(() => {
			expect(screen.getByText("Sending, please wait...")).toBeInTheDocument();
		});
	});

	it("shows the success page and matches snapshot, if the form is submitted, passed all validation rules, and server response is 200", async () => {
		const tree = render(
			<QueryClientProvider client={queryClient}>
				<RequestInviteForm />
			</QueryClientProvider>
		);
		fireEvent.change(screen.getByPlaceholderText("Full Name"), {
			target: { value: "Stephen Shi" },
		});
		fireEvent.change(screen.getByPlaceholderText("Email"), {
			target: { value: "test@test.com" },
		});
		fireEvent.change(screen.getByPlaceholderText("Confirm Email"), {
			target: { value: "test@test.com" },
		});

		fireEvent.click(screen.getByTestId("submit-button"));

		await waitFor(
			() => {
				expect(screen.getByText("All done!")).toBeInTheDocument();
				expect(
					screen.getByText(
						"You will be one of the first to experience Broccoli & Co. when w launch"
					)
				).toBeInTheDocument();
				expect(screen.getByText("OK")).toBeInTheDocument();
			},
			{ timeout: 3000 }
		);

		expect(tree).toMatchSnapshot();
	});

	// Negative tests:

	it("shows error message when form is submitted with empty fields", async () => {
		render(
			<QueryClientProvider client={queryClient}>
				<RequestInviteForm />
			</QueryClientProvider>
		);
		fireEvent.click(screen.getByTestId("submit-button"));
		expect(
			await screen.findByText("Full Name is required")
		).toBeInTheDocument();
	});

	it("shows error message when name is entered but less than 3 letters", async () => {
		render(
			<QueryClientProvider client={queryClient}>
				<RequestInviteForm />
			</QueryClientProvider>
		);
		fireEvent.change(screen.getByPlaceholderText("Full Name"), {
			target: { value: "S" },
		});
		fireEvent.click(screen.getByTestId("submit-button"));
		expect(
			await screen.findByText("Full Name must be at least 3 characters")
		).toBeInTheDocument();
	});

	it("shows error message when email is entered but not a valid email address", async () => {
		render(
			<QueryClientProvider client={queryClient}>
				<RequestInviteForm />
			</QueryClientProvider>
		);
		fireEvent.change(screen.getByPlaceholderText("Email"), {
			target: { value: "wrong-email" },
		});
		fireEvent.click(screen.getByTestId("submit-button"));
		expect(await screen.findByText("Email is not valid")).toBeInTheDocument();
	});

	it("shows error message when confirm email field does not match email field", async () => {
		render(
			<QueryClientProvider client={queryClient}>
				<RequestInviteForm />
			</QueryClientProvider>
		);
		fireEvent.change(screen.getByPlaceholderText("Email"), {
			target: { value: "mock1@airwallex.com" },
		});
		fireEvent.change(screen.getByPlaceholderText("Confirm Email"), {
			target: { value: "mock2@airwallex.com" },
		});
		fireEvent.click(screen.getByTestId("submit-button"));
		expect(await screen.findByText("Emails must match")).toBeInTheDocument();
	});

	it("show the error message if validation passed but server returns 400", async () => {
		render(
			<QueryClientProvider client={queryClient}>
				<RequestInviteForm />
			</QueryClientProvider>
		);
		fireEvent.change(screen.getByPlaceholderText("Full Name"), {
			target: { value: "Stephen Shi" },
		});
		fireEvent.change(screen.getByPlaceholderText("Email"), {
			target: { value: "usedemail@airwallex.com" },
		});
		fireEvent.change(screen.getByPlaceholderText("Confirm Email"), {
			target: { value: "usedemail@airwallex.com" },
		});

		fireEvent.click(screen.getByTestId("submit-button"));

		await waitFor(
			() => {
				expect(
					screen.getByText("Request failed with status code 400")
				).toBeInTheDocument();
			},
			{ timeout: 3000 }
		);
	});
});
