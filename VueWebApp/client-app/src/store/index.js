import { useStore as VuexStore, createStore } from "vuex";
import root from "./modules/root";
export const store = createStore(root);
export function useStore() {
    return VuexStore();
}
//# sourceMappingURL=index.js.map