import {
	FieldErrors,
	FieldValues,
	UseFormProps,
	UseFormRegister,
} from "react-hook-form";

export type TInputProps = { name: string; title: string };

export type TFormProps<T extends FieldValues> = UseFormProps<T> & {
	title: string;
	subTitle?: string;
	buttonLabel?: string;
	className?: string;
	formRelated?: {
		formItems?: TInputProps[]; // the inputs
		onSubmit?: () => void;
		isLoading?: boolean; // when true, the button is disabled
		isServerError?: boolean; // show serverError at bottom if isServerError is true
		serverError?: string;
		errors?: FieldErrors; //validation error for each of the inputs
		register?: UseFormRegister<T>; //from linking the inputs to react hook form data
	};
};
