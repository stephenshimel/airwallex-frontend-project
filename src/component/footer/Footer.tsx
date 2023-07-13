import React from "react";
import { v4 as uuidv4 } from "uuid";
import * as styles from "./styles/Footer.styles";
import { TFooterProps } from "./types";

const Footer: React.FC<TFooterProps> = ({ texts }) => {
	return (
		<styles.FooterContainer>
			{texts.map(text => (
				<styles.Line key={uuidv4()}>{text}</styles.Line>
			))}
		</styles.FooterContainer>
	);
};

export default Footer;
