import styled from "@emotion/styled";
import { TPageWrapperProps } from "../types";
import { device } from "../../../constants/breakpoints";
import { colors } from "../../../constants/color";

export const PageWrapper = styled.div<TPageWrapperProps>`
	background-color: ${props => (props.isActive ? "white" : "#bcbec2")};
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`;

export const PageContent = styled.div`
	/* width: 100%; */
	color: ${colors.lightGrey};
	padding: 80px 0;
	flex-grow: 1;
	background-color: inherit;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 400px;
	margin: 0 auto;

	@media ${device.mobile} {
		width: 80%;
	}
`;
export const AdTitle = styled.h1`
	font-size: 50px;
	text-align: center;
	margin: 0;
`;

export const AdText = styled.h4`
	font-size: 20px;
	font-weight: 400;
	margin-bottom: 50px;
`;
