<template>
  <Navigation />
  <div class="reservation-page autoShow">
    <div class="container">
      <h1 class="page-title">House Reservation</h1>
      <p class="page-description">
        Choose your perfect home, set your dates and enjoy a comfortable accommodation experience.
      </p>
      
      <!-- Adım Göstergesi -->
      <div class="step-indicator">
        <div class="step" :class="{ active: currentStep === 1, completed: currentStep > 1 }">
          <span class="step-number">1</span>
          <span class="step-title">House Selection</span>
        </div>
        <div class="step" :class="{ active: currentStep === 2, completed: currentStep > 2 }">
          <span class="step-number">2</span>
          <span class="step-title">Date Selection</span>
        </div>
        <div class="step" :class="{ active: currentStep === 3 }">
          <span class="step-number">3</span>
          <span class="step-title">Reservation Summary</span>
        </div>
      </div>

      <!-- Step 1: House Selection -->
      <div v-if="currentStep === 1" class="step-content">
        <h2 class="section-title">Available Houses</h2>
        <div class="houses-grid">
          <div 
            v-for="house in houses" 
            :key="house.id" 
            class="house-card"
            :class="{ selected: selectedHouse?.id === house.id }"
            @click="selectHouse(house)"
          >
            <div class="house-image">
              <img :src="house.image" :alt="house.name">
              <div class="price-badge">₺{{ house.dailyPrice }}/night</div>
            </div>
            <div class="house-info">
              <h3 class="house-name">{{ house.name }}</h3>
              <p class="house-location">{{ house.location }}</p>
              <div class="house-features">
                <span class="feature">{{ house.bedrooms }} bedrooms</span>
                <span class="feature">{{ house.bathrooms }} bathrooms</span>
                <span class="feature">{{ house.maxGuests }} guests</span>
              </div>
              <div class="house-amenities">
                <span v-for="amenity in house.amenities" :key="amenity" class="amenity">{{ amenity }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="step-actions">
          <button 
            class="next-btn" 
            :disabled="!selectedHouse"
            @click="nextStep"
          >
            Continue
          </button>
        </div>
      </div>

      <!-- Step 2: Date Selection -->
      <div v-if="currentStep === 2" class="step-content">
        <h2 class="section-title">Select Date Range</h2>
        <div class="date-selection">
          <div class="selected-house-info">
            <img :src="selectedHouse.image" :alt="selectedHouse.name">
            <div class="house-details">
              <h3>{{ selectedHouse.name }}</h3>
              <p>{{ selectedHouse.location }}</p>
              <span class="daily-price">₺{{ selectedHouse.dailyPrice }}/night</span>
            </div>
          </div>
          
          <div class="date-form">
            <div class="form-row">
              <div class="form-group">
                <label for="checkin">Check-in Date</label>
                <input type="date" id="checkin" v-model="reservation.checkin" :min="today" required>
              </div>
              <div class="form-group">
                <label for="checkout">Check-out Date</label>
                <input type="date" id="checkout" v-model="reservation.checkout" :min="reservation.checkin" required>
              </div>
            </div>
            
            <div class="form-group">
              <label for="guests">Number of Guests</label>
              <select id="guests" v-model="reservation.guests" required>
                <option v-for="n in selectedHouse.maxGuests" :key="n" :value="n">{{ n }} Guests</option>
              </select>
            </div>
          </div>
        </div>
        
        <div class="price-calculation" v-if="calculateNights() > 0">
          <div class="calculation-row">
            <span>₺{{ selectedHouse.dailyPrice }} x {{ calculateNights() }} nights</span>
            <span>₺{{ calculateSubtotal() }}</span>
          </div>
          <div class="calculation-row">
            <span>Cleaning fee</span>
            <span>₺{{ cleaningFee }}</span>
          </div>
          <div class="calculation-row total">
            <span>Total</span>
            <span>₺{{ calculateTotal() }}</span>
          </div>
        </div>
        
        <div class="step-actions">
          <button class="back-btn" @click="prevStep">Back</button>
          <button 
            class="next-btn" 
            :disabled="!reservation.checkin || !reservation.checkout || calculateNights() <= 0"
            @click="nextStep"
          >
            Continue
          </button>
        </div>
      </div>

      <!-- Step 3: Reservation Summary -->
      <div v-if="currentStep === 3" class="step-content">
        <h2 class="section-title">Reservation Summary</h2>
        <div class="reservation-summary-final">
          <div class="summary-house">
            <img :src="selectedHouse.image" :alt="selectedHouse.name">
            <div class="house-details">
              <h3>{{ selectedHouse.name }}</h3>
              <p>{{ selectedHouse.location }}</p>
            </div>
          </div>
          
          <div class="summary-details">
            <div class="detail-row">
              <span class="label">Check-in Date:</span>
              <span class="value">{{ formatDate(reservation.checkin) }}</span>
            </div>
            <div class="detail-row">
              <span class="label">Check-out Date:</span>
              <span class="value">{{ formatDate(reservation.checkout) }}</span>
            </div>
            <div class="detail-row">
              <span class="label">Number of Guests:</span>
              <span class="value">{{ reservation.guests }} Guests</span>
            </div>
            <div class="detail-row">
              <span class="label">Number of Nights:</span>
              <span class="value">{{ calculateNights() }} Nights</span>
            </div>
          </div>
          
          <div class="final-price">
            <div class="price-breakdown">
              <div class="price-row">
                <span>Accommodation ({{ calculateNights() }} nights)</span>
                <span>₺{{ calculateSubtotal() }}</span>
              </div>
              <div class="price-row">
                <span>Cleaning fee</span>
                <span>₺{{ cleaningFee }}</span>
              </div>
              <div class="price-row total">
                <span>Total Amount</span>
                <span>₺{{ calculateTotal() }}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="step-actions">
          <button class="back-btn" @click="prevStep">Back</button>
          <button class="payment-btn" @click="proceedToPayment">Proceed to Payment</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue';

export default {
  name: 'ReservationPage',
  components: {
    Navigation,
  },
  data() {
    return {
      currentStep: 1,
      selectedHouse: null,
      cleaningFee: 150,
      reservation: {
        checkin: '',
        checkout: '',
        guests: 1
      },
      houses: [
        {
          id: 1,
          name: 'Luxury Villa with Sea View',
          location: 'Antalya, Kalkan',
          image: '/oda3.jpg',
          dailyPrice: 850,
          bedrooms: 3,
          bathrooms: 2,
          maxGuests: 6,
          amenities: ['WiFi', 'Air Conditioning', 'Pool', 'Sea View', 'Parking']
        },
        {
          id: 2,
          name: 'Modern City House',
          location: 'Istanbul, Besiktas',
          image: '/oda3.jpg',
          dailyPrice: 650,
          bedrooms: 2,
          bathrooms: 1,
          maxGuests: 4,
          amenities: ['WiFi', 'Air Conditioning', 'Near Metro', 'Kitchen', 'Washing Machine']
        },
        {
          id: 3,
          name: 'Bungalow in Nature',
          location: 'Mugla, Fethiye',
          image: '/oda3.jpg',
          dailyPrice: 450,
          bedrooms: 1,
          bathrooms: 1,
          maxGuests: 2,
          amenities: ['WiFi', 'Nature View', 'Fireplace', 'Barbecue', 'Bicycle']
        },
        {
          id: 4,
          name: 'Historic Mansion',
          location: 'Safranbolu, Karabuk',
          image: '/oda3.jpg',
          dailyPrice: 550,
          bedrooms: 4,
          bathrooms: 3,
          maxGuests: 8,
          amenities: ['WiFi', 'Historic Architecture', 'Courtyard', 'Traditional Decor', 'Parking']
        },
        {
          id: 5,
          name: 'Beach House',
          location: 'Izmir, Cesme',
          image: '/oda3.jpg',
          dailyPrice: 750,
          bedrooms: 2,
          bathrooms: 2,
          maxGuests: 5,
          amenities: ['WiFi', 'Beach Access', 'Sea View', 'Terrace', 'Barbecue']
        },
        {
          id: 6,
          name: 'Mountain House',
          location: 'Bolu, Abant',
          image: '/oda3.jpg',
          dailyPrice: 400,
          bedrooms: 2,
          bathrooms: 1,
          maxGuests: 4,
          amenities: ['WiFi', 'Mountain View', 'Fireplace', 'Nature Hiking', 'Parking']
        }
      ]
    }
  },
  computed: {
    today() {
      return new Date().toISOString().split('T')[0];
    }
  },
  methods: {
    selectHouse(house) {
      this.selectedHouse = house;
      this.reservation.guests = 1;
    },
    nextStep() {
      if (this.currentStep < 3) {
        this.currentStep++;
      }
    },
    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },
    formatDate(dateString) {
      if (!dateString) return '';
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    },
    calculateNights() {
      if (!this.reservation.checkin || !this.reservation.checkout) return 0;
      const checkin = new Date(this.reservation.checkin);
      const checkout = new Date(this.reservation.checkout);
      const diffTime = checkout - checkin;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays > 0 ? diffDays : 0;
    },
    calculateSubtotal() {
      if (!this.selectedHouse) return 0;
      const nights = this.calculateNights();
      return nights * this.selectedHouse.dailyPrice;
    },
    calculateTotal() {
      return this.calculateSubtotal() + this.cleaningFee;
    },
    proceedToPayment() {
      alert('You are being redirected to the payment page... (This feature is not yet developed)');
      console.log('Reservation Details:', {
        house: this.selectedHouse,
        reservation: this.reservation,
        total: this.calculateTotal()
      });
    }
  }
}
</script>

