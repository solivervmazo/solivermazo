<script setup>
	import Certificates from '../components/credentials/Certificates.vue';
	import { useHead } from '@unhead/vue';
	import { creatMeta } from '../mixins/heads.js';

	useHead({
		title: 'Soliver Mazo — Credentials',
		meta: creatMeta(
			'Data Analyst, Sql, Python, Tableu, Google Sheets',
			'credentials',
			'article',
			'Soliver Mazo'
		),
	})
</script>

<template>
	<div>
		<div class="container mx-auto">
			<Certificates />
		</div>
	</div>
</template>

<style scoped></style>
