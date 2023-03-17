<script setup>
import products from '~/data/products'

useHead({
  title: 'Our Products',
  meta: [{
    name: 'description',
    content: 'Technology is the key to scale. Our four technology platforms will help to scale GHG sequestration effort for all.',
  }],
})

const isProductBgDark = (index) => {
  return index % 4 == 1 || index % 4 == 2
}
</script>

<template>
  <section class="bg-[url('/img/forest.jpg')]
    bg-fixed bg-center bg-cover">
    <div class="bg-black/50 pt-32 md:pt-40 pb-8 md:pb-16 px-8 md:px-16
      text-center">
      <h1 class="mx-auto max-w-2xl text-4xl md:text-6xl
        font-medium text-white">
        Our Products
      </h1>

      <p class="mx-auto max-w-2xl mt-6 md:mt-12
        text-xl text-white leading-loose">
        Technology is the key to scale. Our four technology platforms will help to scale GHG sequestration effort for all.
      </p>
    </div>
  </section>

  <section>
    <div class="mx-auto max-w-5xl py-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProductCard v-for="(product, index) in products" :key="index"
          :icon="product.icon"
          :title="product.title"
          :description="product.description"
          :dark="isProductBgDark(index)" />
      </div>
    </div>
  </section>
</template>