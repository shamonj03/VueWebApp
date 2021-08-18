// store/modules/counter/index.ts
import { Module } from "vuex";
import { IRootState } from "@/store/modules/root/state";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { IAuthState, state } from "./state";

// Module
const auth: Module<IAuthState, IRootState> = {
    state,
    getters,
    mutations,
    actions
};

export default auth;