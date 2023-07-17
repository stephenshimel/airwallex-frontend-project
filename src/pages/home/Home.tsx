import React, { useCallback, useState } from "react";
import Footer from "component/footer/Footer";
import Header from "component/header/Header";
import {
	PageContent,
	PageWrapper,
	AdTitle,
	AdText,
} from "./styles/Home.styles";
import RequestInviteForm from "./request-invite-form/RequestInviteForm";
import { strings } from "constants/strings";
import Button from "component/button/Button";
import Modal from "component/modal/Modal";
import ErrorBoundary from "utils/ErrorBoundary";

function Home() {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	// reduce unnecessary rerender for children components using openModal/closeModal method
	const openModal = useCallback(() => {
		setIsModalOpen(true);
	}, []);

	const closeModal = useCallback(() => {
		setIsModalOpen(false);
	}, []);

	return (
		<PageWrapper isActive={!isModalOpen}>
			<Header title={strings.homePage.header.title} />

			<PageContent data-testid='home-body'>
				<AdTitle>{strings.homePage.content.homepageAdTitle1}</AdTitle>
				<AdTitle>{strings.homePage.content.homepageAdTitle2}</AdTitle>

				<AdText>{strings.homePage.content.homepageAdText}</AdText>
				<Button
					label={strings.homePage.content.requestInviteButtonText}
					onClick={openModal}
				/>
			</PageContent>

			<Footer
				content={[
					strings.homePage.footer.madeFrom,
					strings.homePage.footer.copyRight,
				]}
			/>

			<ErrorBoundary>
				<Modal
					content={<RequestInviteForm closeModal={closeModal} />}
					closeModal={() => {
						setIsModalOpen(false);
					}}
					isModalOpen={isModalOpen}
				/>
			</ErrorBoundary>
		</PageWrapper>
	);
}

export default Home;
