<template>
  <Navigation />
  <div class="gallery-page autoShow">
    <div class="container">
      <h1 class="page-title">Gallery</h1>
      <p class="page-description">
        Explore our beautiful hotel spaces, luxurious rooms, and stunning
        amenities through our photo gallery.
      </p>

      <div class="gallery-grid">
        <div
          class="gallery-item"
          v-for="(image, index) in galleryImages"
          :key="index"
        >
          <img :src="image.src" :alt="image.alt" @click="openLightbox(index)" />
          <div class="image-overlay">
            <h3>{{ image.title }}</h3>
          </div>
        </div>
      </div>

      <!-- Lightbox Modal -->
      <div v-if="lightboxOpen" class="lightbox" @click="closeLightbox">
        <div class="lightbox-content" @click.stop>
          <button class="close-btn" @click="closeLightbox">&times;</button>
          <img
            :src="galleryImages[currentImageIndex].src"
            :alt="galleryImages[currentImageIndex].alt"
          />
          <div class="lightbox-nav">
            <button @click="prevImage" class="nav-btn prev">&larr;</button>
            <button @click="nextImage" class="nav-btn next">&rarr;</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Navigation from "../components/Navigation.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "GalleryPage",
  components: {
    Navigation,
    Footer,
  },
  data() {
    return {
      lightboxOpen: false,
      currentImageIndex: 0,
      galleryImages: [
        {
          src: "/src/assets/Gallery/1.jpg",
          alt: "Luxury Suite",
          title: "Luxury Suite",
        },
        {
          src: "/src/assets/Gallery/3.jpg",
          alt: "Luxury Suite",
          title: "Luxury Suite",
        },
        {
          src: "/src/assets/Gallery/4.jpg",
          alt: "Luxury Suite",
          title: "Luxury Suite",
        },
        {
          src: "/src/assets/Gallery/5.jpg",
          alt: "Luxury Suite",
          title: "Luxury Suite",
        },
        {
          src: "/src/assets/Gallery/6.jpg",
          alt: "Luxury Suite",
          title: "Luxury Suite",
        },
        {
          src: "/src/assets/Gallery/7.jpg",
          alt: "Luxury Suite",
          title: "Luxury Suite",
        },
        {
          src: "/src/assets/Gallery/8.jpg",
          alt: "Luxury Suite",
          title: "Luxury Suite",
        },
      ],
    };
  },
  methods: {
    openLightbox(index) {
      this.currentImageIndex = index;
      this.lightboxOpen = true;
      document.body.style.overflow = "hidden";
    },
    closeLightbox() {
      this.lightboxOpen = false;
      document.body.style.overflow = "auto";
    },
    nextImage() {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.galleryImages.length;
    },
    prevImage() {
      this.currentImageIndex =
        this.currentImageIndex === 0
          ? this.galleryImages.length - 1
          : this.currentImageIndex - 1;
    },
  },
  beforeUnmount() {
    document.body.style.overflow = "auto";
  },
};
</script>

<style scoped>
.gallery-page {
  min-height: 100vh;
  padding: 80px 0;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  background: none;
}

.page-title {
  font-family: var(--title-font);
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: var(--title-color);
  text-align: center;
  margin-bottom: 24px;
  font-weight: 600;
  background: none;
}

.page-description {
  font-family: var(--text-font);
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  color: var(--text-color);
  text-align: center;
  line-height: 1.7;
  max-width: 700px;
  background: none;
  margin: 0 auto 60px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 30px;
}

.gallery-item {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.gallery-item:hover {
  transform: translateY(-5px);
}

.gallery-item img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease;
  display: block;
  vertical-align: top;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(145, 82, 0, 0.7));
  color: white;
  padding: 20px;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.gallery-item:hover .image-overlay {
  transform: translateY(0);
}

.image-overlay h3 {
  margin: 0;
  color: var(--primary-color);
  font-family: var(--title-font);
  font-size: 1.4rem;
  font-weight: 600;
  background: none;
}

/* Lightbox Styles */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.lightbox-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  background: none;
}

.lightbox-content img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.close-btn {
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 5px 10px;
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  pointer-events: none;
  background: none;
}

.nav-btn {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  font-size: 2rem;
  width: 50px;
  height: 50px;
  cursor: pointer;
  border-radius: 50%;
  pointer-events: auto;
  transition: background 0.3s ease;
  padding-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-btn:hover {
  background: rgba(255, 255, 255, 0.4);
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .gallery-item img {
    height: 200px;
    display: block;
    vertical-align: top;
  }
}
</style>
