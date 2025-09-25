<template>
  <div>
    <Navigation />
    <Hero />
    <Suits />
    <Features />
    <Footer />
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";
import Hero from "./Hero.vue";
import Suits from "./Suits.vue";
import Features from "./Features.vue";
import Footer from "./Footer.vue";

export default {
  name: 'HomeContent',
  components: {
    Navigation,
    Hero,
    Suits,
    Features,
    Footer,
  },
};
</script>

<style scoped>
/* Ana sayfa için özel stiller buraya eklenebilir */
</style>