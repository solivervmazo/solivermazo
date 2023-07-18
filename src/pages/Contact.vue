<script setup>
import ContactDetails from '../components/contact/ContactDetails.vue';
import { useHead } from '@unhead/vue';
import { creatMeta } from '../mixins/heads.js';

const contacts = [
		{
			id: 1,
			name: 'Davao City, Davao del Sur Philippines, 8000',
			set: 'far',
			icon: 'map',
		},
		{
			id: 2,
			name: 'solivervmazo.jobs@gmail.com',
			set: 'far',
			icon: 'envelope',
		},
		{
			id: 3,
			name: 'github.com/solivervmazo',
			set: 'fab',
			icon: 'github',
		},
		{
			id: 3,
			name: 'linkedin.com/in/solivervmazo/',
			set: 'fab',
			icon: 'linkedin',
		},
	]

	useHead({
		title: 'Soliver Mazo — Contact',
		meta: creatMeta(
			'Data Analyst, Sql, Python, Tableu, Google Sheets',
			'contact',
			'article',
			'Soliver Mazo'
		),
	})
</script>

<template>
	<div
		class="container mx-auto flex flex-col-reverse md:flex-row py-5 md:py-10 md:mt-10"
	>
		<!-- Contact details -->
		<ContactDetails :contacts="contacts" />
	</div>
</template>
