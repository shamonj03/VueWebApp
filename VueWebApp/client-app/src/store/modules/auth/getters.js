export const getters = {
    currentUser: (state) => {
        return state.currentUser || null;
    },
    isLoggedIn: (state) => {
        return state.currentUser != null && !state.currentUser.expired;
    }
};
//# sourceMappingURL=getters.js.map