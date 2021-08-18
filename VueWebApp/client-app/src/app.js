import { defineComponent } from 'vue';
import AuthService from '@/services/auth/auth.service';
import { useStore } from '@/store';
export default defineComponent({
    setup() {
        const store = useStore();
    },
    data() {
        return {
            auth: new AuthService(),
            currentUser: '',
            accessTokenExpired: false,
            isLoggedIn: false,
            dataEventRecordsItems: []
        };
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
        username() {
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
//# sourceMappingURL=app.js.map