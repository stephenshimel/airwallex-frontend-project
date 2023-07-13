import styled from "@emotion/styled";

export const ModalWrapper = styled.div<{ padding?: string }>`
	background: white;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 40%;
	height: 40%;
	max-width: 500px;
	max-height: 80vh;
	border: solid 1px black;
	padding: ${({ padding = "30px" }) => padding};
`;
