import { GetterTree } from "vuex";
import { IRootState } from "./state";

export enum GetterTypes {
    GET_VERSION = "GET_VERSION"
}

export interface IRootGetters {
    [GetterTypes.GET_VERSION](state: IRootState): string | undefined;
}

export const getters: GetterTree<IRootState, IRootState> &
    IRootGetters = {
    [GetterTypes.GET_VERSION]: (state: IRootState) => {
        return state.version || undefined;
    }
};