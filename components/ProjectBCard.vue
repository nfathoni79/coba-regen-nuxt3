<script setup>
const props = defineProps({
  slug: String,
  image: String,
  title: String,
  description: String,
  link: String,
})
</script>

<template>
  <div class="flex flex-col gap-4 rounded-xl shadow-xl overflow-hidden ">
    <img :src="`/img/${image}`" alt="projectphoto"
      class="w-full">

    <div class="px-6">
      <h4 class="text-lg font-semibold text-teal-700">
        {{ title }}
      </h4>
    </div>

    <div class="grow px-6 pb-4">
      <p class="text-sm text-gray-700 leading-loose">{{ description }}</p>
    </div>

    <div class="px-6 pb-8 text-center">
      <ANuxtLink :to="{ name: 'projects-slug', params: { slug: slug } }"
        type="round">
        See more
      </ANuxtLink>
    </div>
  </div>
</template>