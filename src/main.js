
import App from './App.vue';
import AppButton from './components/reusable/Button.vue';
import "./assets/styles/main.css";
import { ViteSSG } from 'vite-ssg';
import { router } from './route.js';
import { ref } from 'vue';


// Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faKaggle, faGoogle, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faMoon, faSun, faEnvelope, faMap, faClock, faLightbulb } from '@fortawesome/free-regular-svg-icons';
library.add(
    faKaggle, faXmark, faGoogle , faMoon, faSun, faGithub, faLinkedin, faEnvelope, faMap, faClock, faLightbulb )


export const createApp = ViteSSG(
    App,
    {
        routes: router,
        base: import.meta.env.BASE_URL,
    }, 
    ({ app, router, routes, isClient, initialState }) => {
        const appTheme = ref('light');
        try {
            appTheme.value = localStorage.getItem('theme') ?? 'light'
        }catch (error) {
            
        }
        app.provide( 'appTheme', appTheme )
            .provide('linkClass' , 'text-indigo-600 dark:text-indigo-300')
            .provide('imgProjectErrorUrl', new URL(`../src/assets/images/placeholder-project.jpg`, import.meta.url).href)
        app.component( 'AppButton', AppButton )
            .component('font-awesome-icon', FontAwesomeIcon)
    }
)