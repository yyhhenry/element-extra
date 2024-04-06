import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import { useColorMode } from '@vueuse/core';
import { websiteName } from '@/utils/website-name';
import { useTitle } from '@vueuse/core';

useTitle(websiteName);

useColorMode();

const app = createApp(App);
app.mount('#app');
