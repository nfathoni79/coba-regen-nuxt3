<script setup>
import cntl from 'cntl'
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  consults: Array,
})

const position = ref(0)

const nextConsult = () => {
  if (position.value >= props.consults.length - 1) {
    position.value = 0
  } else {
    position.value++
  }
}

const prevConsult = () => {
  if (position.value <= 0) {
    position.value = props.consults.length - 1
  } else {
    position.value--
  }
}

const toConsult = (newPosition) => {
  position.value = newPosition
}

const getIndicatorClasses = (thePosition) => {
  if (thePosition == position.value) {
    return cntl`h-3 w-3 rounded-full border-2`
  }

  return cntl`h-2 w-2 rounded-full bg-teal-50`
}
</script>

<template>
  <div class="bg-teal-900">
    <div class="flex items-center">
      <!-- Previous -->
      <div class="px-2">
        <button @click="prevConsult()">
          <ChevronLeftIcon class="h-10 w-10 text-teal-50" />
        </button>
      </div>
      
      <!-- Content -->
      <div class="grow flex flex-col p-4 space-y-4 md:min-h-[28rem]">
        <StarIcon class="h-8 w-8 text-teal-50" />
        <h4 class="text-2xl font-medium text-teal-50">
          {{ consults[position].title }}
        </h4>
        <p class="grow text-teal-50">
          {{ consults[position].description.substring(0, 200) }}
        </p>
        
        <div class="text-center">
          <ALink>Book Consultation</ALink>
        </div>

        <!-- Indicators -->
        <div class="flex items-center justify-center space-x-2">
          <button v-for="(item, index) in consults" :key="index"
            @click="toConsult(index)"
            :class="getIndicatorClasses(index)"></button>
        </div>
      </div>
      
      <!-- Next -->
      <div class="px-2">
        <button @click="nextConsult()">
          <ChevronRightIcon class="h-10 w-10 text-teal-50" />
        </button>
      </div>
    </div>
  </div>
</template>