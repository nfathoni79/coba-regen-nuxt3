<script setup>
import projects from '~/data/projects'

useHead({
  title: 'Our Projects',
  meta: [{
    name: 'description',
    content: 'Our Projects.',
  }],
})
</script>

<template>
  <section class="bg-[url('/img/forest.jpg')]
    bg-fixed bg-center bg-cover">
    <div class="bg-black/50 pt-32 md:pt-48 pb-8 md:pb-24 px-8 md:px-16
      text-center">
      <h1 class="mx-auto max-w-2xl text-4xl md:text-6xl
        font-medium text-white">
        Our Projects
      </h1>
    </div>
  </section>

  <section>
    <div class="mx-auto max-w-5xl px-4 py-4 md:py-16">
      <div class="flex flex-col md:flex-row gap-6">
        <ProjectBCard v-for="(project, index) in projects" :key="index"
          :image="project.image"
          :title="project.title"
          :description="project.moreDescription"
          class="flex-1" />
      </div>
    </div>
  </section>
</template>