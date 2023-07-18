<script setup>
    import AboutMe from '../components/about/AboutMe.vue';
    import AboutCerts from '../components/about/AboutCerts.vue';
	import { useHead } from '@unhead/vue';
	import { creatMeta } from '../mixins/heads.js';

	useHead({
		title: 'Soliver Mazo',
		meta: creatMeta(
			'Data Analyst, Sql, Python, Tableu, Google Sheets',
			'about',
			'article',
			'Soliver Mazo'
		),
	})

</script>

<template>
	<div>
		<!-- About me -->
		<div class="container mx-auto">
			<AboutMe />
		</div>
		<div class="container mx-auto">
			<AboutCerts/>
		</div>
	</div>
</template>

<style scoped></style>
