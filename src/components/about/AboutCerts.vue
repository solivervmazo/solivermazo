<script setup>
import AboutCertSingle from './AboutCertSingle.vue';
import { certificates as certificatesData } from '../../data/certificates.js';
import { inject } from 'vue';

const { certsHeading } = {
    certsHeading: 'Certificates'
}
const linkClass = inject('linkClass')
const certificates = JSON.parse(JSON.stringify(certificatesData['featured'])).reverse().splice(0, 4).concat(JSON.parse(JSON.stringify(certificatesData['courses'])).reverse().splice(0, 4))
</script>

<template>
    <div class="mt-10 sm:mt-20">
        <p class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light">
            {{ certsHeading }}
        </p>
        <div class="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2 ">
            <AboutCertSingle v-for="cert in certificates" :key="cert.id" :cert="cert" />
        </div>
        <router-link to="/credentials"
            class="font-general-medium text-center block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
            aria-label="Certificates">
            <a :class="[linkClass]">See all</a>
        </router-link>
    </div>
</template>
