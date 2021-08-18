import { Store as VuexStore, CommitOptions, DispatchOptions } from "vuex";
import { IAuthActions } from "./actions";
import { IAuthGetters } from "./getters";
import { AuthMutations } from "./mutations";
import { IAuthState } from "./state";

export type AuthStoreModuleTypes<S = IAuthState> = Omit<
    VuexStore<S>,
    "commit" | "getters" | "dispatch"
> & {
    commit<
        K extends keyof AuthMutations,
        P extends Parameters<AuthMutations[K]>[1]
    >(
        key: K,
        payload?: P,
        options?: CommitOptions
    ): ReturnType<AuthMutations[K]>;
} & {
    getters: {
        [K in keyof IAuthGetters]: ReturnType<IAuthGetters[K]>;
    };
} & {
    dispatch<K extends keyof IAuthActions>(
        key: K,
        payload?: Parameters<IAuthActions[K]>[1],
        options?: DispatchOptions
    ): ReturnType<IAuthActions[K]>;
};