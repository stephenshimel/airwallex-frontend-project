import React, { ReactElement } from "react";
import { FieldValues, Path } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import {
	FormWrapper,
	InputsWrapper,
	FormTitle,
	SeparatorLine,
	ErrorMessage,
	FormSubTitle,
} from "./styles/Form.styles";
import { TFormProps } from "./types";
import Button from "../button/Button";
import Input from "../input/Input";
import { strings } from "../../utils/strings";

const Form = <T extends FieldValues>({
	title,
	subTitle,
	buttonLabel = "Save",
	className,
	formRelated = {},
}: TFormProps<T>): ReactElement => {
	const {
		formItems,
		isLoading,
		isServerError,
		serverError,
		onSubmit,
		errors,
		register,
	} = formRelated;
	return (
		<FormWrapper className={className} onSubmit={onSubmit}>
			<FormTitle>{title}</FormTitle>

			<SeparatorLine />

			{subTitle && <FormSubTitle>{subTitle}</FormSubTitle>}

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
				label={
					isLoading ? strings.requestInvitePage.loadingButtonLabel : buttonLabel
				}
				isFullWidth
				buttonSize='small'
				type='submit'
				disabled={isLoading}
			/>

			{isServerError && <ErrorMessage>{serverError?.toString()}</ErrorMessage>}
		</FormWrapper>
	);
};

export default Form;
