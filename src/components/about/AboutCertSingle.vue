<script setup>
const { cert } = defineProps({
	cert: Object
})
</script>

<template>
	<a :href="cert.credential" target="_blank"
		class="relative overflow-hidden rounded-xl shadow-lg  hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
		aria-label="Single Project">
		<div v-if="cert.featured" class="absolute left-0 top-0 h-16 w-16">
			<div
				class="bg-gradient-to-r from-green-400 to-blue-500 absolute transform -rotate-45 bg-gray-600 text-center text-white font-semibold py-1 left-[-34px] top-[32px] w-[170px]">
				Featured
			</div>
		</div>
		<div>
			<img :src="cert.img" :alt="cert.img" class="rounded-t-xl border-none" />
		</div>
		<div class="text-center px-4 py-6">
			<p class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2">
				{{ cert.title }}
			</p>
			<span class="font-general-medium text-sm text-ternary-dark dark:text-ternary-light">{{ cert.org }}</span>
		</div>
	</a>
</template>

<style lang="scss" scoped></style>
