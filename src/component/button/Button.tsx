import React from "react";
import { TButtonProps } from "./types";
import { StyledButton } from "./styles/Button.styles";

//expose className to allow style customization of this reusable component
const Button = ({
	label,
	callback,
	className,
	isFullWidth = false,
	buttonSize = "regular",
	type,
	disabled = false,
}: TButtonProps) => {
	return (
		<StyledButton
			onClick={callback}
			className={className}
			isFullWidth={isFullWidth}
			buttonSize={buttonSize}
			type={type}
			disabled={disabled}
		>
			{label}
		</StyledButton>
	);
};

export default Button;