<style scoped>
.reservation-page {
  min-height: 100vh;
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.page-title {
  color: var(--title-color);
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  text-align: center;
  font-family: var(--title-font);
}

.page-description {
  color: var(--title-color);
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto 3rem;
  text-align: center;
}

/* Adım Göstergesi */
.step-indicator {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  gap: 2rem;
}

.step {
  display: flex;
  align-items: center;
  color: var(--title-color);
  font-weight: 500;
}

.step.active {
  color: white;
}

.step.completed {
  color: var(--title-color);
  
}
.step-number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
  font-weight: 600;
}

.step.active .step-number {
  background: white;
  color: var(--third-color);
}

.step.completed .step-number {
  background: var(--third-color);
  color: var(--primary-color);
}

/* Adım İçeriği */
.step-content {
  background: var(--primary-color);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.section-title {
  color: var(--title-color);
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
  font-family: var(--title-font);
}

/* Ev Seçimi */
.houses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.house-card {
  border: 1px solid var(--title-color);
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  background: var(--primary-color);
}

.house-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  border-color: var(--secondary-color);
}

.house-card.selected {
  border-color: var(--secondary-color);
  box-shadow: 0 0 0 3px rgba(204, 83, 31, 0.2);
}

.house-image {
  position: relative;
  width: 100%;
  height: 200px;
}

