import React, { ReactElement } from "react";
import { TInputProps } from "./types";
import { StyledInput } from "./styles/Input.styles";

const Input = React.forwardRef<HTMLInputElement, TInputProps>(
	({ title, className, errorMsg, ...restProps }, ref): ReactElement => {
		if (errorMsg) {
			console.log("errorMsg", errorMsg);
		}
		return (
			<>
				<StyledInput
					ref={ref}
					className={className}
					placeholder={title}
					{...restProps}
				></StyledInput>
				{errorMsg && <div>{errorMsg}</div>}
			</>
		);
	}
);

export default Input;
