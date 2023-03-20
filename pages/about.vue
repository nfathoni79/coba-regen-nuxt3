<script setup>
useHead({
  title: 'About Us',
  meta: [{
    name: 'description',
    content: '1 billion+ tonnes of GHG needs to be sequestered every year',
  }],
})
</script>

<template>
  <div class="bg-[url('/img/sky.jpg')]
    bg-fixed bg-center bg-cover">
    <section>
      <div class="bg-black/20 pt-32 md:pt-40 pb-24 md:pb-36 px-8 md:px-16
        text-center">
        <h1 class="mx-auto max-w-2xl text-4xl md:text-6xl
          font-medium text-white">
          About Us
        </h1>

        <p class="mx-auto max-w-2xl mt-6 md:mt-12
          text-xl text-white leading-loose">
          1 billion+ tonnes of GHG needs to be sequestered every year<br>
          We only have plans to reduce 150 million tonnes today
        </p>
      </div>
    </section>

    <section>
      <div class="relative bg-white py-16 md:py-32">
        <div class="z-10 static md:absolute mx-8 md:mx-0
          -translate-y-32 md:translate-y-0 md:-top-16
          md:left-8 lg:left-auto lg:right-1/2
          w-auto md:w-2/5 lg:w-1/3
          rounded-2xl shadow-2xl bg-white p-10">
          <div class="space-y-4">
            <p class="text-gray-700">
              Indonesia is home for 920,000+ sq km forest cover, 623,000+ sq km of agriculture land with massive sequestration potential<br>
              Indonesia is committed to National Determined Contribution (NDC) of 29% GHG reduction by 2030 and up to 41% with international support<br>
              Everyone needs to contribute
            </p>

            <div class="mx-auto md:mx-0 h-1 w-16 bg-teal-600"></div>

            <p class="text-gray-700">
              Developing a scalable GHG sequestration project is hard<br>
              Uphill technical barriers to meet standardization requirements and upfront costs hinders communities and organizations to take a part<br>
            </p>

            <div class="mx-auto md:mx-0 h-1 w-16 bg-teal-600"></div>

            <p class="text-gray-700">
              We believe in the power of technology and community to break these barriers
            </p>
          </div>

          <div class="mt-8 text-center">
            <ALink type="round">Our Products</ALink>
          </div>
        </div>

        <div class="mx-auto max-w-7xl">
          <div class="-mt-16 md:mt-0 md:ml-auto
            md:max-w-md lg:max-w-lg xl:max-w-xl px-8">
            <h1 class="text-4xl md:text-5xl font-semibold text-teal-600">
              Our Mission
            </h1>

            <p class="mt-8 text-gray-700">
              Developing a Green House Gasses (GHG) sequestration project and getting fairly rewarded was hard, but not anymore. With our technology and platform, we want to give equal access to everyone to take a part as Project developers, Experts or Supporters.
            </p>

            <div class="text-center md:text-left">
              <ALink type="round" class="mt-8">See More</ALink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="relative bg-white pt-8 md:pt-24 pb-0 md:pb-72 lg:pb-48">
        <h1 class="ml-8 md:ml-0 mb-8 md:mb-16 text-4xl md:text-5xl
          font-semibold text-teal-600 text-left md:text-center">
          Resources
        </h1>

        <div class="static md:absolute md:left-1/2 md:-translate-x-1/2
          w-auto md:w-4/5 lg:w-2/3">
          <div class="flex flex-col md:flex-row gap-0 md:gap-8">
            <div class="flex-1 bg-white p-8">
              <h4 class="text-xl font-semibold text-teal-600">
                Our Why: Fairatmos
              </h4>

              <p class="mt-4">
                Carbon emissions affect the planet significantly, as they are the greenhouse gas with the highest levels of emissions in the atmosphere. This causes global warming and climate change. Global carbon dioxide (CO2) emissions from fossil fuels and industry have increased significantly since 2000, and in 2019 reached a record high of 36.7 billion metric tons of CO2. In December 2015, private companies and governments all over the world committed to minimize the increase of global temperature in the <span class="font-bold">Paris Agreement</span>.
              </p>
            </div>
            
            <div class="flex-1 bg-white p-8">
              <h4 class="text-xl font-semibold text-teal-600">
                What is Carbon Trading?
              </h4>

              <p class="mt-4">
                Carbon trading is an activity of buying and selling carbon credits, in which typically the  buyer produces carbon emissions that exceed the specified limit, or have their personal target to become a net zero or carbon neutral individual or company. A carbon credit is a representation of the 'right' for a company to emit a certain amount of carbon or other greenhouse gas emissions in its industrial processes. One unit of carbon credit is equivalent to a reduction in emissions of 1 tonne of carbon dioxide (CO2).
              </p>
            </div>
          </div>

          <div class="relative md:static mt-6 md:mt-12 text-center">
            <ALink type="round" class="absolute md:static top-4 left-1/2
              -translate-x-1/2 md:translate-x-0">
              See More
            </ALink>
          </div>
        </div>
      </div>

      <div class="h-24 md:h-80"></div>
    </section>
  </div>
</template>