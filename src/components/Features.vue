<template>
  <div class="features-section">
    <!-- Header -->
    <div class="content scrollShow">
      <h1 class="title">Experiences & Amenities</h1>
      <p class="description">
        Premium services and unforgettable experiences that will make your stay
        special
      </p>
    </div>

    <!-- Main Features Grid -->
    <div class="features-grid scrollShow">
      <div
        class="feature-card"
        v-for="feature in mainFeatures"
        :key="feature.id"
      >
        <div class="feature-icon">
          <img :src="feature.icon" :alt="feature.title + ' icon'" />
        </div>
        <h3 class="feature-title">{{ feature.title }}</h3>
        <p class="feature-description">{{ feature.description }}</p>
      </div>
    </div>

    <!-- Additional Services -->
    <div class="additional-services scrollShow">
      <div
        class="service-item"
        v-for="service in additionalServices"
        :key="service.id"
      >
        <div class="service-icon">
          <img :src="service.icon" :alt="service.title + ' icon'" />
        </div>
        <div class="service-content">
          <h4 class="service-title">{{ service.title }}</h4>
          <p class="service-description">{{ service.description }}</p>
        </div>
      </div>
    </div>

    <!-- Special Offers Section -->
    <div class="special-offers scrollShow">
      <div class="offers-container">
        <div class="offers-icon">
          <img src="../assets/icons/gift.png" alt="special-offer">
        </div>
        <h2 class="offers-title">Special Offers</h2>
        <p class="offers-subtitle">Early reservation discount up to 20% off</p>
        
        <!-- Countdown Timer -->
        <div class="countdown-timer">
          <div class="timer-label">Limited Time Offer Ends In:</div>
          <div class="timer-display">
            <div class="time-unit">
              <span class="time-number">{{ countdown.days }}</span>
              <span class="time-label">Days</span>
            </div>
            <div class="time-separator">:</div>
            <div class="time-unit">
              <span class="time-number">{{ countdown.hours }}</span>
              <span class="time-label">Hours</span>
            </div>
            <div class="time-separator">:</div>
            <div class="time-unit">
              <span class="time-number">{{ countdown.minutes }}</span>
              <span class="time-label">Minutes</span>
            </div>
            <div class="time-separator">:</div>
            <div class="time-unit">
              <span class="time-number">{{ countdown.seconds }}</span>
              <span class="time-label">Seconds</span>
            </div>
          </div>
        </div>
        
        <div class="offers-buttons">
          <Button text="Stay 3 nights, pay 1 free" variant="orange"></Button>
          <Button text="30% discount on spa packages" variant="outline2"></Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button.vue";

export default {
  name: "Features",
  components: {
    Button,
  },
  data() {
    return {
      countdown: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      },
      timer: null,
      mainFeatures: [
        {
          id: 1,
          title: "Rooftop Restaurant",
          description:
            "Modern interpretations of Ottoman cuisine in our multi-story restaurant with Bosphorus view",
          icon: "/icons/lunch.png",
        },
        {
          id: 2,
          title: "Spa & Thermal",
          description:
            "Deep relaxation with traditional Turkish bath and modern spa services",
          icon: "/icons/water-waves.png",
        },
        {
          id: 3,
          title: "Meeting Rooms",
          description:
            "Modern equipped halls for business meetings and special events",
          icon: "/icons/round-table.png",
        },
        {
          id: 4,
          title: "Valet Service",
          description:
            "24/7 valet parking service and airport transfer organization",
          icon: "/icons/car.png",
        },
        {
          id: 5,
          title: "Fitness Center",
          description: "Private fitness area equipped with modern equipment",
          icon: "/icons/gym.png",
        },
        {
          id: 6,
          title: "Concierge",
          description:
            "24/7 concierge service with city guidance and reservation support",
          icon: "/icons/headphones.png",
        },
      ],
      additionalServices: [
        {
          id: 1,
          title: "Free WiFi",
          description: "Throughout the hotel",
          icon: "/icons/wi-fi.png",
        },
        {
          id: 2,
          title: "Security",
          description: "24/7 security",
          icon: "/icons/security.png",
        },
        {
          id: 3,
          title: "Reception",
          description: "24 hours open",
          icon: "/icons/clock.png",
        },
        {
          id: 4,
          title: "Airport",
          description: "45 minutes away",
          icon: "/icons/plane.png",
        },
      ],
    };
  },
  mounted() {
    this.startCountdown();
  },
  beforeUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
  methods: {
    startCountdown() {
      // Set target date to 7 days from now
      const targetDate = new Date();
      targetDate.setDate(targetDate.getDate() + 7);
      
      this.updateCountdown(targetDate);
      
      this.timer = setInterval(() => {
        this.updateCountdown(targetDate);
      }, 1000);
    },
    updateCountdown(targetDate) {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      
      if (distance > 0) {
        this.countdown.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.countdown.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.countdown.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.countdown.seconds = Math.floor((distance % (1000 * 60)) / 1000);
      } else {
        this.countdown = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        if (this.timer) {
          clearInterval(this.timer);
        }
      }
    },
    formatTime(time) {
      return time.toString().padStart(2, '0');
    }
  }
};

