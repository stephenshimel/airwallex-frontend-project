import React, { ReactElement } from "react";
import { FieldValues, Path } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import {
	FormWrapper,
	InputsWrapper,
	FormTitle,
	SeparatorLine,
	ErrorMessage,
} from "./styles/Form.styles";
import { TFormProps } from "./types";
import Button from "../button/Button";
import Input from "../input/Input";
import { strings } from "../../utils/strings";

const Form = <T extends FieldValues>({
	title,
	className,
	formItems,
	isLoading,
	isServerError,
	serverError,
	onSubmit,
	errors,
	register,
}: TFormProps<T>): ReactElement => (
	<FormWrapper className={className} onSubmit={onSubmit}>
		<FormTitle>{title}</FormTitle>
		<SeparatorLine />
		{formItems && register && (
			<InputsWrapper>
				{formItems.map(formItem => {
					return (
						<Input
							key={uuidv4()}
							title={formItem.title}
							{...register(formItem.name as Path<T>)}
							errorMsg={errors && (errors[formItem.name]?.message as string)}
						/>
					);
				})}
			</InputsWrapper>
		)}

		<Button
			label={isLoading ? strings.loadingButtonLabel : strings.sendButtonLabel}
			isFullWidth
			buttonSize='small'
			type='submit'
			disabled={isLoading}
		/>
		{isServerError && <ErrorMessage>{serverError?.toString()}</ErrorMessage>}
	</FormWrapper>
);

export default Form;
