import { useStore } from "@/store";
export class AuthorizedApiBase {
    transformOptions = (options) => {
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
//# sourceMappingURL=authorizedApiBase.js.map