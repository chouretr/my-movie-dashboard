<script setup lang="ts">
import type { Genre } from "@/models/genre.model";
import { computed } from "vue";

// (Action | Animation | Aventure | Comédie | Documentaire)
const PRE_SELECTED_GENRES_IDS: number[] = [28, 12, 16, 35, 99];

interface Props {
  genres: Genre[];
  selectedGenreId?: number;
}
const props = defineProps<Props>();
defineEmits(["on-genre-select"]);

const filteredGenres = computed(() =>
  props.genres.filter((g) => PRE_SELECTED_GENRES_IDS.some((id) => id === g.id))
);
</script>

<template>
  <ul class="list-reset flex border-b">
    <li
      v-for="genre in (filteredGenres as Genre[])"
      :key="genre.id"
      class="-mb-px mr-1"
    >
      <button
        class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-dark font-semibold"
        href="#"
        @click="$emit('on-genre-select', genre as Genre)"
      >
        {{ genre.name }}
      </button>
    </li>
  </ul>
</template>
