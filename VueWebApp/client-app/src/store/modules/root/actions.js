import { MutationTypes } from "./mutations";
export var ActionTypes;
(function (ActionTypes) {
    ActionTypes["SET_VERSION"] = "SET_VERSION";
})(ActionTypes || (ActionTypes = {}));
export const actions = {
    [ActionTypes.SET_VERSION]({ commit }, payload) {
        commit(MutationTypes.SET_VERSION, payload);
    }
};
//# sourceMappingURL=actions.js.map