<script setup>
const props = defineProps({
  icon: Function,
  label: String,
  link: String,
  bgClasses: String,
})
</script>

<template>
  <div :class="['flex flex-row md:flex-col items-center justify-center',
    'gap-4 px-4 py-12', bgClasses]">
    <component :is="icon" class="h-24 w-24 text-blue-50" />
    <a :href="link"
      class="text-xl font-semibold text-blue-50
      text-center uppercase underline">
      {{ label }}
    </a>
  </div>
</template>