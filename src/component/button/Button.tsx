import React from "react";
import { TButtonProps } from "./types";
import { StyledButton } from "./styles/Button.styles";

const Button = ({
	label,
	isFullWidth = false,
	buttonSize = "regular",
	disabled = false,
	...restProps
}: TButtonProps) => {
	return (
		<StyledButton
			isFullWidth={isFullWidth}
			buttonSize={buttonSize}
			disabled={disabled}
			{...restProps}
		>
			{label}
		</StyledButton>
	);
};

export default React.memo(Button);
