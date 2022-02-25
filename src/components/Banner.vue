<script setup lang="ts">
import type { Movie } from "@/models/movie.model";

interface Props {
  bannerMovie: Movie;
}

defineProps<Props>();
</script>

<template>
  <section class="w-full h-screen">
    <div class="w-full h-full">
      <div class="banner-container relative w-full h-full">
        <div class="min-w-full min-h-full">
          <img
            :src="'https://image.tmdb.org/t/p/original' + bannerMovie.backdrop_path"
            alt="banner"
            class="object-cover w-full h-full"
          />
        </div>

        <div class="banner__overlay absolute inset-0 flex items-center px-12">
          <transition
            appear
            enter-active-class="animate__animated animate__slideInUp"
            leave-active-class="animate__animated animate__slideInDown"
            mode="out-in"
          >
            <div class="w-[40%] space-y-6 text-white">
              <h1 class="text-3xl font-bold line-clamp-2">
                {{ bannerMovie.title || bannerMovie.original_title }}
              </h1>

              <p class="text-lg line-clamp-4 font-medium">
                {{ bannerMovie.overview }}
              </p>

              <div class="flex items-center space-x-2">
                <button class="text-black bg-white">
                  <p class="text-bold">Play</p>
                </button>
                <button
                  class="text-white bg-secondary bg-opacity-60 hover:bg-opacity-40 shadow-lg"
                >
                  <p class="text-bold">More info</p>
                </button>
              </div>
            </div>
          </transition>
        </div>

        <div class="banner__overlay--down absolute bottom-0 h-32 w-full"></div>
      </div>
    </div>
  </section>
</template>
