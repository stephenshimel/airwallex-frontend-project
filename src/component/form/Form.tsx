import React, { ReactElement } from "react";
import { FieldValues, Path, SubmitHandler, useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import {
	FormWrapper,
	InputsWrapper,
	FormTitle,
	SeparatorLine,
} from "./styles/Form.styles";
import { TFormProps } from "./types";
import Button from "../button/Button";
import Input from "../input/Input";
import { yupResolver } from "@hookform/resolvers/yup";

const Form = <T extends FieldValues>({
	title,
	className,
	formItems,
	validationSchema,
}: TFormProps<T>): ReactElement => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<T>({
		resolver: yupResolver(validationSchema),
	});

	const onSubmit: SubmitHandler<T> = data => {
		console.log("onSubmit", data);
	};

	return (
		<FormWrapper className={className} onSubmit={handleSubmit(onSubmit)}>
			<FormTitle>{title}</FormTitle>
			<SeparatorLine />
			<InputsWrapper>
				{formItems.map(formItem => {
					return (
						<Input
							key={uuidv4()}
							title={formItem.title}
							{...register(formItem.name as Path<T>)}
							errorMsg={errors[formItem.name]?.message as string}
						/>
					);
				})}
			</InputsWrapper>
			<Button title='Send' isFullWidth buttonSize='small' type='submit' />
		</FormWrapper>
	);
};

export default Form;
