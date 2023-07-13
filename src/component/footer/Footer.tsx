import React from "react";
import * as styles from "./styles/Footer.styles";
import { TFooterProps } from "./types";

const Footer: React.FC<TFooterProps> = ({ texts }) => {
	return (
		<styles.FooterContainer>
			{texts.map(text => (
				<styles.Line>{text}</styles.Line>
			))}
		</styles.FooterContainer>
	);
};

export default Footer;
