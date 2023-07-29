<script setup>
import ProjectHeader from './ProjectHeader.vue';
import ProjectGallery from './ProjectGallery.vue';
import ProjectInfo from './ProjectInfo.vue';
import NotFound from '../error/Markdown404.vue';
import { defineAsyncComponent } from 'vue';
import { useHead } from '@unhead/vue';
import { creatMeta } from '../../mixins/heads.js';
import { projectUrl } from '../../mixins/urls.js';


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
  if (project?.details?.tags?.tags) {
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
    'Soliver Mazo',
    project.metaImg ? projectUrl(`${project.dir}/${project.project}-img-${project.metaImg}`) : false
  )
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
        <div v-if="project.link || project.viz" class="mb-2 flex flex-row justify-end text-right mb-2 font-general-regular text-primary-dark dark:text-ternary-light bg-slate-100 ">
          <font-awesome-icon 
            :icon="[ 'far' , 'eye']"
            class="w-3.5 h-3.5 text-black">
          </font-awesome-icon> 
          <div class="px-1 hidden sm:block font-general-medium leading-none h-4 text-black"> View project in </div>
          <a v-if="project.link && project.link.name == 'Kaggle'" :href="project.link.url" target="_blank">
            <img class="object-cover h-4 px-2" :src="project.link.logo">
          </a>
          <a v-if="project.viz && project.viz.name == 'Tableau'" :href="project.viz.url" target="_blank">
            <img class="object-cover h-4 px-2" :src="project.viz.logo">
          </a>
        </div>
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
