<script setup>
import { projectUrl } from '../../mixins/urls.js';
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { ref } from 'vue';

const { linkClass, project } = defineProps({
	linkClass: String,
	project: Object
})

const open = ref(false)
const imgEnlarge = ref('')
</script>

<template>
	<div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
		<TransitionRoot as="template" :show="open">
			<Dialog as="div" class="relative z-10" @close="open = false">
				<TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
					leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
					<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				</TransitionChild>

				<div class="fixed inset-0 z-10 overflow-y-auto">
					<div
						class="flex items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<TransitionChild as="template" enter="ease-out duration-300"
							enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
							leave-from="opacity-100 translate-y-0 sm:scale-100"
							leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
							<DialogPanel
								class="relative max-w-screen-lg sm:max-h-screen transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all mt-10">
								<div :class="[linkClass]" class="bg-gray-50 px-3 py-3 sm:flex sm:flex-row-reverse sm:px-3">
									<font-awesome-icon 
										:icon="'xmark'" 
										class="w-4 h-4  cursor-pointer" 
										@click="open=false; imgEnlarge=undefined"
									></font-awesome-icon>
								</div>
								<div class="bg-white border-t-2 border-primary-light dark:border-secondary-dark  px-4 py-4 sm:p-6 sm:pb-4">
									<img 
										:src="imgEnlarge" 
										alt=""
									>
								</div>
							</DialogPanel>
						</TransitionChild>
					</div>
				</div>
			</Dialog>
		</TransitionRoot>
		<div class="mb-10 sm:mb-0" v-for="img in project.src.images" :key="img">
			<img :src="projectUrl(`${project.dir}/${project.project}-img-${img}`)"
				class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
				:alt="`${project.dir}/${project.project}-img-${img}`" 
				@click="open=true; imgEnlarge= $event.target.src"
			/>
	</div>
</div></template>
