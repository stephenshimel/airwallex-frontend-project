import React, { ReactElement } from "react";
import { HeaderContainer, Title } from "./styles/Header.styles";
import { THeaderProps } from "./types";

const Header = ({ title, className }: THeaderProps): ReactElement => {
	return (
		<HeaderContainer className={className} data-testid='header-wrapper'>
			<Title>{title}</Title>
		</HeaderContainer>
	);
};

export default Header;
