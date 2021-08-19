import { computed, defineComponent } from 'vue'

import { auth } from '@/services/auth/auth.service';
import { store } from '@/store'
import { MutationTypes } from './store/modules/auth/mutations';

export default defineComponent({
    data() {

        return {
            isLoggedIn: computed(() => store.getters.isLoggedIn)
        };
    },

    mounted() {
        auth.getUser().then((user) => {
            store.commit(MutationTypes.SET_CURRENT_USER, user);

            if (!store.getters.isLoggedIn)
                this.login();
        });
    },

    methods: {
        login() {
            auth.login();
        },

        logout() {
            auth.logout();
        }
    }
});