import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../Footer";
import { TFooterProps } from "../types";

describe("Footer component", () => {
	const testProps: TFooterProps = {
		content: ["text 1", "text 2"],
	};

	it("renders without crashing", () => {
		render(<Footer />);
		expect(screen.getByTestId("footer-wrapper")).toBeInTheDocument();
	});

	it("renders content when passed in props content", () => {
		render(<Footer {...testProps} />);
		expect(screen.getByText("text 1")).toBeInTheDocument();
		expect(screen.getByText("text 2")).toBeInTheDocument();
	});
});
