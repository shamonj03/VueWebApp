import { Module, ModuleTree } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { IRootState, state } from "./state";
import authModule from "../auth";

// Modules
const modules: ModuleTree<IRootState> = {
    auth: authModule
};

const root: Module<IRootState, IRootState> = {
    state,
    getters,
    mutations,
    actions,
    modules
};

export default root;