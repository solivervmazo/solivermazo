<script setup>
	import ProjectsGrid from '../components/project/ProjectsGrid.vue';
	import AppBanner from '../components/shared/AppBanner.vue';
	import { useHead } from '@unhead/vue';
	import { creatMeta } from '../mixins/heads.js';
	useHead({
		title: 'Soliver Mazo',
		meta: creatMeta(
			'Data Analyst, Sql, Python, Tableu, Google Sheets',
			'',
			'website',
			'Soliver Mazo'
		),
	})
</script>

<template>
    <div class="mx-auto">
		<!-- Banner -->
		<AppBanner class="mb-5 sm:mb-8" />

		<div class="container mx-auto">
			<!-- Projects -->
            <ProjectsGrid />

			<!-- Load more projects button -->
			<div class="mt-5 sm:mt-20 flex justify-center">
				<router-link
					to="/projects"
					class="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
					aria-label="More Projects"
				>
					<AppButton title="More Projects" />
				</router-link>
			</div>
		</div>
	</div>
</template>