import { useStore } from "@/store";
import { auth } from "@/services/auth/auth.service";

export class AuthorizedApiBase {

    protected transformOptions = (options: RequestInit): Promise<RequestInit> => {
        const store = useStore();
        const user = store.getters.currentUser;

        if (user == null || user.expired)
            return Promise.reject("User not logged in");

        options.headers = {
            ...options.headers,
            Authorization: `Bearer ${user.id_token}`,
        };

        return Promise.resolve(options);
    };
}