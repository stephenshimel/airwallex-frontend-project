import * as yup from "yup";

export const schema = yup.object().shape({
	name: yup
		.string()
		.required("Full Name is required")
		.min(3, "Full Name must be at least 3 characters"),
	email: yup.string().required("Email is required").email("Email is not valid"),
	confirmEmail: yup
		.string()
		.oneOf([yup.ref("email")], "Emails must match")
		.required("Email is required")
		.email("Email is not valid"),
});
