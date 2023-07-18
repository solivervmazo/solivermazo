<script setup>
import ThemeSwitcher from '../ThemeSwitcher.vue';
import AppHeaderLinks from '../shared/AppHeaderLinks.vue';

import { inject, ref } from 'vue';

const { logoLight, logoDark } = {
    'logoLight': new URL('../../assets/images/logo-light.png', import.meta.url).href,
    'logoDark': new URL('../../assets/images/logo-dark.png', import.meta.url).href,
}

const appTheme = inject('appTheme')
const isOpen = ref(false)

</script>

<template>
    <nav id="nav" class="fixed top-0 z-10 bg-gray-50 w-full x-0 mx-auto top-0 z-10  bg-primary-light dark:bg-primary-dark">
        <!-- Header start -->
        <div class="z-10 max-w-screen-lg mx-auto sm:flex justify-between sm:items-center my-3">
            <!-- Header menu links and small screen hamburger menu -->
            <div class="flex justify-between items-center px-4 sm:px-0">
                <!-- Header logos -->
                <div>
                    <router-link to="/"><img v-if="appTheme === 'light'" :src="logoDark" class="w-36" alt="Dark Logo" />
                        <img v-else :src="logoLight" class="w-36" alt="Light Logo" />
                    </router-link>
                </div>

                <!-- Small screen hamburger menu -->
                <div class="flex flex-items sm:hidden">
                    <theme-switcher
						class="sm:hidden bg-ternary-light dark:bg-ternary-dark hover:bg-hover-light dark:hover:bg-hover-dark hover:shadow-sm px-2.5 mx-1.5 py-2 rounded-lg"
					/>
                    <button @click="isOpen = !isOpen" type="button" class="focus:outline-none" aria-label="Hamburger Menu">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            class="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light">
                            <path v-if="isOpen" fill-rule="evenodd"
                                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                                clip-rule="evenodd"></path>
                            <path v-if="!isOpen" fill-rule="evenodd"
                                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Header links -->
            <AppHeaderLinks :isOpen="isOpen" />

            <!-- Header right section buttons -->
            <div class="hidden sm:flex justify-between items-center flex-col md:flex-row">
                <theme-switcher
                    class="ml-8 bg-primary-light dark:bg-ternary-dark px-3 py-2 shadow-sm rounded-xl cursor-pointer" />
            </div>
        </div>
    </nav>
</template>

<style  scoped>
    #nav a.router-link-exact-active {
        @apply text-indigo-700;
        @apply dark:text-indigo-400;
        @apply font-medium;
    }
</style>