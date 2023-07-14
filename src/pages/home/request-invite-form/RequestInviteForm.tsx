import React from "react";
import Form from "../../../component/form/Form";
import { strings } from "../../../utils/strings";
import { TInputProps } from "../../../component/form/types";
import { TFormFields } from "./types";
import { schema } from "./schema";
import usePostRequestInviteData from "../../../api/usePostRequestInvite";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";

const RequestInviteForm = () => {
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
		<Form title={strings.requestFormTitle} />
	) : (
		<Form<TFormFields>
			title={strings.requestFormTitle}
			formItems={requestInviteFormItems}
			isLoading={isLoading}
			isServerError={isServerError}
			serverError={serverError as string}
			onSubmit={handleSubmit(onSubmit)}
			errors={errors}
			register={register}
		/>
	);
};

export default RequestInviteForm;
