<script setup>
	import { inject } from "vue"
	const theme = inject('appTheme')
	const bannerImage =  new URL('../../assets/images/soliver-mazo-data-analysis.png', import.meta.url).href
</script>

<template>
	<section
		class="w-full relative pt-20"
	>
		<!-- Banner right bg -->
		<div class="max-h-72 h-72 w-full text-right float-right mb-4">
			<img
				class="object-cover max-h-72 w-full text-right float-right"
				:src="bannerImage"
				alt="Developer"
			/>
		</div>
		<div
			class="absolute w-full max-h-72 h-72 flex flex-col justify-between"
		>
			<div
				class="container flex flex-col mx-auto sm:justify-end sm:flex-row mt-12 sm:mt-10"
			>
				<!-- Banner left contents -->
				<div class="w-full md:w-3/3 text-right">
					<h1
						class="font-general-semibold text-3xl md:text-3xl xl:text-4xl text-primary-light uppercase"
					>
						Hi, I'm Soliver
					</h1>
					<p
						class="font-general-medium mt-2 text-lg sm:text-xl  xl:text-2xl leading-none text-gray-200"
					>
						Aspiring Data Analyst
					</p>
				</div>
			</div>
			<div
				class="typewriter container flex flex-col mx-auto sm:justify-end sm:flex-row mb-8 sm:mb-8"
			>
				<p
					class="font-general-medium mt-2 text-right py-1 text-md sm:text-lg  xl:text-2xl leading-tight text-gray-100  bg-primary-dark px-2"
				>
					SQL • PYTHON • TABLEAU • GOOGLE SHEETS<span class="px-1 typer_end">.</span>
				</p>
			</div>
		</div>
	</section>
</template>

<style scoped></style>
