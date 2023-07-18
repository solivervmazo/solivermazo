<script setup>
import AboutCertSingle from '../about/AboutCertSingle.vue';
import { certificates } from '../../data/certificates.js';

const { certsHeading, featured, courses } = {
    certsHeading: 'Certificates',
    featured: JSON.parse(JSON.stringify(certificates['featured'])).reverse(),
    courses: JSON.parse(JSON.stringify(certificates['courses'])).reverse(),
}

</script>

<template>
    <div class="mt-10 sm:mt-20">
        <p class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light">
            {{ certsHeading }}
        </p>
        <p class="font-general-medium text-start text-2lg sm:text-3lg mt-2 sm:mt-6 text-primary-dark dark:text-primary-light">
            Featured
        </p>
        <div class="grid grid-cols-2 sm:grid-cols-4 mt-2 sm:mt-6 gap-2 mb-5">
            <AboutCertSingle v-for="cert in featured" :key="cert.id" :cert="cert" />
        </div>
        <div class="border-t-2 border-primary-light dark:border-secondary-dark">
            <p class="font-general-medium text-start text-2lg sm:text-3lg mt-2 sm:mt-6 text-primary-dark dark:text-primary-light">
                Courses
            </p>
            <div class="grid grid-cols-2 sm:grid-cols-4 mt-2 sm:mt-6 gap-2 ">
                <AboutCertSingle v-for="cert in courses" :key="cert.id" :cert="cert" />
            </div>
        </div>
    </div>
</template>
