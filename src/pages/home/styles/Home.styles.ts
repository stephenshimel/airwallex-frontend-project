import styled from "@emotion/styled";
import { TPageWrapperProps } from "../types";

export const PageWrapper = styled.div<TPageWrapperProps>`
	background-color: ${props => (props.isActive ? "white" : "#bcbec2")};
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`;

export const PageContent = styled.div`
	width: 100%;
	color: grey;
	padding: 80px 0;
	flex-grow: 1;
	background-color: inherit;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
export const AdTitle = styled.h1``;

export const AdText = styled.h4``;
