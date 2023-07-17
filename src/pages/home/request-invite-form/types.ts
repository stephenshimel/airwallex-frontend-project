export type TFormFields = {
	name: string;
	email: string;
	confirmEmail: string;
};

export type TRequestInviteForm = {
	closeModal?: () => void;
};
