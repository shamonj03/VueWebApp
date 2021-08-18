import { createApp } from 'vue'

import AntD from 'ant-design-vue'
import router from './router'
import { store } from "@/store";

import App from './App.vue'

import '@/assets/scss/app.scss';
import 'ant-design-vue/dist/antd.css';

createApp(App)
    .use(router)
    .use(store)
    .use(AntD)
    .mount('#app')
