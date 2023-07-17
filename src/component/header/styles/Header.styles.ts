import styled from "@emotion/styled";
import { device } from "../../../constants/breakpoints";
import { colors } from "../../../constants/color";

export const HeaderContainer = styled.header`
	display: flex;
	align-items: center;
	justify-content: start;
	height: 80px;
	background-color: inherit;
	border-bottom: 1px solid black;
	padding-left: 150px;
	color: ${colors.lightGrey};
	position: fixed;
	width: 100%;

	@media ${device.mobile} {
		justify-content: center;
		padding-left: 0;
	}
`;

export const Title = styled.h2``;
