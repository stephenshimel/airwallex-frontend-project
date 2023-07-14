import React from "react";
import Form from "../../../component/form/Form";
import { strings } from "../../../utils/strings";
import { TInputProps } from "../../../component/form/types";
import { TFormFields } from "./types";
import { schema } from "./schema";
import usePostRequestInviteData from "../../../api/usePostRequestInvite";

// this form will handle
const RequestInviteForm = () => {
	const requestInviteFormItems: TInputProps[] = [
		{ name: "name", title: "Full name" },
		{ name: "email", title: "Email" },
		{ name: "confirmEmail", title: "Confirm Email" },
	];

	const { mutate, isLoading, isError, error } = usePostRequestInviteData();

	const callBackIfValidationPassed = ({ name, email }: TFormFields) => {
		mutate({ name, email });
	};

	return (
		<Form<TFormFields>
			title={strings.requestFormTitle}
			formItems={requestInviteFormItems}
			validationSchema={schema}
			callBackIfValidationPassed={callBackIfValidationPassed}
			isLoading={isLoading}
			isError={isError}
			error={error as string}
		/>
	);
};

export default RequestInviteForm;
