import React from "react";
import { TButtonProps } from "./types";
import { StyledButton } from "./styles/Button.styles";

const Button = ({ title, callback }: TButtonProps) => {
	return <StyledButton onClick={callback}>{title}</StyledButton>;
};

export default Button;
