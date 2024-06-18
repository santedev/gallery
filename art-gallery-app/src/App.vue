<template>
  <navbar></navbar>
  <router-view/>
</template>

<script>
import Navbar from './components/NavBar.vue';

export default {
  components: {
    'navbar': Navbar
  }
};
</script>
<style>
:root {
  color-scheme: dark;
}
</style>
