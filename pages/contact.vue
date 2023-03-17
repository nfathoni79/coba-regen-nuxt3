<script setup>
import cntl from 'cntl'
import contactItems from '~/data/contactItems'

useHead({
  title: 'Contact Us',
  meta: [{
    name: 'description',
    content: 'We are eager to get to know you. Let us know what is your drive to reach us.',
  }],
})

const inputClasses = cntl`
  block w-full
  border-0 border-b hover:border-b-2
  border-gray-200 hover:border-black
  focus:ring-0 focus:border-black
`

const getContactItemBgClasses = (index) => {
  return index % 4 < 2 ? cntl`bg-blue-900` : cntl`bg-blue-500`
}
</script>

<template>
  <section class="bg-[url('/img/sky.jpg')]
    bg-fixed bg-center bg-cover">
    <div class="bg-black/20 pt-32 md:pt-40 pb-8 md:pb-16 px-8 md:px-16
      text-center">
      <h1 class="mx-auto max-w-2xl text-4xl md:text-6xl
        font-medium text-white">
        Contact Us
      </h1>

      <p class="mx-auto max-w-2xl mt-6 md:mt-12
        text-xl text-white leading-loose">
        We are eager to get to know you. Let us know what is your drive to reach us, whether to register your project, be a supporter, be an expert, or even joining our team!
      </p>
    </div>
  </section>

  <section>
    <div class="flex flex-col md:flex-row">
      <ContactItem v-for="(item, index) in contactItems" :key="index"
        :icon="item.icon"
        :label="item.label"
        :link="item.link"
        :bgClasses="getContactItemBgClasses(index)"
        class="flex-1" />
    </div>
  </section>

  <section>
    <div class="mx-auto max-w-2xl px-8 py-16">
      <div class="text-center space-y-6">
        <h4 class="text-3xl font-semibold text-teal-600">
          Have any other questions?
        </h4>

        <p class="text-sm text-gray-700">
          Let us know what are your inquiries and we will contact you back as soon as possible.
        </p>
      </div>

      <form @submit.prevent="" action=""
        class="mt-16 grid grid-cols-4 gap-6">
        <label class="block col-span-4 md:col-span-2">
          <span class="font-semibold text-teal-600">First name</span>
          <input type="text" placeholder="" :class="inputClasses">
        </label>

        <label class="block col-span-4 md:col-span-2">
          <span class="font-semibold text-teal-600">Last name</span>
          <input type="text" placeholder="" :class="inputClasses">
        </label>

        <label class="block col-span-4">
          <span class="font-semibold text-teal-600">Email</span>
          <input type="email" placeholder="" :class="inputClasses">
        </label>

        <label class="block col-span-4">
          <span class="font-semibold text-teal-600">Write a message</span>
          <textarea rows="3" :class="inputClasses"></textarea>
        </label>

        <SubmitButton class="col-span-4 col-start-1
          md:col-span-2 md:col-start-2">
          Submit
        </SubmitButton>
      </form>
    </div>
  </section>
</template>