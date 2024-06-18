<template>
  <div class="relative px-6 pt-8 lg:px-8">
    <div class="mx-auto max-w-2xl pb-8 pt-5">
      <div class="text-center">
        <h1
          class="text-4xl font-bold text-balance tracking-tight text-neutal-100 sm:text-6xl"
        >
          Explore Our Art Collection
        </h1>
        <p class="mt-4 text-lg leading-8 text-balance text-neutral-600">
          Our gallery showcases iconic works that offer a
          glimpse of the rich heritage and enduring beauty of these classic artworks.
        </p>
      </div>
    </div>
  </div>
  <searchbar></searchbar>
</template>
<script>
import SearchBar from "../components/SearchBar.vue";
export default {
  components: {
    searchbar: SearchBar,
  },
};
</script>
