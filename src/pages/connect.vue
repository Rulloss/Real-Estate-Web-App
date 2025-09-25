<template>
  <Navigation />
  <div class="connect-page">
    <div class="container">
      <h1 class="page-title">Contact Us</h1>
      <p class="page-description">
        Get in touch with us for reservations, inquiries, or any assistance you
        may need.
      </p>

      <div class="contact-content">
        <div class="contact-info">
          <h2>Contact Information</h2>
          <div class="info-item">
            <h3>Address</h3>
            <p>123 Hotel Street, City Center<br />Istanbul, Turkey 34000</p>
          </div>
          <div class="info-item">
            <h3>Phone</h3>
            <p>+90 212 123 4567</p>
          </div>
          <div class="info-item">
            <h3>Email</h3>
            <p>info@hotelwebsite.com</p>
          </div>
        </div>

        <div class="contact-form">
          <h2>Send us a Message</h2>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" v-model="form.name" required />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" v-model="form.email" required />
            </div>
            <div class="form-group">
              <label for="subject">Subject</label>
              <input type="text" id="subject" v-model="form.subject" required />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="5"
                required
              ></textarea>
            </div>
            <Button variant="orange" text="Send Message" @click="handleClick" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue";
import Button from "../components/Button.vue";

export default {
  name: "ConnectPage",
  components: {
    Navigation,
    Button,
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Handle form submission
      console.log("Form submitted:", this.form);
      alert("Thank you for your message! We will get back to you soon.");
      // Reset form
      this.form = {
        name: "",
        email: "",
        subject: "",
        message: "",
      };
    },
  },
};
</script>

<style scoped>
.connect-page {
  min-height: 100vh;
  padding: 80px 0;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

.page-title {
  font-family: var(--title-font);
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: var(--title-color);
  text-align: center;
  margin-bottom: 24px;
  font-weight: 600;
}

.page-description {
  font-family: var(--text-font);
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  color: var(--text-color);
  text-align: center;
  line-height: 1.7;
  max-width: 700px;
  margin: 0 auto 60px;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

.contact-info h2,
.contact-form h2 {
  font-family: var(--title-font);
  font-size: 1.8rem;
  color: var(--title-color);
  margin-bottom: 30px;
  font-weight: 600;
  background: none;
}

form {
  background: none;
}

.info-item {
  width: 30rem;
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
  margin: 24px 0px;
}

.info-item:hover {
  transform: translateY(-1px);
  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.04),
    inset 0 -1px 4px rgba(0, 0, 0, 0.03), 0 5px 20px rgba(0, 0, 0, 0.1);
}

.info-item h3 {
  font-family: var(--title-font);
  font-size: 1.2rem;
  color: var(--title-color);
  margin-bottom: 8px;
  font-weight: 600;
  background: none;
}

.info-item p {
  font-family: var(--text-font);
  color: var(--text-color);
  line-height: 1.6;
  background: none;
  margin: 0;
}

.contact-form {
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  background: white;
  border-radius: 16px;
  align-items: center;
  box-shadow: inset 0 3px 6px rgba(139, 79, 0, 0.09),
    inset 0 -2px 19px rgba(0, 0, 0, 0.09), 0 3px 15px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  border: 1px solid rgba(var(--secondary-color-rgb, 139, 69, 19), 0.08);
  position: relative;
  margin: 24px 0px;
}

.form-group {
  margin-bottom: 24px;
  background: none;
}

.form-group label {
  display: block;
  font-family: var(--text-font);
  font-weight: 600;
  color: var(--title-color);
  margin-bottom: 8px;
  background: none;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid var(--title-color);
  border-radius: 8px;
  font-family: var(--text-font);
  font-size: 1rem;
  transition: border-color 0.3s ease;
  box-sizing: border-box;
  background: none;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--secondary-color);
}

Button {
  width: 100%;
  background: none;
}
</style>
