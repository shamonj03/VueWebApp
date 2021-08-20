import { UserManager, WebStorageStateStore } from 'oidc-client';
export default class AuthService {
    userManager;
    constructor() {
        const STS_DOMAIN = 'https://localhost:5001';
        const settings = {
            userStore: new WebStorageStateStore({ store: window.localStorage }),
            authority: STS_DOMAIN,
            client_id: 'vuejs_code_client',
            redirect_uri: 'https://localhost:44363/callback.html',
            automaticSilentRenew: true,
            silent_redirect_uri: 'https://localhost:44363/silent-renew.html',
            response_type: 'code',
            scope: 'openid profile',
            post_logout_redirect_uri: 'https://localhost:44363/',
            filterProtocolClaims: true,
            client_secret: 'SomethingSuperSecret'
        };
        this.userManager = new UserManager(settings);
    }
    getUser() {
        return this.userManager.getUser();
    }
    login() {
        return this.userManager.signinRedirect();
    }
    logout() {
        return this.userManager.signoutRedirect();
    }
    getAccessToken() {
        return this.userManager.getUser().then((data) => {
            return data.access_token;
        });
    }
}
export const auth = new AuthService();
//# sourceMappingURL=auth.service.js.map