</script>

<style scoped>
/* Ana container */
.features-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  min-height: 100vh;
  max-width: 1400px;
  margin: 0 auto;
  background: none;
}

/* Header */
.content {
  background: none;
  text-align: center;
  max-width: 900px;
  margin: 0 auto 80px auto;
  padding: 0 20px;
}

.title {
  font-family: var(--title-font);
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: var(--title-color);
  margin-bottom: 24px;
  font-weight: 600;
  background: none;
  letter-spacing: -0.5px;
}

.description {
  font-family: var(--text-font);
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  color: var(--text-color);
  line-height: 1.7;
  background: none;
  margin: 0;
  max-width: 700px;
  margin: 0 auto;
}

/* Main Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 350px), 1fr));
  gap: 40px;
  max-width: 1400px;
  margin: 0 auto 100px auto;
  padding: 0 20px;
}
.feature-card {
  background-color: white;
  border-radius: 20px;
  padding: 40px 30px;
  text-align: center;
  box-shadow: inset 0 3px 6px rgba(139, 79, 0, 0.09),
    inset 0 -2px 19px rgba(0, 0, 0, 0.09), 0 4px 20px rgba(139, 79, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(var(--secondary-color), 0.1);
}

.feature-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--secondary-color), #d4a574);
  transform: scaleX(0);
  transition: transform 0.4s ease;
}

.feature-card:hover {
  transform: translateY(-2px);
  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.06),
    inset 0 -2px 8px rgba(0, 0, 0, 0.04), 0 8px 25px rgba(0, 0, 0, 0.12);
}

.feature-card:hover::before {
  transform: scaleX(1);
}

.feature-icon {
  background-color: #b9ffdc88;
  width: 80px;
  height: 80px;
  margin: 0 auto 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
}

.feature-icon img {
  width: 40px;
  height: 40px;
  background: none;
  object-fit: contain;
}

.feature-title {
  font-family: var(--title-font);
  font-size: clamp(1.3rem, 2.5vw, 1.5rem);
  color: var(--title-color);
  margin-bottom: 16px;
  font-weight: 600;
  line-height: 1.3;
  background: none;
}

.feature-description {
  font-family: var(--text-font);
  color: var(--text-color);
  line-height: 1.6;
  font-size: 1rem;
  margin: 0;
  background: none;
}

/* Additional Services */
.additional-services {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  gap: 20px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

.service-item {
  background: white;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 20px;
  box-shadow: inset 0 3px 6px rgba(139, 79, 0, 0.09),
    inset 0 -2px 19px rgba(0, 0, 0, 0.09), 0 3px 15px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  border: 1px solid rgba(var(--secondary-color-rgb, 139, 69, 19), 0.08);
  position: relative;
}

.service-item:hover {
  transform: translateY(-1px);
  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.04),
    inset 0 -1px 4px rgba(0, 0, 0, 0.03), 0 5px 20px rgba(0, 0, 0, 0.1);
}

.service-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: none;
  transition: all 0.3s ease;
}

.service-icon img {
  width: 24px;
  height: 24px;
  filter: brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%)
    hue-rotate(346deg) brightness(104%) contrast(97%);
  object-fit: contain;
  background: none;
  transition: filter 0.3s ease;
}

.service-content {
  flex: 1;
  background: none;
}

.service-title {
  font-family: var(--title-font);
  font-size: 1.1rem;
  color: var(--title-color);
  margin: 0 0 4px 0;
  font-weight: 600;
  background: none;
}

.service-description {
  font-family: var(--text-font);
  color: var(--text-color);
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.4;
  background: none;
}

