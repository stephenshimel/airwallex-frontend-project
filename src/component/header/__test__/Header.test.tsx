import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { THeaderProps } from "../types";

describe("Header component", () => {
	const testProps: THeaderProps = {
		title: "Test Title",
	};

	it("renders without crashing", () => {
		render(<Header {...testProps} />);
		expect(screen.getByTestId("header-wrapper")).toBeInTheDocument();
	});

	it("renders with title", () => {
		render(<Header {...testProps} />);
		expect(screen.getByText("Test Title")).toBeInTheDocument();
	});
});
