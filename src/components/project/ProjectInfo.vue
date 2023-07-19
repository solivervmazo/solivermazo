<script setup>
import { inject } from 'vue';
import { capitalize } from '../../mixins/strings.js';
import { socshares as sochareData, getShareLink } from '../../data/socmeds';

const { project } = defineProps({
	project: Object
})

const { linkClass, socshares } = {
	linkClass: inject('linkClass'),
	socshares: sochareData
}

</script>

<template>
	<div>
		<!-- Single project client details -->
		<div v-if="project.details.client" class="mb-7">
			<p class="font-general-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2">
				{{ details.clientHeading }}
			</p>
			<ul class="leading-loose">
				<li v-for="info in details.companyInfos" :key="info"
					class="font-general-regular text-ternary-dark dark:text-ternary-light">
					<span>{{ info.title }}: </span>
					<a href="#" :class="info.title == 'Website' || info.title == 'Phone'
						? 'hover:underline cursor-pointer'
						: ''
						" aria-label="Project Website and Phone">{{ info.details }}</a>
				</li>
			</ul>
		</div>
		<!-- Single project source details -->
		<div v-if="project.details.guided" class="mb-7">
			<p class="font-general-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2">
				{{ project.details.guided.heading }}
			</p>

			<ul class="leading-loose">
				<li class="font-general-regular text-ternary-dark dark:text-ternary-light">
					<a :href="project.details.guided.courseUrl">
						{{ project.details.guided.courseTitle }}
					</a>
				</li>
				<span v-for="key in Object.keys(project.details.guided.details)" :key="key">
					<li v-if="project.details.guided.details[key]"
						class="font-general-regular text-ternary-dark dark:text-ternary-light">
						<span>{{ capitalize(key) }}:&nbsp;</span>
						<a :href="project.details.guided.details[key].url" :class="linkClass" target="_blank">
							{{ project.details.guided.details[key].name }}
						</a>
					</li>
				</span>

			</ul>
		</div>
		<!-- Single project objectives -->
		<div v-if="project.details.objective" class="mb-7">
			<p class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">
				{{ project.details.objective.heading }}
			</p>
			<p class="font-general-regular text-primary-dark dark:text-ternary-light">
				{{ project.details.objective.text }}
			</p>
		</div>

		<!-- Single project technologies -->
		<div v-if="project.details.tags" class="mb-7">
			<p class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">
				{{ project.details.tags.heading }}
			</p>
			<p class="font-general-regular text-primary-dark dark:text-ternary-light">
				{{ project.details.tags.tags.join(', ') }}
			</p>
		</div>
		<p class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">
			Share
		</p>
		<div class="flex items-center gap-3 mt-5">
			<a v-for="social in socshares" :key="social.id" :network="social.network"
				target="_blank"
				:href="getShareLink(social.network , `http://solivervmazo.github.io/solivermazo/${project.project}`, project.title)">
				<font-awesome-icon :icon="[social.set, social.icon]"
					class="w-4 lg:w-5 h-4 lg:h-5 text-ternary-dark dark:text-ternary-light"></font-awesome-icon>
			</a>
		</div>
	</div>
</template>
