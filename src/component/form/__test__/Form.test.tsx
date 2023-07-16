import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Form from "../Form";

describe("Form component", () => {
	const testProps = {
		name: " test name",
		title: "test title",
		subTitle: "Test Subtitle",
	};

	it("renders without crashing", () => {
		const { container } = render(<Form {...testProps} />);
		// eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
		const formElement = container.querySelector("form");
		expect(formElement).not.toBeNull();
	});

	it("displays title", () => {
		render(<Form {...testProps} />);
		expect(screen.getByText("test title")).toBeInTheDocument();
	});

	it("displays separator line", () => {
		render(<Form {...testProps} />);
		expect(screen.getByTestId("separator-line")).toBeInTheDocument();
	});

	it("displays subtitle when provided", () => {
		render(<Form {...testProps} />);
		expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
	});

	it("displays inputs when provided, with passed in title as placeholder", () => {
		const testFormItems = [
			{ name: "input1", title: "Input 1" },
			{ name: "input2", title: "Input 2" },
		];
		render(
			<Form title='Test Form' formRelated={{ formItems: testFormItems }} />
		);
		expect(screen.getByPlaceholderText("Input 1")).toBeInTheDocument();
		expect(screen.getByPlaceholderText("Input 2")).toBeInTheDocument();
	});

	it("displays button with default label, and button label is aligned with the props buttonLabel if passed one", () => {
		const { rerender } = render(<Form title='Test Form' />);
		expect(screen.getByTestId("submit-button")).toBeInTheDocument();
		expect(screen.getByTestId("submit-button")).toHaveTextContent("Save");

		rerender(<Form title='Test Form' buttonLabel='Send' />);
		expect(screen.getByTestId("submit-button")).toHaveTextContent("Send");
	});

	it("displays server error message when provided", () => {
		render(
			<Form
				title='Test Form'
				formRelated={{ isServerError: true, serverError: "Test Error" }}
			/>
		);
		expect(screen.getByText("Test Error")).toBeInTheDocument();
	});

	it("calls onSubmit when form is submitted", () => {
		const mockOnSubmit = jest.fn();
		render(<Form {...testProps} formRelated={{ onSubmit: mockOnSubmit }} />);
		fireEvent.submit(screen.getByTestId("submit-button"));
		expect(mockOnSubmit).toBeCalledTimes(1);
	});

	it("when loading, the button become disabled", () => {
		const mockOnSubmit = jest.fn();
		render(
			<Form
				{...testProps}
				formRelated={{ onSubmit: mockOnSubmit, isLoading: true }}
			/>
		);
		fireEvent.submit(screen.getByTestId("submit-button"));
		expect(screen.getByTestId("submit-button")).toBeDisabled();
	});
});
