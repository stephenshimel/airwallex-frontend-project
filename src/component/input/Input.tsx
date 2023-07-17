import React, { ReactElement } from "react";
import { TInputProps } from "./types";
import { StyledInput } from "./styles/Input.styles";

const Input = React.forwardRef<HTMLInputElement, TInputProps>(
	({ errorMsg, name = "", ...restProps }, ref): ReactElement => (
		<>
			<StyledInput ref={ref} name={name} {...restProps}></StyledInput>
			{errorMsg && <p>{errorMsg}</p>}
		</>
	)
);

export default React.memo(Input);
