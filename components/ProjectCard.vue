<script setup>
import { ChevronRightIcon } from '@heroicons/vue/24/solid'

const props = defineProps({
  image: String,
  title: String,
  description: String,
  link: String,
})
</script>

<template>
  <div class="group relative overflow-hidden pb-8">
    <div class="md:group-hover:-translate-y-12 transition-all">
      <img :src="`/img/${image}`" alt="projectphoto" class="w-full">

      <h4 class="mt-4 text-lg font-semibold text-teal-700">
        {{ title }}
      </h4>
      <p class="mt-4 text-gray-900">{{ description }}</p>
    </div>

    <div class="text-center">
      <ALink type="transparent"
        class="mt-4 mx-auto md:mt-0 inline-flex md:hidden md:group-hover:inline-flex
        static md:group-hover:absolute
        md:group-hover:bottom-0 md:group-hover:left-1/2
        md:group-hover:-translate-x-1/2
        transition-all">
        See more <ChevronRightIcon class="ml-1 h-4 w-4" />
      </ALink>
    </div>
  </div>
</template>