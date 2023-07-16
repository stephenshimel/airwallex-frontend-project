/* eslint-disable jest/no-conditional-expect */
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import * as requestModule from "../request";

const { request } = requestModule;

describe("request method", () => {
	const mock = new MockAdapter(axios);

	afterEach(() => {
		mock.reset();
	});

	it("should get data when request is successful", async () => {
		const data = { success: true };
		mock.onPost().reply(200, data);

		const response = await request({ method: "POST", url: "/" });
		expect(response).toEqual(data);
	});

	it("should throw error when request is unsuccessful", async () => {
		mock.onPost().networkError();

		try {
			await request({ method: "POST", url: "/" });
		} catch (error) {
			expect(error).toBeInstanceOf(Error);
		}
	});

	it.each([undefined, null, {}])(
		"throws error on null/undefined or empty object options",
		async option => {
			try {
				await request(option);
			} catch (error) {
				expect(error).toBeInstanceOf(Error);
				expect(error.message).toBe(
					"You must pass request options to this function!"
				);
			}
		}
	);

	it("should call showErrorNotification function when API call fails", async () => {
		const mockErrorResult = { errorMessage: "Network Error" };
		mock.onPost().replyOnce(400, mockErrorResult);

		const mockShowNotification = jest.spyOn(
			requestModule,
			"showErrorNotification"
		);
		const mockRequestOptions = {
			url: "https://mock.com/api/mock-url/",
			data: { name: "mock-name", email: "mock@email.com" },
		};

		const mockRequest = {
			...mockRequestOptions,
			method: "POST",
		};

		try {
			await request(mockRequestOptions);

			// Check if the method is triggered.
			expect(mockShowNotification).toBeCalledWith(mockRequest);
		} catch (error) {
			// Check if exception is thrown
			expect(error).toBeInstanceOf(Error);
			expect(error.message).toEqual(mockErrorResult.errorMessage);
		}
	});
});
