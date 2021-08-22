import { store } from "@/store";
import { AUTH_STORE } from "@/store/stores";

export class AuthorizedApiBase {

    protected transformOptions = (options: RequestInit): Promise<RequestInit> => {
        const user = store.getters[AUTH_STORE.GETTERS.GET_CURRENT_USER];

        if (user == null || user.expired)
            return Promise.reject("User not logged in");

        options.headers = {
            ...options.headers,
            Authorization: `Bearer ${user.id_token}`,
        };

        return Promise.resolve(options);
    };
}