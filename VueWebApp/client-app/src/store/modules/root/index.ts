// store/modules/counter/index.ts
import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { IRootState, state } from "./state";

// Module
const Root: Module<IRootState, IRootState> = {
    state,
    getters,
    mutations,
    actions
};

export default Root;