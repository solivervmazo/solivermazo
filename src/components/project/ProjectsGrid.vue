<script setup>
import ProjectSingle from './ProjectSingle.vue';
import { projects as projectData } from '../../data/projects';

const projects = JSON.parse(JSON.stringify(projectData)).reverse();

</script>

<template>
	<!-- Projects grid -->
	<section class="pt-10 sm:pt-14">
		<!-- Projects grid title -->
		<div class="text-center">
			<p
				class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light">
				Projects Portfolio
			</p>
		</div>

		<!-- Projects grid -->
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
			<ProjectSingle v-for="project in projects" :key="project.id" :project="project" />
		</div>
	</section>
</template>

<style scoped></style>
