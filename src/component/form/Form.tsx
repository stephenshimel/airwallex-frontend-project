import React, { ReactElement } from "react";
import { FormTitle, SeparatorLine } from "./styles/Form.styles";
import { THeaderProps } from "./types";
import Button from "../button/Button";

const Form = ({ title, className }: THeaderProps): ReactElement => {
	const submitForm = () => {};
	return (
		<div className={className}>
			<FormTitle>{title}</FormTitle>
			<SeparatorLine />
			<Button title='Send' callback={submitForm} />
		</div>
	);
};

export default Form;
