// import React from "react";
// import { render, fireEvent, waitFor, screen } from "@testing-library/react";

// import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";
// import RequestInviteForm from "../RequestInviteForm";

// jest.mock("../../../../api/usePostRequestInviteData");
// import usePostRequestInviteData from "../../../../api/usePostRequestInvite";

// const queryClient = new QueryClient();

// describe("RequestInviteForm component", () => {
// 	it("renders form with all inputs and a submit button", () => {
// 		(usePostRequestInviteData as jest.Mock).mockReturnValue({
// 			mutate: jest.fn(),
// 			isLoading: false,
// 			isError: false,
// 			error: null,
// 			isSuccess: false,
// 		});

// 		render(
// 			<QueryClientProvider client={queryClient}>
// 				<RequestInviteForm />
// 				<ReactQueryDevtools initialIsOpen={false} />
// 			</QueryClientProvider>
// 		);

// 		const nameInput = screen.getByLabelText(/full name/i);
// 		expect(nameInput).toBeInTheDocument();

// 		const emailInput = screen.getByLabelText(/email/i);
// 		expect(emailInput).toBeInTheDocument();

// 		const confirmEmailInput = screen.getByLabelText(/confirm email/i);
// 		expect(confirmEmailInput).toBeInTheDocument();

// 		const submitButton = screen.getByRole("button", { name: /send/i });
// 		expect(submitButton).toBeInTheDocument();
// 	});

// 	it("submits the form when all fields are filled correctly", async () => {
// 		render(
// 			<QueryClientProvider client={queryClient}>
// 				<RequestInviteForm />
// 				<ReactQueryDevtools initialIsOpen={false} />
// 			</QueryClientProvider>
// 		);

// 		const nameInput = screen.getByLabelText(/full name/i);
// 		const emailInput = screen.getByLabelText(/email/i);
// 		const confirmEmailInput = screen.getByLabelText(/confirm email/i);
// 		const submitButton = screen.getByRole("button", { name: /send/i });

// 		fireEvent.change(nameInput, { target: { value: "John Doe" } });
// 		fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } });
// 		fireEvent.change(confirmEmailInput, {
// 			target: { value: "john.doe@example.com" },
// 		});

// 		fireEvent.click(submitButton);

// 		await waitFor(() => {
// 			const successTitle = screen.getByText(/submit success/i);
// 			expect(successTitle).toBeInTheDocument();
// 		});
// 	});
// });
export {};
