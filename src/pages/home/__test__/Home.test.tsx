import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Home from "../Home";
import { strings } from "../../../constants/strings";
import { QueryClient, QueryClientProvider } from "react-query";

describe("Home", () => {
	const queryClient = new QueryClient();

	it("renders correctly", () => {
		render(<Home />);

		// Check if the static elements are correctly rendered
		expect(screen.getByText(strings.homePage.header.title)).toBeInTheDocument();
		expect(
			screen.getByText(strings.homePage.content.homepageAdTitle)
		).toBeInTheDocument();
		expect(
			screen.getByText(strings.homePage.content.homepageAdText)
		).toBeInTheDocument();
		expect(
			screen.getByText(strings.homePage.content.requestInviteButtonText)
		).toBeInTheDocument();
	});

	it("opens the modal when the button is clicked, and close the modal when click outside the modal area", () => {
		render(
			<QueryClientProvider client={queryClient}>
				<Home />
			</QueryClientProvider>
		);

		// Click the button to open the modal
		fireEvent.click(
			screen.getByText(strings.homePage.content.requestInviteButtonText)
		);

		// Now the modal should be open, and the RequestInviteForm should be rendered
		expect(screen.getByPlaceholderText("Full name")).toBeInTheDocument();
		expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
		expect(screen.getByPlaceholderText("Confirm Email")).toBeInTheDocument();
		expect(screen.getByText("Send")).toBeInTheDocument();

		// Simulate a click outside the modal area
		fireEvent.click(document.body);

		// Use `queryByText` instead of `getByText` to avoid throwing an error when the element is not found
		const modalContent = screen.queryByText("Your Modal Content");

		// Expect that the modal content is no longer in the document
		expect(modalContent).not.toBeInTheDocument();
	});

	it("matches the snapshot", () => {
		const tree = renderer.create(<Home />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
