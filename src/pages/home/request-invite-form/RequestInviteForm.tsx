import React from "react";
import Form from "../../../component/form/Form";
import { strings } from "../../../utils/strings";
import { TInputProps } from "../../../component/form/types";
import { TFormFields } from "./types";
import { schema } from "./schema";

// this form will handle
const RequestInviteForm = () => {
	const requestInviteFormItems: TInputProps[] = [
		{ name: "fullName", title: "Full name" },
		{ name: "email", title: "Email" },
		{ name: "confirmEmail", title: "Confirm Email" },
	];

	return (
		<Form<TFormFields>
			title={strings.requestFormTitle}
			formItems={requestInviteFormItems}
			validationSchema={schema}
		/>
	);
};

export default RequestInviteForm;
