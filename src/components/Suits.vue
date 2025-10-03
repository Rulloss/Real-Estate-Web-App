<template>
  <!-- Texts -->
  <div class="content scrollShow">
    <h1 class="title">Rooms & Suites</h1>
    <p class="description">
      Our special space designs where every detail is carefully considered and
      comfort meets luxury
    </p>
  </div>

  <!-- CARDS -->
  <div class="cards scrollShow">
    <div class="card scrollShow" v-for="room in rooms" :key="room.id">
      <div class="card-image-container">
        <img :src="room.image" :alt="room.title" />
        <div class="room-size">{{ room.size }}</div>
        <div v-if="room.badge" class="room-badge">{{ room.badge }}</div>
      </div>
      <div class="card-content">
        <h2 class="card-title">{{ room.title }}</h2>
        <p class="card-description">{{ room.description }}</p>

        <div class="room-features">
          <span
            v-for="feature in room.features"
            :key="feature"
            class="feature-tag"
          >
            {{ feature }}
          </span>
        </div>

        <div class="room-amenities">
          <div class="amenity" v-for="amenity in room.amenities" :key="amenity">
            <img :src="getAmenityIcon(amenity)" alt="Amenity Icon" />
          </div>
        </div>

        <div class="room-pricing">
          <div class="price">
            <span class="current-price"
              >₺{{ room.currentPrice.toLocaleString() }}</span
            >
            <span v-if="room.originalPrice" class="original-price"
              >₺{{ room.originalPrice.toLocaleString() }}</span
            >
          </div>
          <div class="price-note">{{ room.priceNote }}</div>
          <div v-if="room.discount" class="discount-note">
            {{ room.discount }}
          </div>
        </div>

        <Button variant="dark" text="Details & Reservation" @click="handleClick" />
      </div>
    </div>

  </div>

</template>

<script>
import { ref } from "vue";
import Button from "../components/Button.vue";
import wifiIcon from "../assets/icons/wi-fi.png";
import tvIcon from "../assets/icons/tv.png";
import minibarIcon from "../assets/icons/minibar.png";
import acIcon from "../assets/icons/air-conditioner.png";
import safeIcon from "../assets/icons/security.png";
import phoneIcon from "../assets/icons/calling.png";

export default {
  name: "Suits",
  components: {
    Button,
  },
  setup() {
    const rooms = ref([
      {
        id: 1,
        title: "Deluxe City View",
        description: "Elegant room with panoramic city views",
        image: "/oda3.jpg",
        size: "35 m²",
        badge: "4 guests",
        features: ["King bed", "City view", "Marble bathroom", "Mini bar"],
        amenities: ["wifi", "tv", "minibar", "ac"],
        currentPrice: 12850,
        originalPrice: 15200,
        priceNote: "per night, VAT included",
        discount: "● Free cancellation (up to 48 hours before)",
      },
      {
        id: 2,
        title: "Premium Suite",
        description: "Luxury suite with separate living area",
        image: "/oda3.jpg",
        size: "55 m²",
        badge: "Most Popular",
        features: ["Separate bedroom", "Living area", "Jacuzzi", "Balcony"],
        amenities: ["wifi", "tv", "minibar", "ac", "safe"],
        currentPrice: 14200,
        originalPrice: 16800,
        priceNote: "per night, VAT included",
        discount: "● Free cancellation (up to 48 hours before)",
      },
      {
        id: 3,
        title: "Presidential Suite",
        description: "Premium accommodation experience with special service",
        image: "/oda3.jpg",
        size: "85 m²",
        badge: "Week's Favorite",
        features: ["2 bedrooms", "Butler service", "Private terrace"],
        amenities: ["wifi", "tv", "minibar", "ac", "safe", "phone"],
        currentPrice: 17500,
        originalPrice: 19500,
        priceNote: "per night, VAT included",
        discount: "● Free cancellation (up to 48 hours before)",
      },
    ]);

    const getAmenityIcon = (amenity) => {
      const icons = {
        wifi: wifiIcon,
        tv: tvIcon,
        minibar: minibarIcon,
        ac: acIcon,
        safe: safeIcon,
        phone: phoneIcon,
      };
      return icons[amenity] || "default-icon";
    };

    return {
      rooms,
      getAmenityIcon,
    };
  },
};
</script>

<style scoped>
/* Ana container */
.content {
  text-align: center;
  max-width: 900px;
  margin: 0 auto 80px auto;
  padding: 40px 20px 0;
  height: 100%;
}

