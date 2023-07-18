<script setup>
import { inject } from "vue"

const appTheme = inject('appTheme')

function toggleTheme() {
	appTheme.value = (appTheme.value == 'light' ? 'dark' : 'light');
	if(localStorage) localStorage.setItem('theme', appTheme.value)
}
</script>

<template>
	<a href="#" @click.prevent="toggleTheme" aria-label="Theme Switcher">
		<font-awesome-icon :icon="[ 'far', appTheme == 'light' ? 'moon' : 'sun']"
			class="text-primary-dark hover:text-gray-600 dark:hover:text-gray-400 dark:text-ternary-light dark:hover:border-primary-light w-5"></font-awesome-icon>
	</a>
</template>
