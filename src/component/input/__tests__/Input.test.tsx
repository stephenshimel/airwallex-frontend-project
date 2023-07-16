import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from "../Input";

describe("Input component", () => {
	const testProps = {
		name: "testName",
		placeholder: "Test placeholder",
		className: "test-class",
		errorMsg: "Test error",
	};

	// test render with passed props
	it("renders with correct props", () => {
		render(<Input {...testProps} />);

		const input = screen.getByPlaceholderText(testProps.placeholder);

		// Check that the name property is correctly set
		expect(input).toHaveProperty("name", testProps.name);

		// Check that the className is correctly set
		expect(input).toHaveClass(testProps.className);
	});

	// test input change event
	it("updates on change", () => {
		const testValue = "Test input";
		render(<Input {...testProps} />);

		const input = screen.getByPlaceholderText(
			testProps.placeholder
		) as HTMLInputElement;
		fireEvent.change(input, { target: { value: testValue } });

		expect(input.value).toBe(testValue);
	});

	// test render of error message
	it("renders error message", () => {
		render(<Input {...testProps} />);

		const errorMessage = screen.getByText(testProps.errorMsg);
		expect(errorMessage).toBeInTheDocument();
	});

	// test forwardRef functionality
	it("forwards ref correctly", () => {
		const ref = React.createRef<HTMLInputElement>();
		render(<Input ref={ref} {...testProps} />);

		// Check that the ref is forwarded and attached to the StyledInput
		expect(ref.current).not.toBeNull();
	});

	// test without passed className
	it("renders correctly without passed className", () => {
		const { className, ...propsWithoutClassName } = testProps;
		render(<Input {...propsWithoutClassName} />);

		const input = screen.getByPlaceholderText(
			propsWithoutClassName.placeholder
		);

		// Check that the input does not have the test className
		expect(input).not.toHaveClass(testProps.className);
	});

	// test without error message
	it("renders correctly without error message", () => {
		const { errorMsg, ...propsWithoutErrorMsg } = testProps;
		render(<Input {...propsWithoutErrorMsg} />);

		// Check that the error message is not in the document
		expect(screen.queryByText(testProps.errorMsg)).toBeNull();
	});
});
