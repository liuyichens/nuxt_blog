<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap h-screen -mx-5">
        <div class="left-content relative w-full px-5 flex-grow-0 flex-shrink-0
        xl:pr-10 bg-amber-500 h-screen">
          <main>
            <div class="post-archive">
              <div class="archive-wrap">
                <div class="archive-main archive-list">
                  <article>
                    <div class="post-outer flex flex-wrap -mx-5">
                      <div class="post-inner">
                        <div class="overflow-hidden">
                          <div class="entry-thumbnail">
                            <div class="overlay">
                              <div class="overlay-background">
                                <img :src="`https://picsum.photos/640/360?t=${new Date().getTime()}`" alt="" width="380"
                                     height="220" loading="lazy">
                              </div>
                              <div class="overlay-content">

                              </div>
                              <a href="#" class="overlay-link"></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="post-inner">
                        <div class="meta-category flex flex-wrap items-center mb-6 text-[10px] font-medium tracking-normal uppercase">

                        </div>
                        <div class="entry-header">
                          <h2 class="entry-title lg:text-2xl font-medium tracking-tight">
                            <a href="#">Sapien Lorem Libero Augue Tincidunt</a>
                          </h2>
                          <ul class="post-meta">

                          </ul>
                        </div>
                        <div class="entry-details"></div>
                      </div>
                    </div>
                  </article>
                  <article>

                  </article>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div class="right-content flex flex-wrap -mx-5 mt-12
         lg:flex lg:flex-col lg:mx-0 lg:mt-0 lg:relative lg:w-full lg:px-5 lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[340px] lg:max-w-[340px]
         bg-amber-700 h-screen"></div>
      </div>
    </div>
  </section>
</template>
<script setup>
useSeoMeta({
  title: 'Home'
})
</script>
<style scoped>
.left-content {
  flex-basis: calc(100% - 340px);
  max-width: calc(100% - 340px);
}

.archive-wrap .archive-main article {
  margin-top: 4rem;
}

.archive-wrap .archive-main.archive-list article:first-child {
  margin-top: 0;
}

.post-inner:not(:last-child) {
  margin-bottom: 1.5rem;
}

.entry-thumbnail {
  @apply overflow-hidden;
}

.overlay {
  @apply relative flex flex-row justify-start w-full
  before:content-[''] before:table before:box-border before:w-0 before:h-full before:pb-[60%]
}

.overlay-background {
  @apply absolute top-0 right-0 bottom-0 left-0 w-full h-full bg-neutral-950/30;
}

.overlay-background img {
  @apply absolute left-0 top-0 right-0 bottom-0 w-full h-full object-cover
}

.overlay-content {
  @apply flex flex-col justify-end relative p-5 w-full;
}

.overlay-link {
  @apply absolute block left-0 top-0 right-0 bottom-0 transition-colors duration-200 ease-in-out
  hover:text-[#9a8f97];
}

@media (min-width: 720px) {
  .archive-wrap .archive-list .post-inner {
    position: relative;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    flex: 0 0 50%;
    max-width: 50%;
    margin-bottom: 0;
  }
}

@media (min-width: 720px) {
  .archive-wrap .archive-list .post-inner:last-child {
    @apply flex flex-col mt-0;
  }
}

</style>
