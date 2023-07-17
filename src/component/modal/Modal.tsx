import React, { ReactElement, useRef } from "react";
import { ModalWrapper } from "./styles/Modal.styles";
import { TModalProps } from "./types";
import { useEventListener } from "../../utils/hooks/useEventListener";

// in order to reuse Modal component, just need to create a state in its container and pass the closeModal function to the Modal
const Modal = ({
	content,
	closeModal,
	padding,
	className,
}: TModalProps): ReactElement => {
	const modalRef = useRef<HTMLDivElement | null>(null);

	const handleClickOutside = (event: MouseEvent) => {
		if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
			closeModal();
		}
	};

	useEventListener("mousedown", handleClickOutside);

	return (
		<ModalWrapper
			ref={modalRef}
			padding={padding}
			className={className}
			data-testid='modal'
		>
			{content}
		</ModalWrapper>
	);
};

export default React.memo(Modal);
