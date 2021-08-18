export var MutationTypes;
(function (MutationTypes) {
    MutationTypes["SET_CURRENT_USER"] = "SET_CURRENT_USER";
})(MutationTypes || (MutationTypes = {}));
export const mutations = {
    [MutationTypes.SET_CURRENT_USER](state, payload) {
        state.currentUser = payload;
    }
};
//# sourceMappingURL=mutations.js.map