import React, { useCallback, useMemo } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { TFormFields, TRequestInviteForm } from "./types";
import { schema } from "./schema";
import Form from "component/form/Form";
import ErrorBoundary from "utils/ErrorBoundary";
import usePostRequestInviteData from "utils/hooks/usePostRequestInvite";
import { strings } from "constants/strings";
import { TInputProps } from "component/form/types";

const RequestInviteForm = ({ closeModal }: TRequestInviteForm) => {
	const requestInviteFormItems: TInputProps[] = useMemo(
		() => [
			{ name: "name", title: "Full Name" },
			{ name: "email", title: "Email" },
			{ name: "confirmEmail", title: "Confirm Email" },
		],
		[]
	);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TFormFields>({
		resolver: yupResolver(schema),
		reValidateMode: "onSubmit",
	});

	const {
		mutate,
		isLoading,
		isError: isServerError,
		error: serverError,
		isSuccess,
	} = usePostRequestInviteData();

	const onSubmit: SubmitHandler<TFormFields> = useCallback(
		({ name, email }: TFormFields) => {
			mutate({ name, email });
		},
		[mutate]
	);

	return isSuccess ? (
		// submit success page
		<Form
			title={strings.submitSuccessPage.title}
			subTitle={strings.submitSuccessPage.subTitle}
			buttonLabel={strings.submitSuccessPage.buttonLabel}
			formRelated={{ onSubmit: closeModal }}
		/>
	) : (
		// form page
		<ErrorBoundary>
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
		</ErrorBoundary>
	);
};

export default RequestInviteForm;
