import React from "react";
import { TButtonProps } from "./types";
import { StyledButton } from "./styles/Button.styles";

//expose className to allow style customization of this reusable component
const Button = ({
	title,
	callback,
	className,
	isFullWidth = false,
	buttonSize = "regular",
	type,
}: TButtonProps) => {
	return (
		<StyledButton
			onClick={callback}
			className={className}
			isFullWidth={isFullWidth}
			buttonSize={buttonSize}
			type={type}
		>
			{title}
		</StyledButton>
	);
};

export default Button;
