import React, { ReactElement } from "react";
import * as styles from "./styles/Header.styles";
import { THeaderProps } from "./types";

const Header = ({ title }: THeaderProps): ReactElement => {
	return (
		<styles.HeaderContainer>
			<styles.Title>{title}</styles.Title>
		</styles.HeaderContainer>
	);
};

export default Header;
