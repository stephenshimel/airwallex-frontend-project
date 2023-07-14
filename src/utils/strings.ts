const companyName = "Broccoli & Co.";

export const strings = {
	// TODO: category Home page
	homePage: {
		header: { title: companyName.toUpperCase() },
		footer: {
			madeFrom: `Made with \u2665 in Melbourne`,
			copyRight: `© 2016 Broccoli & Co. All rights reserved`,
		},
		content: {
			homepageAdTitle: "A better way to enjoy every day",
			homepageAdText: "Be the first to know when we launch",
			requestInviteButtonText: "Request an invite",
		},
	},
	requestInvitePage: {
		requestFormTitle: "Request an invite",
		sendButtonLabel: "Send",
		loadingButtonLabel: "Sending, pleasae wait...",
	},
	submitSuccessPage: {
		title: "All done!",
		subTitle: `You will be one of the first to experience ${companyName} when w launch`,
		buttonLabel: "OK",
	},
};
