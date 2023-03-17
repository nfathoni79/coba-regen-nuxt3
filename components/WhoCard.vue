<script setup>
const props = defineProps({
  image: String,
  title: String,
  description: String,
  actionName: String,
  actionLink: String,
})
</script>

<template>
  <div class="bg-teal-700 px-8 py-12">
    <img :src="`/img/${image}`" alt="whoicon" class="mx-auto w-20">
    <h4 class="mt-4 text-lg font-semibold text-teal-400">{{ title }}</h4>
    <p class="mt-4 text-white">{{ description }}</p>
    <ALink type="round" class="mt-8">{{ actionName }}</ALink>
  </div>
</template>