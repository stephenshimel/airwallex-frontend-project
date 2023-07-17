import React from "react";

export type TModalProps = {
	content: React.ReactElement;
	closeModal: Function;
	padding?: string;
	className?: string;
	isModalOpen: boolean;
};
