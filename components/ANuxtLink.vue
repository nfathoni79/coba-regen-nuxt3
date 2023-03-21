<script setup>
import cntl from 'cntl'

const props = defineProps({
  type: String,
})

const typeClasses = computed(() => {
  switch (props.type) {
    case 'normal':
      return cntl`
        rounded-md border border-white
        bg-teal-700 hover:bg-teal-600 px-4 py-2
        font-semibold text-teal-50
      `
    case 'round':
      return cntl`
        rounded-full border-2 border-white
        bg-teal-500 hover:bg-teal-600 px-8 py-2
        font-semibold text-teal-50
      `
    case 'transparent':
      return cntl`
        border border-teal-600
        bg-transparent hover:bg-teal-600 px-4 py-2
        font-semibold text-teal-600 hover:text-teal-50
      `
    default:
      return cntl`
        rounded-md border border-white
        bg-teal-700 hover:bg-teal-600 px-4 py-2
        font-semibold text-teal-50
      `
  }
})
</script>

<template>
  <NuxtLink to="/"
    :class="overrideClass(
      ['inline-flex items-center justify-center', typeClasses], $attrs.class)">
    <slot></slot>
  </NuxtLink>
</template>