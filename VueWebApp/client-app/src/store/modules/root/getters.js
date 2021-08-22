export var GetterTypes;
(function (GetterTypes) {
    GetterTypes["GET_VERSION"] = "GET_VERSION";
})(GetterTypes || (GetterTypes = {}));
export const getters = {
    [GetterTypes.GET_VERSION]: (state) => {
        return state.version || undefined;
    }
};
//# sourceMappingURL=getters.js.map