<script setup>
import consults from '~/data/consults'
import projects from '~/data/projects'
import partners from '~/data/partners'
import seens from '~/data/seens'

useHead({
  title: 'Coba Regen Nuxt3',
  meta: [{
    name: 'description',
    content: 'Democratizing access to carbon markets.',
  }],
})
</script>

<template>
  <section class="bg-[url('/img/forest.jpg')]
    bg-fixed bg-center bg-cover">
    <div class="bg-black/50 pt-32 md:pt-36 pb-12 px-8 md:px-16">
      <div class="mx-auto max-w-7xl">
        <div class="max-w-2xl">
          <h1 class="text-5xl md:text-7xl leading-tight text-white">
            Democratizing access to carbon markets.
          </h1>
        </div>
        
        <div class="mt-8 ml-auto max-w-2xl rounded-md bg-black/60 px-4 py-6">
          <p class="text-lg text-white">
            Fairatmos is a carbon technology platform, enabling communities as project developers to develop carbon sequestration projects and companies to finance or offset.
          </p>

          <div class="mt-6 flex flex-col md:flex-row
            space-y-4 md:space-y-0 md:space-x-4">
            <ALink class="flex-1">I am a community or asset owner</ALink>
            <ALink class="flex-1">I am a business or buyer</ALink>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="mx-auto max-w-5xl py-8 md:py-16 text-center">
      <h1 class="text-4xl md:text-5xl font-semibold text-teal-700">
        Who is Fairatmos for?
      </h1>
      <p class="mt-6 mx-auto max-w-lg px-4
        text-lg text-teal-700 leading-loose">
        Create your carbon credit proposal, verify for credits, support projects and buy carbon credits all in one platform.
      </p>

      <div class="mt-8 flex flex-col md:flex-row
        space-y-4 md:space-y-0 md:space-x-6">
        <WhoCard
          image="who-icon.png"
          title="For Asset Owners and Communities"
          description="Are you an individual/organization that manage forest, agriculture, renewable energy or waste management activities?"
          actionName="Create a project"
          class="flex-1" />
        <WhoCard
          image="who-icon-2.png"
          title="For Business and Buyer"
          description="Are you an individual/organization who are interested to fund a green project or offset your carbon footprint?"
          actionName="Explore more"
          class="flex-1" />
      </div>
    </div>
  </section>

  <section>
    <div class="mx-auto max-w-5xl py-8 px-4 md:py-16">
      <h1 class="max-w-xl text-4xl md:text-5xl text-teal-700 leading-tight">
        Communities that have worked with us
      </h1>

      <div class="mt-12 flex flex-col md:flex-row
        space-y-4 md:space-y-0 md:space-x-6">
        <ProjectCard v-for="(project, index) in projects" :key="index"
          :slug="project.slug"
          :image="project.image"
          :title="project.title"
          :description="project.description"
          class="flex-1" />
      </div>

      <div class="mt-12 text-center">
        <ANuxtLink :to="{ name: 'projects' }" class="px-8 py-2">
          EXPLORE MORE
        </ANuxtLink>
      </div>
    </div>
  </section>

  <section>
    <div class="relative bg-teal-700">
      <div class="mx-auto max-w-5xl pt-8 py-12 px-4">
        <div class="md:max-w-md">
          <h1 class="text-4xl md:text-5xl text-teal-50 md:leading-normal">
            Our credible network of professionals you can trust
          </h1>
          <p class="mt-8 text-teal-50 leading-relaxed">
            We have an array of carbon experts with certified qualifications. Are you a carbon expert too? Join us!
          </p>

          <div class="text-center md:text-left">
            <ALink class="mt-8">Join as Expert</ALink>
          </div>
        </div>
      </div>

      <ConsultOverlay
        :consults="consults"
        class="static md:absolute md:w-[45%] lg:w-[36%] xl:w-[28%]
        md:top-0 md:left-1/2" />
    </div>
  </section>

  <section>
    <div class="mx-auto max-w-5xl py-16 px-4 text-center">
      <h1 class="text-4xl md:text-5xl font-semibold text-teal-700">
        Our Partners
      </h1>

      <div class="mt-16 flex flex-col md:flex-row items-center justify-center
        space-y-6 md:space-y-0 md:space-x-12">
        <div v-for="(partner, index) in partners" :key="index"
          class="block md:hidden">
          <img :src="`/img/${partner.image}`" alt="Partner"
            class="max-h-20">
        </div>
        
        <div v-for="(partner, index) in partners.slice(0, 5)" :key="index"
          class="hidden md:block">
          <img :src="`/img/${partner.image}`" alt="Partner"
            class="max-h-20">
        </div>
      </div>
      
      <div class="mt-12 hidden md:flex items-center justify-center space-x-16">
        <div v-for="(partner, index) in partners.slice(5, partners.length)" :key="index">
          <img :src="`/img/${partner.image}`" alt="Partner"
            class="max-h-20">
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="mx-auto max-w-md md:max-w-5xl py-16 px-4 text-center">
      <h1 class="text-4xl md:text-5xl font-semibold text-teal-700">
        As Seen On
      </h1>

      <div class="mt-16 flex flex-col md:flex-row items-center justify-center
        space-y-6 md:space-y-0 md:space-x-12">
        <div v-for="(seen, index) in seens" :key="index">
          <img :src="`/img/${seen.image}`" alt="Seen"
            class="max-h-20">
        </div>
      </div>
    </div>
  </section>
</template>