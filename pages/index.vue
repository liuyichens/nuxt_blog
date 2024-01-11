<template>
  <div class="container mx-auto flex flex-row gap-5 my-8 px-2.5 xl:px-0">
    <section class="flex-1 w-[70%] overflow-hidden dark:text-gray-400">
      <div class="container mx-auto">
        <div class="divide-y-2 divide-gray-100 dark:divide-gray-800">
          <!-- <div class="p-3.5 flex flex-nowrap gap-5" v-for="(post, index) in postList" :key="post.id" data-aos="fade-up"
            data-aos-duration="200" data-aos-once="false" data-aos-anchor-placement="top-bottom">
            <div class="left">
              <a href="" class="absolute top-0 left-0 w-full h-full rounded overflow-hidden">
                <img class="object-cover w-full h-full max-w-full" width="480" height="300" :src="post.cover"
                  alt="cover" />
              </a>
            </div>
            <div class="right">
              <h2 class="text-base sm:text-2xl font-medium text-gray-900 title-font mb-2 dark:text-white">
                <a href="" class="line-clamp-1">{{ post.title }}</a>
              </h2>
              <p class="text-xs sm:text-base leading-tight line-clamp-2">{{ post.summary }}</p>
              <div class="mt-4 flex justify-between items-center">
                <span class="text-gray-500 text-xs sm:text-sm">{{ post.date }}</span>
                <div class="px-2 flex flex-nowrap items-center gap-2 text-sm">
                  <Badge v-for="(tag, tagIndex) in post.tags" :key="tag + ',' + tagIndex" :color="tag.color">
                    {{ tag.name }}
                  </Badge>
                </div>
              </div>
            </div>
          </div> -->
          <div class="p-3.5 flex flex-nowrap gap-5" data-aos="fade-up">
            <div class="left">
              <a href="" class="absolute top-0 left-0 w-full h-full rounded overflow-hidden">
                <img class="object-cover w-full h-full max-w-full" width="480" height="300"
                  src="https://picsum.photos/id/24/367/267" alt="blog" />
              </a>
            </div>
            <div class="right">
              <h2 class="text-base sm:text-2xl font-medium text-gray-900 title-font mb-2 dark:text-white">
                <a href="" class="line-clamp-1">Bitters hashtag waistcoat fashion axe chia
                  unicorn</a>
              </h2>
              <p class="text-xs sm:text-base leading-tight line-clamp-2">Glossier echo park pug, church-key sartorial
                biodiesel vexillologist pop-up
                snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha
                lumbersexual pork belly polaroid hoodie portland craft beer.</p>
              <div class="mt-4 flex justify-between items-center">
                <span class="text-gray-500 text-sm">12 Jun 2019</span>
                <div class="px-2 flex flex-nowrap items-center gap-2 text-sm">
                  <span
                    class="inline-flex items-center px-2 py-1 text-xs font-medium ring-1 ring-inset bg-blue-50 text-blue-700 ring-blue-700/10 dark:text-blue-400 dark:ring-blue-400/10 dark:bg-blue-400/20">Tag1</span>
                  <span
                    class="inline-flex items-center bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 dark:bg-gray-400/10 dark:text-gray-400 dark:ring-gray-400/20">Badge</span>
                </div>
              </div>
            </div>
          </div>
          <div class="p-3.5 flex flex-wrap md:flex-nowrap" data-aos="fade-up">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="font-semibold title-font text-gray-700 dark:text-white">CATEGORY</span>
              <span class="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-medium text-gray-900 title-font mb-2 dark:text-white">Meditation bushwick direct
                trade
                taxidermy
                shaman</h2>
              <p class="leading-relaxed line-clamp-2">Glossier echo park pug, church-key sartorial biodiesel vexillologist
                pop-up
                snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha
                lumbersexual pork belly polaroid hoodie portland craft beer.</p>
              <a class="text-blue-500 inline-flex items-center mt-4 dark:text-blue-400">Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="p-3.5 flex flex-wrap md:flex-nowrap" data-aos="fade-up">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="font-semibold title-font text-gray-700 dark:text-white">CATEGORY</span>
              <span class="text-sm text-gray-500">12 Jun 2019</span>
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-medium text-gray-900 title-font mb-2 dark:text-white">Woke master cleanse drinking
                vinegar
                salvia
              </h2>
              <p class="leading-relaxed line-clamp-2">Glossier echo park pug, church-key sartorial biodiesel vexillologist
                pop-up
                snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha
                lumbersexual pork belly polaroid hoodie portland craft beer.</p>
              <a class="text-blue-500 inline-flex items-center mt-4 dark:text-blue-400">Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <aside class="max-w-[300px] w-full hidden lg:block">
      <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
    </aside>
  </div>
</template>
<script setup name="home">

</script>
<style scoped>
.left {
  @apply relative flex-1 before:content-[''] before:block before:pt-[60%]
}

.right {
  flex: 2.5;
  @apply flex flex-col justify-between w-0 flex-shrink-0;
}
</style>