import * as yup from "yup";
import { FieldValues, UseFormProps } from "react-hook-form";

export type TInputProps = { name: string; title: string };

export type TFormProps<T extends FieldValues> = UseFormProps<T> & {
	title: string;
	className?: string;
	formItems: TInputProps[];
	onSubmit?: () => void;
	validationSchema: yup.ObjectSchema<T>;
	callBackIfValidationPassed?: Function;
	isLoading?: boolean;
	isError?: boolean;
	error?: string;
};
