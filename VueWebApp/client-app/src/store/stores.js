import { ActionTypes as AuthActions } from "./modules/auth/actions";
import { GetterTypes as AuthGetters } from "./modules/auth/getters";
import { MutationTypes as AuthMutations } from "./modules/auth/mutations";
import { ActionTypes as RootActions } from "./modules/root/actions";
import { GetterTypes as RootGetters } from "./modules/root/getters";
import { MutationTypes as RootMutations } from "./modules/root/mutations";
export const AUTH_STORE = {
    GETTERS: AuthGetters,
    MUTATIONS: AuthMutations,
    ACTIONS: AuthActions
};
export const ROOT_STORE = {
    GETTERS: RootGetters,
    MUTATIONS: RootMutations,
    ACTIONS: RootActions
};
//# sourceMappingURL=stores.js.map