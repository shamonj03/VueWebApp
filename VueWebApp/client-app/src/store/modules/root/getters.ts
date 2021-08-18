import { GetterTree } from "vuex";
import { IRootState } from "./state";

export interface IRootGetters {
    version(state: IRootState): string | undefined;
}

export const getters: GetterTree<IRootState, IRootState> &
    IRootGetters = {
    version: (state: IRootState) => {
        return state.version || undefined;
    }
};