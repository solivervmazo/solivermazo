<script setup>
	import ProjectsGrid from '../components/project/ProjectsGrid.vue';
	import { useHead } from '@unhead/vue';
	import { creatMeta } from '../mixins/heads.js';
	useHead({
			title: 'Soliver Mazo — Projects',
			meta: creatMeta(
				'Data Analyst, Sql, Python, Tableu, Google Sheets',
				'projects',
				'article',
				'Soliver Mazo'
			),
	})
</script>

<template>
	<div class="container mx-auto">
		<ProjectsGrid />
	</div>
</template>

<style scoped></style>