.house-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.price-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: linear-gradient(135deg, var(--secondary-color) 0%, var(--secondary-color-light) 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 1rem;
}

.house-info {
  padding: 1.5rem;
}

.house-name {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--title-color);
  margin-bottom: 0.5rem;
  font-family: var(--title-font);
}

.house-location {
  color: var(--text-color);
  margin-bottom: 1rem;
}

.house-features {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: var(--text-color);
}

.feature {
  background: rgba(59, 176, 117, 0.1);
  color: var(--third-color);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
}

.house-amenities {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.amenity {
  background: rgba(59, 176, 117, 0.1);
  color: var(--third-color);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

/* Tarih Seçimi */
.date-selection {
  margin-bottom: 2rem;
}

.selected-house-info {
  background: rgba(59, 176, 117, 0.05);
  border-radius: 15px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-left: 4px solid var(--third-color);
}

.selected-house-info img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 10px;
}

.house-details h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--title-color);
  margin-bottom: 0.5rem;
  font-family: var(--title-font);
}

.house-details p {
  color: var(--text-color);
  margin-bottom: 0.5rem;
}

.daily-price {
  color: var(--third-color);
  font-weight: 600;
  font-size: 1.1rem;
}

.date-form {
  margin-bottom: 2rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  color: var(--text-color);
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: var(--secondary-color);
  box-shadow: 0 0 0 3px rgba(204, 83, 31, 0.1);
}

.price-calculation {
  background: rgba(59, 176, 117, 0.05);
  border-radius: 15px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  border-left: 4px solid var(--third-color);
}

.calculation-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  color: var(--text-color);
}

.calculation-row.total {
  font-weight: 600;
  font-size: 1.2rem;
  color: var(--third-color);
  padding-top: 1rem;
  border-top: 2px solid var(--third-color);
  margin-top: 1rem;
}

/* Rezervasyon Özeti */
.reservation-summary-final {
  margin-bottom: 2rem;
}

.summary-house {
  background: rgba(59, 176, 117, 0.05);
  border-radius: 15px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-left: 4px solid var(--third-color);
}

.summary-house img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
}

.summary-details {
  margin-bottom: 2rem;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f0f0f0;
}

.detail-row .label {
  color: var(--text-color);
  font-weight: 500;
}

.detail-row .value {
  color: var(--title-color);
  font-weight: 600;
}

.final-price {
  background: rgba(59, 176, 117, 0.05);
  border-radius: 15px;
  padding: 1.5rem;
  border-left: 4px solid var(--third-color);
}

.price-breakdown {
  margin-bottom: 1rem;
}

.price-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  color: var(--text-color);
}

.price-row.total {
  font-weight: 600;
  font-size: 1.3rem;
  color: var(--third-color);
  padding-top: 1rem;
  border-top: 2px solid var(--third-color);
  margin-top: 1rem;
}

/* Butonlar */
.step-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  gap: 1rem;
}

.back-btn {
  padding: 0.75rem 2rem;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  background: #f0f0f0;
  color: var(--text-color);
}

.back-btn:hover {
  background: #e0e0e0;
}

.next-btn,
.payment-btn {
  padding: 0.75rem 2rem;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  background: linear-gradient(135deg, var(--secondary-color) 0%, var(--secondary-color-light) 100%);
  color: white;
}

.next-btn:hover,
.payment-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(204, 83, 31, 0.3);
}

.next-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

@media (max-width: 768px) {
  .step-indicator {
    gap: 1rem;
  }
  
  .houses-grid {
    grid-template-columns: 1fr;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .page-description {
    font-size: 1rem;
  }
  
  .step-actions {
    flex-direction: column;
  }
  
  .selected-house-info,
  .summary-house {
    flex-direction: column;
    text-align: center;
  }
}
</style>