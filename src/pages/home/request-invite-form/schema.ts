import * as yup from "yup";

export const schema = yup.object().shape({
	name: yup
		.string()
		.required("Full name is required")
		.min(3, "Full name must be at least 3 characters"),
	email: yup.string().required("Email is required").email("Email is not valid"),
	confirmEmail: yup
		.string()
		.oneOf([yup.ref("email")], "Emails must match")
		.required("Email is required")
		.email("Email is not valid"),
});
