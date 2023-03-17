<script setup>
import navs from '~/data/navs'

useHead({
  title: 'Coba Regen Nuxt3',
  meta: [{
    name: 'description',
    content: 'Democratizing access to carbon markets.'
  }],
})

const navVisible = ref(true)
const scrollY = ref(0)
const scrollAmount = ref(0)

const handleScroll = () => {
  scrollY.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

watch(scrollY, (newScrollY, oldScrollY) => {
  // Hitung jarak scroll untuk menampilkan/menyembunyikan Navbar
  if (oldScrollY > newScrollY && !navVisible.value
      || (oldScrollY <= newScrollY && navVisible.value)) {
    scrollAmount.value += Math.abs(oldScrollY - newScrollY)
  } else {
    scrollAmount.value = 0
  }

  // Tampilkan/sembunyikan Navbar setelah jarak scroll 400
  if (scrollAmount.value >= 400) {
    navVisible.value = !navVisible.value
  }
})
</script>

<template>
  <div>
    <Navbar :navs="navs" :visible="navVisible" />

    <NuxtPage />

    <AFooter />
  </div>
</template>
