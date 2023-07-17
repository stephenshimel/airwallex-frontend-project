import React, { useCallback, useState } from "react";
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
import ErrorBoundary from "../../utils/ErrorBoundary";

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
				<AdTitle>{strings.homePage.content.homepageAdTitle}</AdTitle>
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

			{isModalOpen && (
				<ErrorBoundary>
					<Modal
						content={<RequestInviteForm closeModal={closeModal} />}
						closeModal={() => {
							setIsModalOpen(false);
						}}
					/>
				</ErrorBoundary>
			)}
		</PageWrapper>
	);
}

export default Home;
