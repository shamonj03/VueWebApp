import { useStore as VuexStore, createStore } from "vuex";

import root from "./modules/root";
import { IRootState } from "./modules/root/state";
import { RootStoreModuleTypes } from "./modules/root/types";

// Add additional stores
import { AuthStoreModuleTypes } from "./modules/auth/types";

export const store = createStore<IRootState>(root);

type StoreModules = {
    auth: AuthStoreModuleTypes;
    root: RootStoreModuleTypes;
};

export type Store = AuthStoreModuleTypes<Pick<StoreModules, "auth">> &
    RootStoreModuleTypes<Pick<StoreModules, "root">>;

export function useStore(): Store {
    return VuexStore() as Store;
}