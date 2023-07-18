
import App from './App.vue';
import AppButton from './components/reusable/Button.vue';
import "./assets/styles/main.css";
import { ViteSSG } from 'vite-ssg';
import { router } from './route.js';
import { ref } from 'vue';


// Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faKaggle, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
library.add(faKaggle, faXmark, faGoogle , faMoon, faSun )


export const createApp = ViteSSG(
    App,
    {
        routes: router,
        base: import.meta.env.BASE_URL,
    }, 
    ({ app, router, routes, isClient, initialState }) => {
        // const appTheme = ref( localStorage ? (localStorage.getItem('theme') ?? 'light') : light )
        const appTheme = ref('dark')
        app.provide( 'appTheme', appTheme )
        app.component( 'AppButton', AppButton )
            .component('font-awesome-icon', FontAwesomeIcon)
    }
)