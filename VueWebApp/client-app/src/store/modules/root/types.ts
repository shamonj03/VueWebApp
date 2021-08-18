import { Store as VuexStore, CommitOptions, DispatchOptions } from "vuex";
import { IRootActions } from "./actions";
import { IRootGetters } from "./getters";
import { RootMutations } from "./mutations";
import { IRootState } from "./state";

export type RootStoreModuleTypes<S = IRootState> = Omit<
    VuexStore<S>,
    "commit" | "getters" | "dispatch"
> & {
    commit<
        K extends keyof RootMutations,
        P extends Parameters<RootMutations[K]>[1]
    >(
        key: K,
        payload?: P,
        options?: CommitOptions
    ): ReturnType<RootMutations[K]>;
} & {
    getters: {
        [K in keyof IRootGetters]: ReturnType<IRootGetters[K]>;
    };
} & {
    dispatch<K extends keyof IRootActions>(
        key: K,
        payload?: Parameters<IRootActions[K]>[1],
        options?: DispatchOptions
    ): ReturnType<IRootActions[K]>;
};