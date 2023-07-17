import styled from "@emotion/styled";
import { colors } from "../../../constants/color";

export const FormWrapper = styled.form``;

export const InputsWrapper = styled.div`
	margin-bottom: 70px;
`;

export const FormTitle = styled.h2`
	text-align: center;
	color: ${colors.lightGrey};
	font-style: italic;
`;

export const FormSubTitle = styled.h3`
	text-align: center;
	color: ${colors.lightGrey};
	font-style: italic;
	margin-bottom: 70px;
`;

export const SeparatorLine = styled.div`
	background-color: ${colors.black};
	height: 1px;
	width: 50px;
	margin: 0 auto 50px;
`;

export const ErrorMessage = styled.p`
	text-align: center;
	color: ${colors.lightGrey};
	font-style: italic;
`;
