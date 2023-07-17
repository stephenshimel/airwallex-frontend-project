import styled from "@emotion/styled";
import { colors } from "../../../constants/color";

export const FooterContainer = styled.footer`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 80px;
	background-color: inherit;
	border-top: 1px solid black;
	color: ${colors.lightGrey};
	position: fixed;
	width: 100%;
	bottom: 0;
`;

export const Line = styled.p`
	margin: 0;
`;
