import styled from "@emotion/styled";
import { TStyledButtonProps } from "../types";

const buttonSizeToPadding = {
	small: "8px 20px",
	regular: "15px 20px",
	large: "15px 20px",
};

export const StyledButton = styled.button<TStyledButtonProps>`
	background-color: transparent;
	font-size: 17px;
	padding: ${({ buttonSize = "regular" }) => buttonSizeToPadding[buttonSize]};
	color: ${props => (props.disabled ? "#cccbca" : "grey")};
	border: 1px solid;
	border-color: ${props => (props.disabled ? "#cccbca" : "black")};
	cursor: pointer;
	display: block;
	margin: 0 auto;
	width: ${props => (props.isFullWidth ? "100%" : "auto")};
`;
