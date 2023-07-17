
import './style.css'
import App from './App.vue'
import { ViteSSG } from 'vite-ssg'
import { router } from './route.js'
import "./assets/styles/main.css";

export const createApp = ViteSSG(
    App,
    {
        routes: router
    }
)