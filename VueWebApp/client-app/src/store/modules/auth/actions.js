import { MutationTypes } from "./mutations";
export var ActionTypes;
(function (ActionTypes) {
    ActionTypes["SET_CURRENT_USER"] = "SET_CURRENT_USER";
})(ActionTypes || (ActionTypes = {}));
export const actions = {
    [ActionTypes.SET_CURRENT_USER]({ commit }, payload) {
        commit(MutationTypes.SET_CURRENT_USER, payload);
    }
};
//# sourceMappingURL=actions.js.map