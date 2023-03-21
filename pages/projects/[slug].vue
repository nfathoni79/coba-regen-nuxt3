<script setup>
import { ArrowLeftIcon } from '@heroicons/vue/24/outline'

const route = useRoute()
const project = ref(null)

onMounted(() => {
  project.value = getProject(route.params.slug)

  if (!project.value) {
    throw createError({
      statusCode: 404,
      statusMessage: `Page not found: ${route.path}`,
    })
  }

  useHead({
    title: project.value.title,
    meta: [{
      name: 'description',
      content: project.value.description,
    }],
  })
})
</script>

<template>
  <section>
    <div class="mx-auto mt-32 max-w-5xl px-4">
      <div class="flex items-start gap-6">
        <NuxtLink :to="{ name: 'projects' }" class="mt-1">
          <ArrowLeftIcon class="w-8 h-8 text-gray-900" />
        </NuxtLink>

        <div>
          <h1 class="grow text-4xl font-semibold text-gray-900">
            {{ project ? project.title : '' }}
          </h1>

          <h2 class="mt-4 text-lg text-teal-600">{{ project ? project.partner : '' }}</h2>
        </div>
      </div>

      <div class="mt-8 grid grid-cols-1 md:grid-cols-5 gap-6">
        <div class="md:col-span-2 lg:col-span-3">
          <img :src="`/img/${project ? project.image : ''}`" alt="projectimage"
            class="w-full">
        </div>

        <div class="md:col-span-3 lg:col-span-2 p-4 bg-gray-100">
          <h4 class="text-lg font-medium text-gray-700 uppercase">Detail</h4>

          <div class="mt-4 grid grid-cols-3 gap-2">
            <h5 class="text-sm text-gray-700 uppercase">Partner</h5>
            <p class="col-span-2 text-sm text-gray-700">
              {{ project ? project.partner : '' }}
            </p>

            <h5 class="text-sm text-gray-700 uppercase">Location</h5>
            <p class="col-span-2 text-sm text-gray-700">
              {{ project ? project.location : '' }}
            </p>

            <h5 class="text-sm text-gray-700 uppercase">Type</h5>
            <p class="col-span-2 text-sm text-gray-700">
              {{ project ? project.type : '' }}
            </p>

            <h5 class="text-sm text-gray-700 uppercase">Started</h5>
            <p class="col-span-2 text-sm text-gray-700">
              {{ project ? project.started : '' }}
            </p>

            <h5 class="text-sm text-gray-700 uppercase">Certification</h5>
            <p class="col-span-2 text-sm text-gray-700">
              {{ project ? project.certification : '' }}
            </p>
          </div>

          <ALink type="round" class="mt-8 w-full">Explore Now</ALink>
        </div>
      </div>

      <div class="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
        <h4 class="md:text-right text-2xl font-semibold text-gray-700 uppercase">
          Project Overview
        </h4>
        <p class="md:col-span-3 text-gray-700">
          {{ project ? project.overview : '' }}
        </p>

        <hr class="md:col-start-2 md:col-span-3">

        <h4 class="md:text-right text-2xl font-semibold text-gray-700 uppercase">
          Impact Highlights
        </h4>
        <p class="md:col-span-3 text-gray-700">
          {{ project ? project.impact : '' }}
        </p>

        <hr class="md:col-start-2 md:col-span-3">
      </div>
    </div>
  </section>

  <!-- <section>
    <p v-for="n in 50" :key="n" class="text-4xl">
      {{ project ? project.title : '' }}
    </p>
  </section> -->
</template>