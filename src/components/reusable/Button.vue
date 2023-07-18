<script setup>
	const { title } = defineProps({
		title: String
	})
</script>

<template>
	<button>{{ title }}</button>
</template>

