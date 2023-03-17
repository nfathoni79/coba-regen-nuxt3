<script setup>
import cntl from 'cntl'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const route = useRoute()

const props = defineProps({
  navs: Array,
  visible: Boolean,
})

const navTopClass = computed(() => {
  return props.visible ? 'top-0' : '-top-24'
})

const getNavClasses = (routeName) => {
  if (route.name == routeName) {
    return cntl`text-teal-600`
  }

  return cntl`text-gray-900 hover:text-teal-500`
}

const getMobileNavClasses = (routeName) => {
  if (route.name == routeName) {
    return cntl`bg-teal-600 text-teal-50`
  }

  return cntl`bg-transparent text-gray-900`
}

const setEnabledBodyScroll = (enable, closeFunction) => {
  if (closeFunction) closeFunction()

  enable
    ? document.body.classList.remove('overflow-y-hidden')
    : document.body.classList.add('overflow-y-hidden')
}
</script>

<template>
  <Disclosure as="div" v-slot="{ open }"
    :class="['fixed w-full shadow-lg z-50',
    'bg-white transition-all', navTopClass]">
    <div class="mx-auto max-w-7xl">
      <div class="flex h-24 items-center">
        <!-- Brand -->
        <div class="px-4 grow md:grow-0">
          <NuxtLink :to="{ name: 'index' }">
            <img src="/img/fairatmos-logo-h200.png" alt="Logo"
              class="h-12">
          </NuxtLink>
        </div>

        <!-- Mobile menu toggle -->
        <div class="block md:hidden px-4">
          <DisclosureButton>
            <Bars3Icon @click="setEnabledBodyScroll(false)"
              class="h-12 w-12 text-teal-600" />
          </DisclosureButton>
        </div>

        <!-- Desktop navs -->
        <div class="hidden md:flex flex-grow justify-center space-x-8">
          <NuxtLink v-for="nav in navs" :key="nav.name"
            :to="{ name: nav.routeName }"
            :class="getNavClasses(nav.routeName)">
            {{ nav.name }}
          </NuxtLink>
        </div>

        <!-- Desktop B20 -->
        <div class="hidden md:block">
          <a href="#">
            <img src="/img/b20-id-h200.png" alt="b20"
              class="h-24">
          </a>
        </div>
      </div>
    </div>

    <!-- Mobile navs -->
    <DisclosurePanel v-slot="{ close }"
      class="block md:hidden fixed inset-0 overflow-hidden bg-white">
      <div class="flex flex-row-reverse h-24 items-center">
        <div class="px-4">
          <DisclosureButton>
            <XMarkIcon @click="setEnabledBodyScroll(true)"
              class="h-12 w-12 text-teal-600" />
          </DisclosureButton>
        </div>
      </div>

      <div class="px-8">
        <div class="flex flex-col items-stretch divide-y-2 text-center">
          <NuxtLink v-for="nav in navs" :key="nav.name"
            :to="{ name: nav.routeName }"
            @click="setEnabledBodyScroll(true, close())"
            :class="['py-4', getMobileNavClasses(nav.routeName)]">
            {{ nav.name }}
          </NuxtLink>
          <div class="bg-red-800">
            <a href="#">
              <img src="/img/b20-id-h200.png" alt="b20"
                class="h-14 w-auto mx-auto">
            </a>
          </div>
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>