.title {
  font-family: var(--title-font);
  font-size: clamp(2rem, 4vw, 3rem);
  color: var(--title-color);
  margin-bottom: 24px;
  font-weight: 600;
  letter-spacing: -0.5px;
}

.description {
  font-family: var(--text-font);
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: var(--text-color);
  line-height: 1.7;
  margin: 0;
  max-width: 600px;
  margin: 0 auto;
}

/* Cards grid */
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 380px), 1fr));
  gap: clamp(20px, 3vw, 40px);
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  justify-items: center;
}

/* Card styling */
.card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
  max-width: 420px;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

/* Image container */
.card-image-container {
  position: relative;
  height: 280px;
  overflow: hidden;
  background: #f8f9fa;
}

.card-image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover .card-image-container img {
  transform: scale(1.08);
}

/* Overlay badges */
.room-size {
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  z-index: 2;
}

.room-badge {
  position: absolute;
  top: 20px;
  right: 20px;
  background: linear-gradient(135deg, var(--secondary-color), #ff6b35);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: -0.3px;
  box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);
  z-index: 2;
}

/* Card content */
.card-content {
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
  justify-content: space-between;
}

.card-title {
  font-family: var(--title-font);
  font-size: clamp(1.3rem, 2.5vw, 1.5rem);
  color: var(--title-color);
  margin: 0;
  font-weight: 700;
  line-height: 1.3;
}

.card-description {
  font-family: var(--text-font);
  color: var(--text-color);
  margin: 0;
  line-height: 1.6;
  font-size: 0.95rem;
}

/* Features */
.room-features {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0;
}

.feature-tag {
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  color: var(--title-color);
  padding: 8px 14px;
  border-radius: 16px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid #dee2e6;
  transition: all 0.3s ease;
}

/* Amenities */
.room-amenities {
  display: flex;
  gap: 12px;
  margin: 0;
  padding: 20px 0;
  border-top: 2px solid #f1f3f4;
  border-bottom: 2px solid #f1f3f4;
  justify-content: center;
}

.amenity {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.amenity::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.amenity:hover::before {
  opacity: 1;
}

.amenity:hover {
  transform: translateY(-1px) scale(1.1);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.amenity img {
  background: transparent;
}

/* Pricing */
.room-pricing {
  margin: 0;
  text-align: left;
  margin-top: auto;
}

.price {
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 8px;
  flex-wrap: wrap;
}

.current-price {
  font-family: var(--title-font);
  font-size: clamp(1.4rem, 3vw, 1.8rem);
  font-weight: 800;
  color: var(--secondary-color);
  line-height: 1;
}

.original-price {
  font-size: 1.1rem;
  color: #6c757d;
  text-decoration: line-through;
  font-weight: 500;
}

.price-note {
  font-size: 0.9rem;
  color: var(--text-color);
  margin-bottom: 8px;
  font-weight: 500;
}

.discount-note {
  font-size: 0.85rem;
  color: var(--third-color);
  font-weight: 600;
  background: rgba(255, 107, 53, 0.1);
  padding: 8px 12px;
  border-radius: 8px;
  border-left: 3px solid var(--third-color);
}

/* Responsive Design */
@media (max-width: 1200px) {
  .cards {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .content {
    padding: 20px 15px 0;
    margin-bottom: 60px;
  }

  .cards {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 0 15px;
  }

  .card {
    max-width: 100%;
  }

  .card-image-container {
    height: 240px;
  }

  .room-size,
  .room-badge {
    top: 15px;
    padding: 6px 12px;
    font-size: 0.8rem;
  }

  .card-content {
    padding: 24px 20px;
    gap: 16px;
  }

  .room-amenities {
    gap: 8px;
    padding: 16px 0;
  }

  .amenity {
    width: 36px;
    height: 36px;
  }

  .price {
    flex-direction: column;
    gap: 4px;
    align-items: flex-start;
  }

  .reserve-btn {
    padding: 14px 20px;
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .content {
    padding: 15px 10px 0;
  }

  .cards {
    padding: 0 10px;
    gap: 20px;
  }

  .card-content {
    padding: 20px 16px;
  }

  .room-features {
    gap: 8px;
  }

  .feature-tag {
    padding: 6px 10px;
    font-size: 0.8rem;
  }

  .room-amenities {
    gap: 6px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .amenity {
    width: 32px;
    height: 32px;
  }
}

/* Animation for cards on load */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card {
  animation: fadeInUp 0.6s ease-out;
}

.card:nth-child(2) {
  animation-delay: 0.1s;
}

.card:nth-child(3) {
  animation-delay: 0.2s;
}
</style>
