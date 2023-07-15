import styled from "@emotion/styled";
import { device } from "../../../constants/breakpoints";

export const ModalWrapper = styled.div<{ padding?: string }>`
	background: white;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 500px;
	border: solid 1px black;
	padding: ${({ padding = "30px" }) => padding};
	overflow: scroll;
	@media ${device.mobile} {
		width: 80%;
	}
`;
