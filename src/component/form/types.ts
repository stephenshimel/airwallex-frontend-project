import * as yup from "yup";
import {
	FieldErrors,
	FieldValues,
	UseFormProps,
	UseFormRegister,
} from "react-hook-form";
import { TFormFields } from "../../pages/home/request-invite-form/types";

export type TInputProps = { name: string; title: string };

export type TFormProps<T extends FieldValues> = UseFormProps<T> & {
	title: string;
	className?: string;
	formItems?: TInputProps[];
	onSubmit?: () => void;
	isLoading?: boolean;
	isServerError?: boolean;
	serverError?: string;
	errors?: FieldErrors;
	register?: UseFormRegister<T>;
};
