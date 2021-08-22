import { defineComponent } from 'vue'
import { mapActions, mapGetters } from 'vuex';

import { auth } from '@/services/auth/auth.service';
import { AUTH_STORE } from '@/store/stores';

export default defineComponent({
    data() {

        return {
            ...mapGetters([AUTH_STORE.GETTERS.IS_LOGGED_IN])
        };
    },

    mounted() {
        auth.getUser().then((user) => {
            this.SET_CURRENT_USER(user);

            if (!this.IS_LOGGED_IN)
                this.login();
        });
    },

    methods: {
        login() {
            auth.login();
        },

        logout() {
            auth.logout();
        },

        ...mapActions([AUTH_STORE.ACTIONS.SET_CURRENT_USER])
    }
});