/* Special Offers Section */
.special-offers {
  margin-top: 80px;
  padding: 40px 20px;
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  box-shadow: inset 0 8px 12px rgba(255, 255, 255, 0.220),
    inset 0 -2px 26px rgba(255, 255, 255, 0.10), 0 4px 20px rgba(65, 79, 82, 0.3);
  border-radius: 24px;
  max-width: 1400px;
  border: 1px solid rgba(var(--secondary-color), 0.1);
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
}

.special-offers::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
      circle at 20% 80%,
      rgba(212, 165, 116, 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 20%,
      rgba(212, 165, 116, 0.1) 0%,
      transparent 50%
    );
  pointer-events: none;
}

.offers-container {
  text-align: center;
  background: none;
  position: relative;
  z-index: 1;
}

.offers-icon {
  margin-bottom: 24px;
  background: none;
  display: flex;
  justify-content: center;
  background: none;
}

.offers-icon img{
  background: none;
  width: 52px;
}

.offers-title {
  background: none;
  font-family: var(--title-font);
  font-size: clamp(2rem, 4vw, 2.5rem);
  color: white;
  margin-bottom: 16px;
  font-weight: 600;
  letter-spacing: -0.5px;
}

.offers-subtitle {
  font-family: var(--text-font);
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 40px;
  line-height: 1.6;
  background: none;
}

.offers-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  background: none;
}

/* Countdown Timer Styles */
.countdown-timer {
  margin: 30px 0;
  background: none;
}

.timer-label {
  font-family: var(--text-font);
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 20px;
  background: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
}

.timer-display {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  background: none;
  flex-wrap: wrap;
}

.time-unit {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 15px 12px;
  min-width: 70px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.time-number {
  font-family: var(--title-font);
  font-size: 2rem;
  font-weight: 700;
  color: #D4A574;
  line-height: 1;
  background: none;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.time-label {
  font-family: var(--text-font);
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.9);
  margin-top: 5px;
  background: none;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 500;
}

.time-separator {
  font-family: var(--title-font);
  font-size: 1.5rem;
  color: #D4A574;
  font-weight: 700;
  background: none;
  animation: blink 2s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0.3; }
}

/* Responsive Design */
@media (max-width: 1200px) {
  .features-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .features-section {
    padding: 60px 0;
  }

  .content {
    margin-bottom: 60px;
    padding: 0 15px;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-bottom: 60px;
    padding: 0 15px;
  }

  .feature-card {
    padding: 30px 24px;
  }

  .feature-icon {
    width: 70px;
    height: 70px;
    margin-bottom: 20px;
  }

  .feature-icon img {
    width: 36px;
    height: 36px;
  }

  .additional-services {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 0 15px;
  }

  .service-item {
    padding: 20px;
    gap: 16px;
  }

  .service-icon {
    width: 45px;
    height: 45px;
  }

  .service-icon img {
    width: 20px;
    height: 20px;
  }

  .special-offers {
    margin-top: 60px;
    padding: 40px 15px;
    border-radius: 16px;
  }

  .offers-buttons {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  .offer-btn {
    width: 100%;
    max-width: 300px;
    padding: 14px 24px;
    font-size: 0.95rem;
  }

  .countdown-timer {
    margin: 25px 0;
  }

  .timer-display {
    gap: 8px;
  }

  .time-unit {
    min-width: 60px;
    padding: 12px 8px;
  }

  .time-number {
    font-size: 1.5rem;
  }

  .time-label {
    font-size: 0.7rem;
  }

  .time-separator {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .features-section {
    padding: 40px 0;
  }

  .content {
    padding: 0 10px;
    margin-bottom: 40px;
  }

  .features-grid {
    padding: 0 10px;
    margin-bottom: 40px;
  }

  .feature-card {
    padding: 24px 20px;
  }

  .additional-services {
    padding: 0 10px;
  }

  .service-item {
    padding: 16px;
    gap: 12px;
  }
}

/* Animation */
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

.feature-card {
  animation: fadeInUp 0.6s ease-out;
}

.feature-card:nth-child(2) {
  animation-delay: 0.1s;
}

.feature-card:nth-child(3) {
  animation-delay: 0.2s;
}

.feature-card:nth-child(4) {
  animation-delay: 0.3s;
}

.feature-card:nth-child(5) {
  animation-delay: 0.4s;
}

.feature-card:nth-child(6) {
  animation-delay: 0.5s;
}

.service-item {
  animation: fadeInUp 0.6s ease-out;
}

.service-item:nth-child(2) {
  animation-delay: 0.6s;
}

.service-item:nth-child(3) {
  animation-delay: 0.7s;
}

.service-item:nth-child(4) {
  animation-delay: 0.8s;
}
</style>
