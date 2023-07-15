import styled from "@emotion/styled";
import { device } from "../../../constants/breakpoints";

export const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: start;
	height: 80px;
	background-color: inherit;
	border-bottom: 1px solid black;
	padding-left: 150px;
	color: grey;
	position: fixed;
	width: 100%;

	@media ${device.mobile} {
		justify-content: center;
		padding-left: 0;
	}
`;

export const Title = styled.h2``;
