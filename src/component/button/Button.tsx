import React from "react";
import { TButtonProps } from "./types";
import { StyledButton } from "./styles/Button.styles";

//expose className to allow style customization of this reusable component
const Button = ({ title, callback, className }: TButtonProps) => {
	return (
		<StyledButton onClick={callback} className={className}>
			{title}
		</StyledButton>
	);
};

export default Button;
