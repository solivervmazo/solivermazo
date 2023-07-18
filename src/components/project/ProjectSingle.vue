<script setup>
import { capitalize } from '../../mixins/strings.js'
import { projectUrl } from '../../mixins/urls.js';
import { inject } from 'vue';

const imgProjectErrorUrl = inject('imgProjectErrorUrl')

const { project } = defineProps({
  	project: Object
})

</script>

<template>
	<router-link :to="{ path: `/projects/${project.project}`}"
		class="relative rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
		aria-label="Single Project">
		<div class="overflow-hidden max-h-40">
			<img 
				:src="projectUrl(`${project.dir}/${project.project}-img-${project.img}`)" 
				:alt="project.img" 
				@error="$event.target.src = imgProjectErrorUrl"
				class="rounded-t-xl border-none" 
			/>
		</div>
		<div class="text-center px-4 pt-6 pb-4">
			<p class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2">
				{{ project.title }}
			</p>
		</div>
		<div v-if="project.details && project.details.tags" class="flex px-4 pt-2 pb-8">
			<span class="font-general-medium pt-0 px-1 text-sm text-ternary-dark dark:text-ternary-light">
				{{ project.details.tags.tags.join(', ') }}
			</span>
		</div>
		<div class="absolute inset-x-0 bottom-0 text-right px-2 pt-2 pb-2">
			<p class="font-general-medium pt-0 px-1 text-sm text-ternary-dark dark:text-ternary-light">
				{{ capitalize(project.type) }}
			</p>
		</div>

	</router-link>
</template>

<style lang="scss" scoped></style>
