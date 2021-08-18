import { defineComponent } from 'vue'

import AuthService from '@/services/auth/auth.service';
import { useStore } from '@/store';

export default defineComponent({
    setup() {
        const store = useStore();
    },

    data() {
        return {
            auth: new AuthService(),
            currentUser: '' as string | undefined,
            accessTokenExpired: false as boolean | undefined,
            isLoggedIn: false,

            dataEventRecordsItems: []
        }
    },

    mounted() {
        this.auth.getUser().then((user) => {

            this.currentUser = user?.profile?.name;
            this.accessTokenExpired = user?.expired;

            this.isLoggedIn = (user !== null && !user.expired);

            if (!this.isLoggedIn)
                this.login();
        });
    },

    computed: {
        username(): string | undefined {
            return this.currentUser;
        },
    },

    methods: {
        login() {
            this.auth.login();
        },

        logout() {
            this.auth.logout();
        }
    }
});