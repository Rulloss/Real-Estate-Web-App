<template>
  <Navigation />
  <div class="rooms-page">
    <div class="container">
      <!-- Page Header -->
      <div class="page-header autoShow">
        <h1 class="page-title">Accommodation Options</h1>
        <p class="page-description">
          Find the perfect home for you. Use filters to discover accommodations with the features you're looking for.
        </p>
      </div>

      <!-- Filters Section -->
      <div class="filters-section autoShow">
        <div class="filters-container">
          <div class="filter-group">
            <label for="location">Location</label>
            <select id="location" v-model="filters.location">
              <option value="">All Locations</option>
              <option value="antalya">Antalya</option>
              <option value="istanbul">Istanbul</option>
              <option value="mugla">Mugla</option>
              <option value="safranbolu">Safranbolu</option>
              <option value="izmir">Izmir</option>
              <option value="bolu">Bolu</option>
            </select>
          </div>

          <div class="filter-group">
            <label for="guests">Number of Guests</label>
            <select id="guests" v-model="filters.guests">
              <option value="">Any</option>
              <option value="2">2 People</option>
              <option value="4">4 People</option>
              <option value="6">6 People</option>
              <option value="8">8+ People</option>
            </select>
          </div>

          <div class="filter-group">
            <label for="priceRange">Price Range (₺/night)</label>
            <select id="priceRange" v-model="filters.priceRange">
              <option value="">All Prices</option>
              <option value="0-500">₺0 - ₺500</option>
              <option value="500-700">₺500 - ₺700</option>
              <option value="700-1000">₺700 - ₺1000</option>
            </select>
          </div>

          <div class="filter-group">
            <label for="amenities">Features</label>
            <select id="amenities" v-model="filters.amenities">
              <option value="">All Features</option>
              <option value="wifi">WiFi</option>
              <option value="havuz">Pool</option>
              <option value="deniz">Sea View</option>
              <option value="otopark">Parking</option>
              <option value="klima">Air Conditioning</option>
            </select>
          </div>

          <div class="filter-actions">
            <button class="clear-filters-btn" @click="clearFilters">Clear Filters</button>
          </div>
        </div>
      </div>

      <!-- Results Count -->
      <div class="results-info autoShow ">
        <p>{{ filteredHouses.length }} accommodations found</p>
      </div>

      <!-- House List -->
      <div class="houses-grid autoShow">
        <div 
          v-for="house in filteredHouses" 
          :key="house.id" 
          class="house-card"
          @click="openHouseDetail(house)"
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
              <span v-for="amenity in house.amenities.slice(0, 3)" :key="amenity" class="amenity">
                {{ amenity }}
              </span>
              <span v-if="house.amenities.length > 3" class="more-amenities">
                +{{ house.amenities.length - 3 }} more
              </span>
            </div>
            
            <div class="house-rating">
              <div class="stars">
                <span v-for="n in 5" :key="n" class="star" :class="{ filled: n <= house.rating }">★</span>
              </div>
              <span class="rating-text">({{ house.reviews }} reviews)</span>
            </div>
          </div>
        </div>
      </div>

      <!-- House Detail Modal -->
      <div v-if="selectedHouse" class="modal-overlay" @click="closeHouseDetail">
        <div class="modal-content" @click.stop>
          <button class="close-btn" @click="closeHouseDetail">×</button>
          
          <div class="modal-header">
            <img :src="selectedHouse.image" :alt="selectedHouse.name" class="modal-image">
            <div class="modal-info">
              <h2>{{ selectedHouse.name }}</h2>
              <p class="modal-location">{{ selectedHouse.location }}</p>
              <div class="modal-price">₺{{ selectedHouse.dailyPrice }}/night</div>
            </div>
          </div>
          
          <div class="modal-body">
            <div class="modal-section">
              <h3>Features</h3>
              <div class="modal-features">
                <div class="feature-item">
                  <span class="feature-icon">🛏️</span>
                  <span>{{ selectedHouse.bedrooms }} Bedrooms</span>
                </div>
                <div class="feature-item">
                  <span class="feature-icon">🚿</span>
                  <span>{{ selectedHouse.bathrooms }} Bathrooms</span>
                </div>
                <div class="feature-item">
                  <span class="feature-icon">👥</span>
                  <span>{{ selectedHouse.maxGuests }} Guest Capacity</span>
                </div>
              </div>
            </div>
            
            <div class="modal-section">
              <h3>Amenities</h3>
              <div class="modal-amenities">
                <span v-for="amenity in selectedHouse.amenities" :key="amenity" class="modal-amenity">
                  {{ amenity }}
                </span>
              </div>
            </div>
            
            <div class="modal-section">
              <h3>Description</h3>
              <p class="modal-description">{{ selectedHouse.description }}</p>
            </div>
          </div>
          
          <div class="modal-footer">
            <button class="reserve-btn" @click="goToReservation">Make Reservation</button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>
