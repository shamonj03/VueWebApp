import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { state } from "./state";
import authModule from "../auth";
// Modules
const modules = {
    authModule
};
const root = {
    state,
    getters,
    mutations,
    actions,
    modules
};
export default root;
//# sourceMappingURL=index.js.map