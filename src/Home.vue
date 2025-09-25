<template>
  <div class="main-content">
    <router-view />
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";

export default {
  name: 'App',
  components: {
    Navigation,
  },
};
</script>

<style scoped>
.main-content {
  padding: 0rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

h1 {
  font-family: var(--title-font);
  color: var(--title-color);
  letter-spacing: -1.2px;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
}
</style>
