<script setup>
import ProjectHeader from './ProjectHeader.vue';
import ProjectGallery from './ProjectGallery.vue';
import ProjectInfo from './ProjectInfo.vue';
import NotFound from '../error/Markdown404.vue';
import { defineAsyncComponent } from 'vue';
import { useHead } from '@unhead/vue';
import { creatMeta } from '../../mixins/heads.js';


const { project } = defineProps({
  project: Object,
})


const Md = defineAsyncComponent({
  loader: () => import(/* @vite-ignore */`../../data/projects/${project.dir}/${project.src?.md ?? '404'}.md`),
  timeout: 200,
  errorComponent: NotFound
})

function createDescription() {
  var description = project.title 
  // add tags to desc
  if(project?.details?.tags?.tags) {
    description = description + ' — ' + project.details.tags.tags.join(', ')  
  }
  return description
}

useHead({
  title: 'Soliver Mazo',
  meta: creatMeta(
    createDescription(),
    project.project,
    'article',
    'Soliver Mazo'
  ),
})

</script>

<template>
  <div class="container mx-auto mt-10 sm:mt-20">
    <!-- Project header -->
    <ProjectHeader :project="project" /><!-- Project gallery -->
    <ProjectGallery v-if="project.src && project.src.images && project.src.images.length > 0" :project="project" />
    <!-- Project information -->

    <div class="block sm:flex gap-0 sm:gap-10 mt-14">
      <div class="w-full sm:w-1/4 text-left">
        <ProjectInfo :project="project" />
      </div>
      <div class="w-full sm:w-3/4 text-left mt-10 text-sm sm:mt-0 bg-slate-100 p-3 rounded-md overflow-auto max-h-screen">
        <Md class="prose" />
      </div>
    </div>
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
