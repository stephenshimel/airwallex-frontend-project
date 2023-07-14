// api.ts
import {
	UseMutationOptions,
	UseMutationResult,
	useMutation,
} from "react-query";
import axios, { AxiosError } from "axios";

interface IRequestData {
	name: string;
	email: string;
}

const url =
	"https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth";

const postRequestInviteData = (data: IRequestData) => {
	return axios
		.post(url, data)
		.then(response => {
			console.log("response.data", response.data);
			return response.data;
		})
		.catch(error => {
			if (axios.isAxiosError(error) && error.response) {
				console.error("error returned from server", error.response.status);
				throw error;
			} else {
				console.error("request didn't arrive at server properly", error);
				throw error;
			}
		});
};

// will catch error and wrap in the error property
const usePostRequestInviteData = (
	options?: UseMutationOptions<IRequestData, unknown, IRequestData>
): UseMutationResult<IRequestData, unknown, IRequestData> => {
	return useMutation((data: IRequestData) => postRequestInviteData(data), {
		onSuccess: data => {
			console.log("Mutation succeeded, returned data: ", data);
		},
		onError: error => {
			console.error("Mutation failed with error: ", error);
		},
		...options,
	});
};

export default usePostRequestInviteData;
