<script setup lang="ts">
import logo from "../assets/netflix-logo-png-2582.png";
</script>

<template>
  <div class="header top-0 fixed z-50 w-full h-16 transition duration-700">
    <div class="header__overlay absolute inset-0 w-full h-full"></div>
    <div class="relative z-10 flex items-center justify-between w-full h-full p-5 px-4 md:px-12">
      <div class="flex items-center">
        <nav class="lg:hidden" />

        <router-link
          :to="'/'"
          class="hover:text-gray-300 text-sm font-netflix_medium transition duration-300 text-white"
        >
          <img :src="logo" alt="logo" class="h-full w-24 object-cover ml-4" />
        </router-link>

        <div class="items-center space-x-5 hidden lg:flex lg:ml-12">
          <router-link
            :to="'/movies'"
            class="hover:text-gray-300 text-sm font-netflix_medium transition duration-300 text-white"
          >Movies</router-link>
          <router-link
            :to="'/favorites'"
            class="hover:text-gray-300 text-sm font-netflix_medium transition duration-300 text-white"
          >Bookmarks</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
