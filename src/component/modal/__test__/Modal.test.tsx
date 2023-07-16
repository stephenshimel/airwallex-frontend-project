import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Modal from "../Modal";
import { TModalProps } from "../types";

describe("Modal component", () => {
	const closeModalMock = jest.fn();
	const contentMock = <div>Test content</div>;

	const testProps: TModalProps = {
		content: contentMock,
		closeModal: closeModalMock,
	};

	beforeEach(() => {
		jest.clearAllMocks();
	});

	it("renders without crashing", () => {
		render(<Modal {...testProps} />);
		expect(screen.getByText("Test content")).toBeInTheDocument();
	});

	it("calls closeModal function when click is performed outside of the modal", () => {
		const { baseElement } = render(<Modal {...testProps} />);

		// Click outside of the modal
		fireEvent.mouseDown(baseElement);

		expect(closeModalMock).toHaveBeenCalled();
	});

	it("does not call closeModal function when click is performed inside of the modal", () => {
		render(<Modal {...testProps} />);
		const contentElement = screen.getByText("Test content");

		// Click inside of the modal
		fireEvent.mouseDown(contentElement);

		expect(closeModalMock).not.toHaveBeenCalled();
	});
});
