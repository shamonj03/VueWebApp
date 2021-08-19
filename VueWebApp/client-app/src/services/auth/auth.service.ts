﻿import { UserManager, WebStorageStateStore, User } from 'oidc-client';

export default class AuthService {
    private userManager: UserManager;

    constructor() {
        const STS_DOMAIN: string = 'https://localhost:5001';

        const settings: any = {
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
        };

        this.userManager = new UserManager(settings);
    }

    public getUser(): Promise<User | null> {
        return this.userManager.getUser();
    }

    public login(): Promise<void> {
        return this.userManager.signinRedirect();
    }

    public logout(): Promise<void> {
        return this.userManager.signoutRedirect();
    }

    public getAccessToken(): Promise<string> {
        return this.userManager.getUser().then((data: any) => {
            return data.access_token;
        });
    }
}

export const auth = new AuthService();