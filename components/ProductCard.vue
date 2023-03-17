<script setup>
import cntl from 'cntl'

const props = defineProps({
  icon: Function,
  title: String,
  description: String,
  dark: Boolean,
})

const bgClasses = computed(() => {
  return props.dark ? cntl`bg-gray-100` : ''
})
</script>

<template>
  <div :class="['flex flex-col items-center space-y-4 md:space-y-6',
  'px-8 md:px-16 py-6 text-center', bgClasses]">
    <component :is="icon" class="h-16 w-16 text-teal-600" />
    <h4 class="text-2xl font-bold text-teal-600">{{ title }}</h4>
    <p class="text-base md:text-sm text-gray-600">{{ description }}</p>
    <ALink type="transparent">Read More</ALink>
  </div>
</template>