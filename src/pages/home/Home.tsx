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

import RequestInviteForm from "./request-invite-form/RequestInviteForm";

function Home() {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	return (
		<PageWrapper isActive={!isModalOpen}>
			<Header title={strings.companyName} />

			<PageContent>
				<AdTitle>{strings.homepageAdTitle}</AdTitle>
				<AdText>{strings.homepageAdText}</AdText>
				<Button
					label={strings.requestInviteButtonText}
					callback={() => {
						setIsModalOpen(true);
					}}
				/>
			</PageContent>

			<Footer texts={[strings.madeFrom, strings.copyRight]} />

			{isModalOpen && (
				<Modal
					content={<RequestInviteForm />}
					closeModal={() => {
						setIsModalOpen(false);
					}}
				/>
			)}
		</PageWrapper>
	);
}

export default Home;
