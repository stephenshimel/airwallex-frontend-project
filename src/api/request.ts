import axios, { AxiosRequestConfig, AxiosError } from "axios";
import { notification } from "antd";

axios.defaults.timeout = 10000;

export const showErrorNotification = ({ title = "", content = "" }) => {
	notification.error({
		message: title,
		description: content,
	});
};

axios.interceptors.request.use((config: any) => {
	config.headers = {
		...config.headers,
		"Content-Type": "application/json",
	};
	return config;
});

// all the axios error in the app will be caught and displayed in UI
axios.interceptors.response.use(
	response => {
		return response;
	},
	error => {
		showErrorNotification({ content: error.message });
		throw error;
	}
);

interface IApiErrorResponse {
	errorMessage: string;
}

export const request = async <T = unknown>(
	options: AxiosRequestConfig
): Promise<T> => {
	if (!options || !Object.keys(options).length) {
		throw Error("You must pass request options to this function!");
	}

	return new Promise<T>((resolve, reject) =>
		axios({
			...options,
			method: options.method || "POST",
		})
			.then(res => resolve(res.data as T))
			.catch(e => {
				const message = (e as AxiosError<IApiErrorResponse>).response?.data
					?.errorMessage;
				return reject(new Error(message));
			})
	);
};
