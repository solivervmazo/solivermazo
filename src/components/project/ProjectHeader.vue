<script setup>
import { inject } from 'vue';
import { capitalize } from '../../mixins/strings';

const { project } = defineProps({
	project: Object
})

const linkClass = inject('linkClass')
</script>

<template>
	<div>
		<!-- Project heading and meta info -->
		<p
			class="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
			{{ project.title }}
		</p>
		<div class="flex">
			<div class="flex items-center mr-10">
				<!-- Project type -->
				<font-awesome-icon :icon="[ 'far', 'lightbulb' ]" class="w-4 h-4 text-ternary-dark dark:text-ternary-light"></font-awesome-icon>
				<span class="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light">{{
					capitalize(project.type) }}</span>
			</div>
			<div v-if="project.link" class="flex items-center mr-10">
				<!-- Project Link -->
				<font-awesome-icon v-if="project.link"
					:icon="[ project.link.set , project.link.icon]"
					class="w-4 h-4 text-ternary-dark dark:text-ternary-light"></font-awesome-icon>
				<a :href="project.link.url" target="_blank"
					:class="`font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light ${linkClass}`">
					{{ `View in ${project.link.name}` }}
				</a>
			</div>
			<!-- Project Date -->
			<div class="flex items-center">
				<font-awesome-icon :icon="[ 'far', 'clock' ]" class="w-4 h-4 text-ternary-dark dark:text-ternary-light"></font-awesome-icon>
				<span class="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light">{{
					project.date }}</span>
			</div>
		</div>
	</div>
</template>
