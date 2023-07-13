import React, { useState } from "react";
import Footer from "../../component/footer/Footer";
import Header from "../../component/header/Header";
import { strings } from "../../utils/strings";
import {
	PageContent,
	PageWrapper,
	AdTitle,
	AdText,
} from "./styles/Home.styles";
import Button from "../../component/button/Button";
import Modal from "../../component/modal/Modal";
import Form from "../../component/form/Form";

function Home() {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	return (
		<PageWrapper isActive={!isModalOpen}>
			<Header title={strings.companyName} />

			<PageContent>
				<AdTitle>{strings.homepageAdTitle}</AdTitle>
				<AdText>{strings.homepageAdText}</AdText>
				<Button
					title={strings.requestInviteButtonText}
					callback={() => {
						setIsModalOpen(true);
					}}
				/>
			</PageContent>

			<Footer texts={[strings.madeFrom, strings.copyRight]} />

			{isModalOpen && (
				<Modal
					content={<Form title={strings.requestFormTitle} />}
					closeModal={() => {
						setIsModalOpen(false);
					}}
				/>
			)}
		</PageWrapper>
	);
}

export default Home;
