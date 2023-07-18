<script setup>
import {  onBeforeMount, defineAsyncComponent } from 'vue' 
import { useHead } from '@unhead/vue'


const { project } = defineProps({
  project: Object,
})


const Md = defineAsyncComponent({
					loader: () => import(/* @vite-ignore */`../../data/projects/${project.dir}/README.md`),
					timeout: 200,
				}) 

useHead({
  title: 'Website Title',
  meta: [
    {
      name: 'description',
      content: project.title,
    },
  ],
})

</script>

<template>
    <div>
        <h1>{{ project.title }}</h1>
        <Md class="prose" />
    </div>

</template>

<style scoped>

.read-the-docs {
  color: #888;
}
</style>

<style lang="scss">
	@import "highlight.js/scss/a11y-light.scss";
</style>
