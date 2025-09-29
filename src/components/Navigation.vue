<template>
  <nav class="navigation">
    <div class="nav-container">
      <div class="nav-content">
        <div class="logo-section">
          <router-link to="/" @click="scrollToTop" class="logo-link">
            <img src="/src/assets/logo.svg" alt="Hotel Logo" class="logo-image" />
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="desktop-nav">
          <div class="nav-links">
            <router-link
              v-for="item in navItems"
              :key="item.href"
              :to="item.href"
              class="nav-link"
              :class="{ active: $route.path === item.href }"
              @click="scrollToTop"
            >
              {{ item.label }}
            </router-link>
          </div>
        </div>

        <!-- Mobile Navigation -->
        <div class="mobile-nav">
          <button class="mobile-menu-button" @click="toggleMobileMenu">
            <svg
              class="menu-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <!-- Mobile Menu Overlay -->
          <div v-if="isOpen" class="mobile-overlay" @click="closeMobileMenu">
            <div class="mobile-menu" @click.stop>
              <div class="mobile-header">
                <h3 class="mobile-title">Navigation</h3>
                <button class="close-button" @click="closeMobileMenu">
                  <svg
                    class="close-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div class="mobile-links">
                <router-link
                  v-for="item in navItems"
                  :key="item.href"
                  :to="item.href"
                  class="mobile-link"
                  :class="{ active: $route.path === item.href }"
                  @click="handleMobileLinkClick"
                >
                  {{ item.label }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";


const isOpen = ref(false);

const navItems = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms" },
  { href: "/reservation", label: "Reservation" },
  { href: "/connect", label: "Contact" },
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const toggleMobileMenu = () => {
  isOpen.value = !isOpen.value;
};

const closeMobileMenu = () => {
  isOpen.value = false;
};

const handleMobileLinkClick = () => {
  closeMobileMenu();
  scrollToTop();
};
</script>

<style scoped>
.navigation {
  width: 100%;
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(229, 231, 235, 0.5);
  position: sticky;
  top: 0;
  z-index: 50;
}

.nav-container {
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .nav-container {
    padding: 0 1.5rem;
  }
}

@media (min-width: 1024px) {
  .nav-container {
    padding: 0 2rem;
  }
}

.nav-content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 5rem;
}

.logo-section {
  flex-shrink: 0;
}

.logo-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.logo-link:hover {
  transform: scale(1.05);
}

.logo-image {
  height: 2.5rem;
  width: auto;
  object-fit: contain;
}

.logo-title {
  font-size: 1.5rem;
  font-family: serif;
  font-weight: bold;
  color: var(--title-color);
  transition: all 0.3s ease;
  text-decoration: none;
  margin: 0;
}

.logo-link:hover .logo-title {
  color: #d97706;
}

.desktop-nav {
  display: none;
}

@media (min-width: 768px) {
  .desktop-nav {
    display: block;
  }
}

.nav-links {
  margin-left: 2.5rem;
  display: flex;
  align-items: baseline;
  gap: 2rem;
}

.nav-link {
  transition: all 0.3s ease;
  font-weight: 400;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  text-decoration: none;
  color: var(--title-color);
}

.nav-link:hover {
  color: #d97706;
}

.nav-link.active {
  color: var(--title-color);
  text-decoration:underline 1.5px solid;
  transform: scale(1.05);
}

.mobile-nav {
  display: block;
}

@media (min-width: 768px) {
  .mobile-nav {
    display: none;
  }
}

.mobile-menu-button {
  background: none;
  border: none;
  color: var(--title-color);
  cursor: pointer;
  padding: 0.5rem;
}

.menu-icon {
  height: 1.5rem;
  width: 1.5rem;
}

.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
}

.mobile-menu {
  width: 300px;
  height: 100%;
  padding: 1.5rem;
}

@media (min-width: 640px) {
  .mobile-menu {
    width: 400px;
  }
}

.mobile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.mobile-title {
  color: var(--title-color);
  font-size: 1.25rem;
  font-weight: 400;
  margin: 0;
}

.close-button {
  background: none;
  border: none;
  color: var(--text-color);
  cursor: pointer;
  padding: 0.25rem;
}

.close-icon {
  height: 1.5rem;
  width: 1.5rem;
  color: var(--text-color);
}

.mobile-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mobile-link {
  display: block;
  padding: 0.75rem;
  font-weight: 400;
  transition: color 0.2s ease;
  text-decoration: none;
  color: var(--text-color);
  border-radius: 0.5rem;
}

.mobile-link:hover {
  color: #d97706;
}

</style>
