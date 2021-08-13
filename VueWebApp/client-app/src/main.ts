import { createApp } from 'vue'
import AntD from 'ant-design-vue'
import App from './App.vue'
import router from './router'

import '@/assets/scss/app.scss';
import 'ant-design-vue/dist/antd.css';

createApp(App)
    .use(router)
    .use(AntD)
    .mount('#app')
