import React, { ReactElement, useEffect, useRef } from "react";
import { ModalWrapper } from "./styles/Modal.styles";
import { TModalProps } from "./types";
import { useEventListener } from "../../utils/hooks/useEventListener";

const Modal = ({ content, closeModal }: TModalProps): ReactElement => {
	const modalRef = useRef<HTMLDivElement | null>(null);

	const handleClickOutside = (event: MouseEvent) => {
		if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
			closeModal();
		}
	};

	useEventListener("mousedown", handleClickOutside);

	return <ModalWrapper ref={modalRef}>{content}</ModalWrapper>;
};

export default Modal;
