import React, { useState } from "react";
import Footer from "../../component/footer/Footer";
import Header from "../../component/header/Header";
import { strings } from "../../constants/strings";
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
			<Header title={strings.homePage.header.title} />

			<PageContent>
				<AdTitle>{strings.homePage.content.homepageAdTitle}</AdTitle>
				<AdText>{strings.homePage.content.homepageAdText}</AdText>
				<Button
					label={strings.homePage.content.requestInviteButtonText}
					onClick={() => {
						setIsModalOpen(true);
					}}
				/>
			</PageContent>

			<Footer
				content={[
					strings.homePage.footer.madeFrom,
					strings.homePage.footer.copyRight,
				]}
			/>

			{isModalOpen && (
				<Modal
					content={
						<RequestInviteForm
							buttonOnclick={() => {
								setIsModalOpen(false);
							}}
						/>
					}
					closeModal={() => {
						setIsModalOpen(false);
					}}
				/>
			)}
		</PageWrapper>
	);
}

export default Home;
