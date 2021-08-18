import { MutationTree } from "vuex";
import { IRootState } from "./state";

export enum MutationTypes {
    SET_VERSION = "SET_VERSION"
}

export type RootMutations<S = IRootState>= {
    [MutationTypes.SET_VERSION](state: S, payload: string): void;
}

export const mutations: MutationTree<IRootState> & RootMutations = {
    [MutationTypes.SET_VERSION](state: IRootState, payload: string) {
        state.version = payload;
    }
};
