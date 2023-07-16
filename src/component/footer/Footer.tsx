import React from "react";
import { v4 as uuidv4 } from "uuid";
import { FooterContainer, Line } from "./styles/Footer.styles";
import { TFooterProps } from "./types";

const Footer: React.FC<TFooterProps> = ({ content, className }) => {
	return (
		<FooterContainer className={className} data-testid='footer-wrapper'>
			{content?.map(text => (
				<Line key={uuidv4()}>{text}</Line>
			))}
		</FooterContainer>
	);
};

export default Footer;