<script>
import Navigation from "../components/Navigation.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Rooms",
  components: {
    Navigation,
    Footer
  },
  data() {
    return {
      selectedHouse: null,
      filters: {
        location: '',
        guests: '',
        priceRange: '',
        amenities: ''
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
          amenities: ['WiFi', 'Air Conditioning', 'Pool', 'Sea View', 'Parking'],
          rating: 4.8,
          reviews: 127,
          isFavorite: false,
          description: 'Magnificent luxury villa with sea view. Offers an unforgettable vacation experience with modern design and comfortable living spaces. Perfect accommodation with private pool and spacious terrace.',
          locationKey: 'antalya'
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
          amenities: ['WiFi', 'Air Conditioning', 'Near Metro', 'Kitchen', 'Washing Machine'],
          rating: 4.5,
          reviews: 89,
          isFavorite: false,
          description: 'Modern and comfortable house in the heart of the city. Walking distance to metro station, close to shopping centers and restaurants.',
          locationKey: 'istanbul'
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
          amenities: ['WiFi', 'Nature View', 'Fireplace', 'Barbecue', 'Bicycle'],
          rating: 4.7,
          reviews: 156,
          isFavorite: false,
          description: 'A peaceful escape in nature. Ideal for romantic evenings by the fireplace and nature walks.',
          locationKey: 'mugla'
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
          amenities: ['WiFi', 'Historic Architecture', 'Courtyard', 'Traditional Decor', 'Parking'],
          rating: 4.9,
          reviews: 203,
          isFavorite: false,
          description: 'Experience the beauty of Ottoman architecture. Restored historic mansion combines traditional decor with modern comfort.',
          locationKey: 'safranbolu'
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
          amenities: ['WiFi', 'Beach Access', 'Sea View', 'Terrace', 'Barbecue'],
          rating: 4.6,
          reviews: 94,
          isFavorite: false,
          description: 'Comfortable house at zero distance to the beach. Breakfast by the sea and dinner with sunset views.',
          locationKey: 'izmir'
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
          amenities: ['WiFi', 'Mountain View', 'Fireplace', 'Nature Hiking', 'Parking'],
          rating: 4.4,
          reviews: 67,
          isFavorite: false,
          description: 'A peaceful escape at the foothills of the mountains. Nature walks, fresh air and warm evenings by the fireplace.',
          locationKey: 'bolu'
        },
        {
          id: 7,
          name: 'Coastal Villa',
          location: 'Antalya, Kas',
          image: '/oda3.jpg',
          dailyPrice: 920,
          bedrooms: 3,
          bathrooms: 3,
          maxGuests: 6,
          amenities: ['WiFi', 'Air Conditioning', 'Private Beach', 'Jacuzzi', 'Parking', 'Sea View'],
          rating: 4.9,
          reviews: 178,
          isFavorite: false,
          description: 'Luxury coastal villa with private beach. Premium vacation experience with jacuzzi, spacious terrace and breathtaking sea views.',
          locationKey: 'antalya'
        },
        {
          id: 8,
          name: 'City Center Loft',
          location: 'Istanbul, Galata',
          image: '/oda3.jpg',
          dailyPrice: 580,
          bedrooms: 1,
          bathrooms: 1,
          maxGuests: 2,
          amenities: ['WiFi', 'Air Conditioning', 'City View', 'Modern Design', 'Elevator'],
          rating: 4.3,
          reviews: 112,
          isFavorite: false,
          description: 'Modern loft near Galata Tower. City views and cultural venues within walking distance.',
          locationKey: 'istanbul'
        }
      ]
    }
  },
  computed: {
    filteredHouses() {
      let filtered = this.houses;

      if (this.filters.location) {
        filtered = filtered.filter(house => house.locationKey === this.filters.location);
      }

      if (this.filters.guests) {
        const guestCount = parseInt(this.filters.guests);
        if (guestCount === 8) {
          filtered = filtered.filter(house => house.maxGuests >= 8);
        } else {
          filtered = filtered.filter(house => house.maxGuests >= guestCount);
        }
      }

      if (this.filters.priceRange) {
        const [min, max] = this.filters.priceRange.split('-').map(Number);
        filtered = filtered.filter(house => {
          return house.dailyPrice >= min && house.dailyPrice <= max;
        });
      }

      if (this.filters.amenities) {
        const searchAmenity = this.filters.amenities.toLowerCase();
        filtered = filtered.filter(house => {
          return house.amenities.some(amenity => 
            amenity.toLowerCase().includes(searchAmenity)
          );
        });
      }

      return filtered;
    }
  },
  methods: {
    openHouseDetail(house) {
      this.selectedHouse = house;
      document.body.style.overflow = 'hidden';
    },
    closeHouseDetail() {
      this.selectedHouse = null;
      document.body.style.overflow = 'auto';
    },
    toggleFavorite(houseId) {
      const house = this.houses.find(h => h.id === houseId);
      if (house) {
        house.isFavorite = !house.isFavorite;
      }
    },
    clearFilters() {
      this.filters = {
        location: '',
        guests: '',
        priceRange: '',
        amenities: ''
      };
    },
    applyFilters() {
      // Filtering is done automatically with computed property
      // This method can be used for additional operations in the future
      console.log('Filters applied:', this.filters);
    },
    goToReservation() {
      // Redirect to reservation page
      this.$router.push('/reservation');
      this.closeHouseDetail();
    }
  },
  beforeUnmount() {
    document.body.style.overflow = 'auto';
  }
};
</script>
<style scoped>
.rooms-page {
  min-height: 100vh;
  padding: 2rem 0;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Sayfa Başlığı */
.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-title {
  color: var(--title-color);
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  font-family: var(--title-font);
}

.page-description {
  color: var(--text-color);
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
  font-family: var(--text-font);
}

/* Filtre Bölümü */
.filters-section {
  background: none;
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.filters-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  align-items: end;
}

.filter-group {
  display: flex;
  flex-direction: column;
}

.filter-group label {
  color: var(--text-color);
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.filter-group select {
  padding: 0.75rem;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: none;
  color: var(--text-color);
}

.filter-group select:focus {
  outline: none;
  border-color: var(--secondary-color);
  box-shadow: 0 0 0 3px rgba(204, 83, 31, 0.1);
}

.filter-actions {
  display: flex;
  gap: 1rem;
  grid-column: 1 / -1;
  justify-content: center;
  margin-top: 1rem;
}

.clear-filters-btn {
  padding: 0.75rem 1.5rem;
  border: 2px solid var(--text-color);
  background: none;
  color: var(--text-color);
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.clear-filters-btn:hover {
  background: var(--text-color);
  color: white;
}

.apply-filters-btn {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, var(--secondary-color) 0%, var(--secondary-color-light) 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.apply-filters-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(204, 83, 31, 0.3);
}

/* Sonuç Bilgisi */
.results-info {
  background: none;
  padding: 1rem 2rem;
  border-radius: 15px;
  margin-bottom: 2rem;
  text-align: center;
}

.results-info p {
  color: var(--text-color);
  font-weight: 600;
  margin: 0;
}

/* Ev Listesi */
.houses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.house-card {
  background: none;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
}

.house-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.house-image {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.house-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.house-card:hover .house-image img {
  transform: scale(1.05);
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
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
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
  font-size: 0.95rem;
}

.house-features {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.feature {
  background: rgba(59, 176, 117, 0.1);
  color: var(--third-color);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

.house-amenities {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.amenity {
  background: rgba(59, 176, 117, 0.1);
  color: var(--third-color);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.more-amenities {
  background: none;
  color: var(--text-color);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.house-rating {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.stars {
  display: flex;
  gap: 0.1rem;
}

.star {
  color: #ddd;
  font-size: 1rem;
}

.star.filled {
  color: #ffd700;
}

.rating-text {
  color: var(--text-color);
  font-size: 0.9rem;
}

/* Modal Stilleri */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
}

.modal-content {
  background: none;
  border-radius: 20px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  border: none;
  background: none;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
  transition: all 0.3s ease;
}

.close-btn:hover {
  background: none;
}

.modal-header {
  position: relative;
}

.modal-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
}

.modal-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;
  overflow: hidden;
  padding: 2rem;
  border-radius: 0 0 0 0;
}

.modal-info h2 {
  color: var(--primary-color);
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-family: var(--title-font);
  background: none;
}

.modal-location {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  opacity: 0.9;
  color: var(--primary-color);
  background: none;
}

.modal-price {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--third-color);
  background: none;
}

.modal-body {
  padding: 2rem;
}

.modal-section {
  margin-bottom: 2rem;
}

.modal-section h3 {
  color: var(--title-color);
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  font-family: var(--title-font);
}

.modal-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background: rgba(59, 176, 117, 0.05);
  border-radius: 10px;
  border-left: 4px solid var(--third-color);
}

.feature-icon {
  font-size: 1.2rem;
}

.modal-amenities {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.modal-amenity {
  background: rgba(59, 176, 117, 0.1);
  color: var(--third-color);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.modal-description {
  color: var(--text-color);
  line-height: 1.6;
  font-size: 1rem;
}

.modal-footer {
  padding: 0 2rem 2rem;
}

.reserve-btn {
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, var(--secondary-color) 0%, var(--secondary-color-light) 100%);
  color: white;
  border: none;
  border-radius: 15px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.reserve-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(204, 83, 31, 0.3);
}

/* Responsive Tasarım */
@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .page-description {
    font-size: 1rem;
  }
  
  .filters-container {
    grid-template-columns: 1fr;
  }
  
  .filter-actions {
    flex-direction: column;
  }
  
  .houses-grid {
    grid-template-columns: 1fr;
  }
  
  .house-features {
    justify-content: center;
  }
  
  .modal-overlay {
    padding: 1rem;
  }
  
  .modal-features {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 0.5rem;
  }
  
  .filters-section {
    padding: 1rem;
  }
  
  .house-info {
    padding: 1rem;
  }
  
  .modal-body {
    padding: 1rem;
  }
  
  .modal-footer {
    padding: 0 1rem 1rem;
  }
}
</style>
