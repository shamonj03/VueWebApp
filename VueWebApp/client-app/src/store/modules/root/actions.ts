import { ActionContext, ActionTree } from "vuex";
import { IRootState } from "./state";
import { MutationTypes, RootMutations } from "./mutations";

export enum ActionTypes {
    SET_VERSION = "SET_VERSION"
}
export interface IRootActions {
    [ActionTypes.SET_VERSION]({ commit }: AugmentedActionContext,  payload: string): void;
}

export const actions: ActionTree<IRootState, IRootState> & IRootActions = {
    [ActionTypes.SET_VERSION]({ commit }, payload: string) {
        commit(MutationTypes.SET_VERSION, payload);
    }
};

export type AugmentedActionContext = {
    commit<K extends keyof RootMutations>(
        key: K,
        payload: Parameters<RootMutations[K]>[1]
    ): ReturnType<RootMutations[K]>;
} & Omit<ActionContext<IRootState, IRootState>, "commit">;