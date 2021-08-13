<template>
    <a-layout id="components-layout-demo-top" class="layout" :style="{ height: '100%' }">
        <div v-if="isLoggedIn">
            <a-layout-header>
                <div class="logo" />
                <a-menu theme="dark"
                        mode="horizontal"
                        :default-selected-keys="['/home']"
                        :selected-keys="[$route.path]"
                        :style="{ lineHeight: '64px' }">
                    <a-menu-item key="/">
                        <router-link to="/">Home</router-link>
                    </a-menu-item>
                    <a-menu-item key="/users">
                        <router-link to="/users">Users</router-link>
                    </a-menu-item>
                    <a-menu-item key="/path">
                        <router-link to="/about">About</router-link>
                    </a-menu-item>
                    <a-menu-item @click="logout" style="margin-left: auto;">
                        Logout
                    </a-menu-item>
                </a-menu>
            </a-layout-header>

            <a-layout-content style="padding: 0 50px">
                <div :style="{ height: '100%', background: '#fff', padding: '24px', minHeight: '280px' }">
                    <router-view />
                </div>
            </a-layout-content>
        </div>

        <a-layout-footer style="text-align: center">
            Joe Resch ©2021
        </a-layout-footer>
    </a-layout>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    import AuthService from '@/components/auth/auth.service';

    export default defineComponent({

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
</script>