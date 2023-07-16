import {
	UseMutationOptions,
	UseMutationResult,
	useMutation,
} from "react-query";
import { request } from "../../api/request";

interface IRequestData {
	name: string;
	email: string;
}

const url =
	"https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth";

/**
 * @example { name: "Test Name", email: "test@airwallex.com" } => 200
 * @example { name: "Test Name", email: "usedemail@airwallex.com" } => 400
 */
const usePostRequestInviteData = (
	options?: UseMutationOptions<IRequestData, unknown, IRequestData>
): UseMutationResult<IRequestData, unknown, IRequestData> => {
	return useMutation(
		(data: IRequestData) =>
			request<IRequestData>({
				data,
				url,
			}),
		options
	);
};

export default usePostRequestInviteData;
