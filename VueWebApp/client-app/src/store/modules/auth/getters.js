export var GetterTypes;
(function (GetterTypes) {
    GetterTypes["GET_CURRENT_USER"] = "GET_CURRENT_USER";
    GetterTypes["IS_LOGGED_IN"] = "IS_LOGGED_IN";
})(GetterTypes || (GetterTypes = {}));
export const getters = {
    [GetterTypes.GET_CURRENT_USER]: (state) => {
        return state.currentUser || null;
    },
    [GetterTypes.IS_LOGGED_IN]: (state) => {
        return state.currentUser != null && !state.currentUser.expired;
    }
};
//# sourceMappingURL=getters.js.map