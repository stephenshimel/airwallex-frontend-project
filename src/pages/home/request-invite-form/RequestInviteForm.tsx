import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import Form from "../../../component/form/Form";
import { strings } from "../../../constants/strings";
import { TInputProps } from "../../../component/form/types";
import { TFormFields, TRequestInviteForm } from "./types";
import { schema } from "./schema";
import usePostRequestInviteData from "../../../api/usePostRequestInvite";

const RequestInviteForm = ({ buttonOnclick }: TRequestInviteForm) => {
	const requestInviteFormItems: TInputProps[] = [
		{ name: "name", title: "Full name" },
		{ name: "email", title: "Email" },
		{ name: "confirmEmail", title: "Confirm Email" },
	];

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TFormFields>({
		resolver: yupResolver(schema),
	});

	const onSubmit: SubmitHandler<TFormFields> = ({
		name,
		email,
	}: TFormFields) => {
		mutate({ name, email });
	};

	const {
		mutate,
		isLoading,
		isError: isServerError,
		error: serverError,
		isSuccess,
	} = usePostRequestInviteData();

	return isSuccess ? (
		<Form
			title={strings.submitSuccessPage.title}
			subTitle={strings.submitSuccessPage.subTitle}
			buttonLabel={strings.submitSuccessPage.buttonLabel}
			formRelated={{ onSubmit: buttonOnclick }}
		/>
	) : (
		<Form<TFormFields>
			title={strings.requestInvitePage.requestFormTitle}
			buttonLabel={strings.requestInvitePage.sendButtonLabel}
			formRelated={{
				formItems: requestInviteFormItems,
				isLoading: isLoading,
				isServerError: isServerError,
				serverError: serverError as string,
				onSubmit: handleSubmit(onSubmit),
				errors: errors,
				register: register,
			}}
		/>
	);
};

export default RequestInviteForm;
