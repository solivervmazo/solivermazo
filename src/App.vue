<script setup>
	import AppHeader from './components/shared/AppHeader.vue';
	import AppFooter from './components/shared/AppFooter.vue';

	import { inject } from 'vue';

	const appTheme = inject('appTheme')


</script>

<template>
    <div :class="appTheme" class="pt-0.5 ">
		<div class="flex flex-col dark:bg-primary-dark min-h-screen">
			<AppHeader class="flex-none" />
			<!-- Render active component contents with vue transition -->
			<div class="flex-grow pt-8">
				<router-view :theme="appTheme" />
			</div>
			<!-- App footer -->
			<AppFooter class="flex-none pt-5" />
		</div>
    </div>
</template>

<style>

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	/* text-align: center; */
}

.vue-back-to-top {
	@apply p-2 bg-indigo-500 hover:bg-indigo-600 text-white transition
        duration-500
        ease-in-out
        transform
        hover:-translate-y-1 hover:scale-110;
	border-radius: 50%;
	font-size: 22px;
	line-height: 22px;
}

.fade-enter-active {
	animation: coming 0.4s;
	animation-delay: 0.2s;
	opacity: 0;
}

.fade-leave-active {
	animation: going 0.4s;
}

@keyframes going {
	from {
		transform: translateX(0);
	}

	to {
		transform: translateX(-10px);
		opacity: 0;
	}
}

@keyframes coming {
	from {
		transform: translateX(-10px);
		opacity: 0;
	}

	to {
		transform: translateX(0px);
		opacity: 1;
	}
}
</style>
