import { strings } from "../../src/constants/strings";

describe("The App", () => {
	it("Shows the header, footer and page correctly", () => {
		cy.visit("http://localhost:3000");

		cy.get("header").should("contain", strings.homePage.header.title);
		cy.get("footer").should("contain", strings.homePage.footer.copyRight);
		cy.get('[data-testid="home-body"]').should(
			"contain",
			strings.homePage.content.homepageAdTitle1
		);
		cy.get('[data-testid="home-body"]').should(
			"contain",
			strings.homePage.content.homepageAdTitle2
		);
		cy.get('[data-testid="home-body"]').should(
			"contain",
			strings.homePage.content.homepageAdText
		);
		cy.get('[data-testid="home-body"]').within(() => {
			cy.get("button")
				.contains(strings.homePage.content.requestInviteButtonText)
				.should("exist");
		});
	});

	it("Home page should look good on all screens", () => {
		cy.visit("http://localhost:3000");

		cy.viewport("macbook-16");
		cy.wait(200);
		cy.viewport("macbook-15");
		cy.wait(200);
		cy.viewport("macbook-13");
		cy.wait(200);

		cy.viewport("ipad-mini");
		cy.wait(200);
		cy.viewport("iphone-xr");
		cy.wait(200);

		cy.viewport("iphone-x");
		cy.wait(200);
		cy.viewport("iphone-6");
		cy.wait(200);

		cy.viewport("samsung-s10");
		cy.wait(200);
		cy.viewport("samsung-note9");
		cy.wait(200);

		cy.viewport("ipad-2", "portrait");
		cy.wait(200);
		cy.viewport("iphone-4", "landscape");
		cy.wait(200);
	});

	it("Modal should look good on all screens", () => {
		cy.visit("http://localhost:3000");
		cy.get("button")
			.contains(strings.homePage.content.requestInviteButtonText)
			.click();

		cy.viewport("macbook-16");
		cy.wait(200);
		cy.viewport("macbook-15");
		cy.wait(200);
		cy.viewport("macbook-13");
		cy.wait(200);

		cy.viewport("ipad-mini");
		cy.wait(200);
		cy.viewport("iphone-xr");
		cy.wait(200);

		cy.viewport("iphone-x");
		cy.wait(200);
		cy.viewport("iphone-6");
		cy.wait(200);

		cy.viewport("samsung-s10");
		cy.wait(200);
		cy.viewport("samsung-note9");
		cy.wait(200);
	});

	it("Opens modal correctly when click on button, close when click on area outside the modal", () => {
		cy.visit("http://localhost:3000");

		cy.get("button")
			.contains(strings.homePage.content.requestInviteButtonText)
			.click();
		cy.get('[data-testid="modal"]').should("exist");

		// check whether all the element in the modal is rendered correctly
		cy.get('[data-testid="modal"]').should(
			"contain",
			strings.requestInvitePage.requestFormTitle
		);
		cy.get('[data-testid="modal"]').should(
			"contain",
			strings.requestInvitePage.sendButtonLabel
		);

		cy.get('[data-testid="modal"]').within(() => {
			cy.get('input[placeholder="Full Name"]').should("exist");
		});
		cy.get('[data-testid="modal"]').within(() => {
			cy.get('input[placeholder="Email"]').should("exist");
		});
		cy.get('[data-testid="modal"]').within(() => {
			cy.get('input[placeholder="Confirm Email"]').should("exist");
		});

		// If clicking outside the modal closes it
		cy.get("body").click(10, 10);
		cy.get('[data-testid="modal"]').should("not.exist");
	});

	it("In the modal, valition message should be shown if validation schema not passed", () => {
		cy.visit("http://localhost:3000");

		cy.get("button")
			.contains(strings.homePage.content.requestInviteButtonText)
			.click();
		cy.get('[data-testid="modal"]').should("exist");

		// click on Send button without any input filled
		cy.get("button")
			.contains(strings.requestInvitePage.sendButtonLabel)
			.click();

		cy.get('[data-testid="modal"]').should("contain", "Full Name is required");
		cy.get('[data-testid="modal"]').should("contain", "Email is required");

		// click on Send button with a name less than 3 letters
		cy.get('input[placeholder="Full Name"]').type("S");

		cy.get("button")
			.contains(strings.requestInvitePage.sendButtonLabel)
			.click();

		cy.get('[data-testid="modal"]').should(
			"contain",
			"Full Name must be at least 3 characters"
		);

		// click on Send button with an email which is not in email format
		cy.get('input[placeholder="Email"]').type("email-address-not-validated");

		cy.get("button")
			.contains(strings.requestInvitePage.sendButtonLabel)
			.click();

		cy.get('[data-testid="modal"]').should("contain", "Email is not valid");

		// click on Send button with an confirm email field does not match email field
		cy.get('input[placeholder="Email"]').type("stephen@airwallex.com");
		cy.get('input[placeholder="Confirm Email"]').type(
			"notstephen@airwallex.com"
		);

		cy.get("button")
			.contains(strings.requestInvitePage.sendButtonLabel)
			.click();

		cy.get('[data-testid="modal"]').should("contain", "Emails must match");
	});

	it("In the modal, all validation passed, but server response is 400", () => {
		cy.visit("http://localhost:3000");
		cy.get("button")
			.contains(strings.homePage.content.requestInviteButtonText)
			.click();
		cy.get('input[placeholder="Full Name"]').type("Stephen");
		cy.get('input[placeholder="Email"]').type("usedemail@airwallex.com");
		cy.get('input[placeholder="Confirm Email"]').type(
			"usedemail@airwallex.com"
		);
		cy.get("button")
			.contains(strings.requestInvitePage.sendButtonLabel)
			.click();
		cy.get('[data-testid="submit-button"]').should(
			"contain",
			"Sending, please wait..."
		);
		// Wait for a second
		cy.wait(3000);
		// Check if the button text changes back after 1 second
		cy.get('[data-testid="submit-button"]').should("contain", "Send");
		cy.get('[data-testid="modal"]').should(
			"contain",
			"Error: Bad Request: Email is already in use"
		);
	});

	it("In the modal, all validation passed, and server response is 200, shown the success page. If click on the OK button on success page, modal is closed", () => {
		cy.visit("http://localhost:3000");
		cy.get("button")
			.contains(strings.homePage.content.requestInviteButtonText)
			.click();
		cy.get('input[placeholder="Full Name"]').type("Stephen");
		cy.get('input[placeholder="Email"]').type("Stephen@airwallex.com");
		cy.get('input[placeholder="Confirm Email"]').type("Stephen@airwallex.com");
		cy.get("button")
			.contains(strings.requestInvitePage.sendButtonLabel)
			.click();
		cy.get('[data-testid="submit-button"]').should(
			"contain",
			"Sending, please wait..."
		);
		// Wait for a second
		cy.wait(3000);
		// should see success page
		cy.get('[data-testid="submit-button"]').should(
			"contain",
			strings.submitSuccessPage.buttonLabel
		);
		cy.get('[data-testid="modal"]').should(
			"contain",
			strings.submitSuccessPage.title
		);
		cy.get('[data-testid="modal"]').should(
			"contain",
			strings.submitSuccessPage.subTitle
		);
		// click on OK button, should close the modal
		cy.get("button").contains(strings.submitSuccessPage.buttonLabel).click();
		cy.get('[data-testid="modal"]').should("not.exist");
	});
});
