import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../Button";
import { TButtonProps, TButtonSize } from "../types";
import { colors } from "../../../constants/color";

describe("Button component", () => {
	const testProps: TButtonProps = {
		label: "Test Button",
		onClick: jest.fn(),
		className: "test-class",
		isFullWidth: true,
		buttonSize: "large",
		type: "button",
		disabled: false,
	};

	it("renders correctly with given props", () => {
		render(<Button {...testProps} />);

		const button = screen.getByRole("button", { name: /test button/i });

		expect(button).toBeInTheDocument();
		expect(button).toHaveClass(testProps.className as string);
		expect(button).toHaveAttribute("type", testProps.type);
	});

	it("calls the onClick function on click", () => {
		render(<Button {...testProps} />);

		fireEvent.click(screen.getByRole("button", { name: /test button/i }));

		expect(testProps.onClick).toHaveBeenCalledTimes(1);
	});

	it("renders correctly when disabled", () => {
		const disabledProps = { ...testProps, disabled: true };

		render(<Button {...disabledProps} />);

		const button = screen.getByRole("button", { name: /test button/i });

		expect(button).toBeDisabled();
		expect(button).toHaveStyle({ color: colors.grey }); // Check for disabled color
		expect(button).toHaveStyle({ borderColor: colors.grey }); // Check for disabled border color
	});

	it("doesn't call the onClick function on click if disabled is true", () => {
		render(<Button {...testProps} disabled={true} />);

		const button = screen.getByRole("button", { name: /test button/i });
		expect(button).toBeDisabled();
		fireEvent.click(button);
		expect(testProps.onClick).not.toHaveBeenCalled();
	});

	it("renders with correct styles based on isFullWidth prop", () => {
		const { unmount } = render(<Button {...testProps} isFullWidth={true} />);
		const button = screen.getByRole("button", { name: /test button/i });
		expect(button).toHaveStyle({ width: "100%" });
		unmount();

		render(<Button {...testProps} isFullWidth={false} />);
		const button2 = screen.getByRole("button", { name: /test button/i });
		expect(button2).toHaveStyle({ width: "auto" });
	});

	it("renders with correct styles based on buttonSize prop", () => {
		const buttonSizeToPadding: Record<TButtonSize, string> = {
			small: "8px 20px",
			regular: "15px 20px",
			large: "15px 20px",
		};

		for (const size in buttonSizeToPadding) {
			const { unmount } = render(
				<Button {...testProps} buttonSize={size as TButtonSize} />
			);

			const button = screen.getByRole("button", { name: /test button/i });

			expect(button).toHaveStyle({
				padding: buttonSizeToPadding[size as TButtonSize],
			});
			unmount();
		}
	});

	it("renders with correct styles based on disabled prop", () => {
		const { rerender } = render(<Button {...testProps} disabled={true} />);
		const button = screen.getByRole("button", { name: /test button/i });
		expect(button).toHaveStyle({
			color: colors.grey,
			borderColor: colors.grey,
		});

		rerender(<Button {...testProps} disabled={false} />);
		expect(button).toHaveStyle({
			color: colors.lightGrey,
			borderColor: colors.black,
		});
	});
});
