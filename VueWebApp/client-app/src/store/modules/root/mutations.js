export var MutationTypes;
(function (MutationTypes) {
    MutationTypes["SET_VERSION"] = "SET_VERSION";
})(MutationTypes || (MutationTypes = {}));
export const mutations = {
    [MutationTypes.SET_VERSION](state, payload) {
        state.version = payload;
    }
};
//# sourceMappingURL=mutations.js.map