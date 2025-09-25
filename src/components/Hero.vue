<template>
  <div class="main-content">
    <div class="content autoShow">
      <div class="tags autoShow">
        <span class="tag">⭐ 4.8/5 Google Maps</span>
        <span class="tag">🎖 Booking.com Award</span>
      </div>
      <h1 class="title">
        <span
          style="
            color: var(--secondary-color-light);
            background-color: transparent;
          "
          >Welcome</span
        >
        to Our Hotel
      </h1>
      <p class="description">
        Book your stay and experience the best of our hotel. We offer a range of
        rooms and suites to suit your needs.
      </p>
      <span class="location tag">📍 123 Main St, Anytown, USA</span>
      <Button variant="orange" text="Book Now" @click="handleClick" />
    </div>
  </div>
</template>
<script>
import Button from "../components/Button.vue";

export default {
  name: "Hero",
  components: {
    Button,
  },
  methods: {
    handleClick() {
      console.log("Button clicked!");
    },
  },
};
</script>
<style scoped>
.main-content {
  width: 100%;
  height: 600px;
  background-image: url("../assets/oda3.jpg");
  background-color: rgba(0, 0, 0, 0.6);
  background-blend-mode: overlay;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0 auto;
  padding: 0rem 2rem;
  display: flex;
  justify-content: left;
  align-items: center;
}
.content {
  width: 40%;
  background-color: transparent;
  height: auto;
  display: flex;
  gap: 15px;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
}
.tags {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  background-color: transparent;
}
.tag {
  font-size: 0.9rem;
  color: var(--primary-color);
  padding: 0.4rem 0.8rem;
  border-radius: 80px;
  background-color: rgba(240, 240, 240, 0.15);
  background-blend-mode: overlay;
  backdrop-filter: blur(30px);
  border: 1px solid var(--text-color);
  line-height: 1.6;
}
.title {
  background-color: transparent;
  background: none;
  font-family: var(--title-font);
  color: var(--primary-color);
  letter-spacing: -1.2px;
  font-size: 4rem;
  font-weight: 400;
  margin-bottom: 1rem;
  line-height: 1.1;
}
.description {
  background-color: transparent;
  background: none;
  font-family: var(--text-font);
  color: var(--primary-color);
  letter-spacing: -1.2px;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  line-height: 1.3;
}
.location {
  background-color: transparent;
  background: none;
  font-family: var(--text-font);
  color: var(--primary-color);
  letter-spacing: -1.1px;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  line-height: 1.6;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .main-content {
    height: 500px;
    padding: 0 1.5rem;
  }
  
  .content {
    width: 50%;
  }
  
  .title {
    font-size: 3.5rem;
  }
  
  .description {
    font-size: 1.1rem;
  }
}

@media (max-width: 768px) {
  .main-content {
    height: 500px;
    padding: 0 1rem;
    justify-content: center;
  }
  
  .content {
    width: 70%;
    text-align: center;
    align-items: center;
  }
  
  .title {
    font-size: 3rem;
    text-align: center;
  }
  
  .description {
    font-size: 1rem;
    text-align: center;
  }
  
  .tags {
    justify-content: center;
  }
  
  .tag {
    font-size: 0.8rem;
    padding: 0.3rem 0.6rem;
  }
  
  .location {
    font-size: 1rem;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .main-content {
    height: 430px;
    padding: 0 0.5rem;
  }
  
  .content {
    width: 90%;
    gap: 12px;
  }
  
  .title {
    font-size: 2.5rem;
    line-height: 1.2;
  }
  
  .description {
    font-size: 0.9rem;
    line-height: 1.4;
  }
  
  .tags {
    gap: 8px;
  }
  
  .tag {
    font-size: 0.7rem;
    padding: 0.25rem 0.5rem;
  }
  
  .location {
    font-size: 0.9rem;
  }
}

@media (max-width: 320px) {
  .main-content {
    height: 350px;
  }
  
  .content {
    width: 95%;
    gap: 10px;
  }
  
  .title {
    font-size: 2rem;
  }
  
  .description {
    font-size: 0.8rem;
  }
  
  .tag {
    font-size: 0.6rem;
    padding: 0.2rem 0.4rem;
  }
  
  .location {
    font-size: 0.8rem;
  }
}
</style>
