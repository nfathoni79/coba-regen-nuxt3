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
  const upAndNotActive = oldScrollY > newScrollY && !navVisible.value
  const downAndActive = oldScrollY <= newScrollY && navVisible.value
  const scrollDiff = Math.abs(oldScrollY - newScrollY)

  // Hitung jarak scroll untuk menampilkan/menyembunyikan Navbar
  if ((upAndNotActive || downAndActive)
      && scrollY.value > 0 && scrollDiff <= 400 ) {
    scrollAmount.value += scrollDiff 
  } else {
    scrollAmount.value = 0
  }

  // Tampilkan/sembunyikan Navbar setelah jarak scroll 400
  if (scrollAmount.value >= 400) {
    navVisible.value = !navVisible.value
  } else if (scrollY.value <= 0) {
    scrollAmount.value = 0
    navVisible.value = true
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
