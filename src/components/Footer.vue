<template>
  <footer class="footer scrollShow">
    <div class="footer-container">
      <!-- Main Footer Content -->
      <div class="footer-content">
        <!-- Logo and Description Section -->
        <div class="footer-section">
          <div class="footer-logo">
            <img :src="logoImage" alt="Logo" class="logo-image" />
          </div>
          <p class="footer-description">
            Your trusted guide on your healthy living journey. Achieve your
            goals with personalized nutrition plans.
          </p>
          <div class="social-links">
            <a href="#" class="social-link" aria-label="Facebook">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="var(--primary-color)"
              >
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="Instagram">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="var(--primary-color)"
              >
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="Twitter">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="var(--primary-color)"
              >
                <path
                  d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                />
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="LinkedIn">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="var(--primary-color)"
              >
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="footer-section">
          <h3 class="footer-title">Quick Links</h3>
          <ul class="footer-links">
            <li>
              <router-link
                to="/"
                class="footer-link"
                @click.native="scrollToTop"
                >Home</router-link
              >
            </li>
            <li>
              <router-link
                to="/about"
                class="footer-link"
                @click.native="scrollToTop"
                >Suits</router-link
              >
            </li>
            <li>
              <router-link
                to="/services"
                class="footer-link"
                @click.native="scrollToTop"
                >Gallery</router-link
              >
            </li>
            <li>
              <router-link
                to="/faq"
                class="footer-link"
                @click.native="scrollToTop"
                >Reservation</router-link
              >
            </li>
            <li>
              <router-link
                to="/contact"
                class="footer-link"
                @click.native="scrollToTop"
                >Contact</router-link
              >
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div class="footer-section">
          <h3 class="footer-title">Our Services</h3>
          <ul class="footer-links">
            <li><a href="#" class="footer-link">Personal Nutrition Plan</a></li>
            <li><a href="#" class="footer-link">Online Consultation</a></li>
            <li><a href="#" class="footer-link">Group Training</a></li>
            <li><a href="#" class="footer-link">Sports Nutrition</a></li>
            <li><a href="#" class="footer-link">Child Nutrition</a></li>
          </ul>
        </div>

        <!-- Contact Information -->
        <div class="footer-section">
          <h3 class="footer-title">Contact</h3>
          <div class="contact-info">
            <div class="contact-item">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="var(--secondary-color)"
              >
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                />
              </svg>
              <span>New York, USA</span>
            </div>
            <div class="contact-item">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="var(--secondary-color)"
              >
                <path
                  d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                />
              </svg>
              <span>+1 (555) 123 45 67</span>
            </div>
            <div class="contact-item">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="var(--secondary-color)"
              >
                <path
                  d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                />
              </svg>
              <span>info@nutritionist.com</span>
            </div>
            <div class="contact-item">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="var(--secondary-color)"
              >
                <path
                  d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"
                />
              </svg>
              <span>Monday - Friday: 09:00 - 18:00</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Line and Copyright -->
      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <p class="copyright">© 2025 Nutritionist. All rights reserved.</p>
          <div class="footer-bottom-links">
            <a href="#" class="footer-bottom-link">Privacy Policy</a>
            <a href="#" class="footer-bottom-link">Terms of Service</a>
            <a href="#" class="footer-bottom-link">Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import LogoImage from "../assets/Logo.svg";

export default {
  name: "Footer",
  data() {
    return {
      logoImage: LogoImage,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, var(--title-color) 0%, #1a2332 100%);
  color: #ffffff;
  padding: 60px 0 0;
  margin-top: 60px;
  width: 100%;
  overflow-x: hidden;
  border-radius: 10px;
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 30px;
  width: 100%;
  box-sizing: border-box;
  background: none;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  background: none;
  gap: 40px;
  margin-bottom: 40px;
  width: 100%;
}

.footer-section {
  background: none;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
}

.footer-logo {
  background: none;
  margin-bottom: 20px;
}

.logo-image {
  height: 40px;
  background: none;
  width: auto;
  filter: brightness(0) invert(1);
  max-width: 100%;
}

.footer-description {
  background: none;
  color: #cbd5e1;
  line-height: 1.6;
  margin-bottom: 24px;
  font-size: 14px;
  word-break: break-word;
}

.social-links {
  display: flex;
  background: none;
  gap: 12px;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  background: none;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.social-link svg {
  background: none;
  width: 20px;
  height: 20px;
}

.social-link:hover {
  background: var(--secondary-color);
  transform: translateY(-2px);
}

.footer-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  background: none;
  color: #ffffff;
  word-break: break-word;
}

.footer-links {
  list-style: none;
  background: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  background: none;
  margin-bottom: 12px;
}

.footer-link {
  color: #cbd5e1;
  background: none;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
  word-break: break-word;
}

.footer-link:hover {
  color: var(--secondary-color);
}

.contact-info {
  display: flex;
  flex-direction: column;
  background: none;
  gap: 16px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #cbd5e1;
  font-size: 14px;
  background: none;
  flex-wrap: wrap;
  word-break: break-word;
}
.contact-item span {
  background: none;
  color: #cbd5e1;
}

.contact-item svg {
  color: var(--secondary-color);
  background: none;
  flex-shrink: 0;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background: none;
  padding: 24px 0;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: none;
  gap: 16px;
}

.copyright {
  color: #94a3b8;
  font-size: 14px;
  margin: 0;
  word-break: break-word;
  background: none;
}

.footer-bottom-links {
  display: flex;
  gap: 24px;
  background: none;
  flex-wrap: wrap;
}

.footer-bottom-link {
  color: #94a3b8;
  text-decoration: none;
  font-size: 14px;
  background: none;
  transition: color 0.3s ease;
  word-break: break-word;
}

.footer-bottom-link:hover {
  color: var(--secondary-color);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 40px 0 0;
    margin-top: 60px;
  }

  .footer-container {
    padding: 0 20px;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 32px;
    text-align: center;
  }

  .footer-section {
    align-items: center;
  }

  .footer-description {
    text-align: center;
    max-width: 400px;
  }

  .contact-info {
    align-items: center;
  }

  .contact-item {
    justify-content: center;
  }

  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
  }

  .footer-bottom-links {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .footer-container {
    padding: 0 16px;
  }

  .footer-content {
    gap: 24px;
  }

  .social-links {
    justify-content: center;
    gap: 8px;
  }

  .footer-bottom-links {
    flex-direction: column;
    gap: 12px;
  }

  .footer-title {
    font-size: 16px;
  }

  .footer-link,
  .footer-description {
    font-size: 13px;
  }

  .contact-item {
    font-size: 13px;
  }
}

@media (max-width: 320px) {
  .footer {
    padding: 30px 0 0;
    margin-top: 40px;
  }

  .footer-container {
    padding: 0 12px;
  }

  .footer-content {
    gap: 20px;
  }

  .footer-title {
    font-size: 15px;
  }

  .footer-link,
  .footer-description,
  .contact-item {
    font-size: 12px;
  }

  .social-link {
    width: 36px;
    height: 36px;
  }

  .footer-bottom-links {
    gap: 8px;
  }

  .footer-bottom-link,
  .copyright {
    font-size: 12px;
  }
}
</style>
