// Sample mock data for hotel details (you'll replace this with real data later)
const hotelDetailsData = {
  1: {
    title: "Renaissance",
    category: "Отел��",
    location: "Мангистауская область, г. Ақтау, 9 мкр 4 дом",
    image: "https://backend.mangystau-travel.kz/storage/XUdosYZwQbGLUVLmy39SErdHe7zdykl6HvW76RzJ.webp",
    price: "цены могут измениться в зависимости от сезона",
    description:
      "Современный отель Renaissance предлагает высококлассный сервис и комфортное проживание в самом центре Актау. Идеальный выбор для деловых и развлекательных поездок.",
    features: ["Бесплатный Wi-Fi", "Ресторан", "Фитнес-центр", "Конференц-залы", "Парковка", "Трансфер из аэропорта"],
    amenities:
      "В отеле имеются просторные номера с современным дизайном, бизнес-центр, спа-салон и несколько ресторанов с разнообразной кухней. Гости могут насладиться видом на Каспийское море.",
    phone: "+7 (XXX) XXX-XX-XX",
    email: "info@renaissance-aktau.kz",
    gallery: ["https://backend.mangystau-travel.kz/storage/XUdosYZwQbGLUVLmy39SErdHe7zdykl6HvW76RzJ.webp"],
  },
  2: {
    title: "Rixos Water World Aktau",
    category: "Отель",
    location: "г. Ақтау, Теплый пляж",
    image: "https://backend.mangystau-travel.kz/storage/4ApuJltKyz6cB5BgSVNSvnvGKP5LouM11IKnCfT2.png",
    price: "цены могут измениться в зависимости от сезона",
    description:
      "Роскошный курортный отель Rixos Water World Aktau расположен на берегу Каспийского моря. Отель предлагает уникальный водный парк, spa-центр мирового класса и изысканную кухню.",
    features: ["Аквапарк", "Частный пляж", "Spa-центр", "Детский клуб", "Несколько ресторанов", "All Inclusive"],
    amenities:
      "Комплекс включает в себя крупнейший в регионе аквапарк, современный конференц-центр, роскошный спа-комплекс и разнообразные рестораны. Идеальное место для семейного отдыха.",
    phone: "+7 (XXX) XXX-XX-XX",
    email: "info@rixos-aktau.com",
    gallery: ["https://backend.mangystau-travel.kz/storage/4ApuJltKyz6cB5BgSVNSvnvGKP5LouM11IKnCfT2.png"],
  },
  default: {
    title: "Қонақүй",
    category: "Отель",
    location: "Ақтау қаласы",
    image: "/grand-hotel-exterior.png",
    price: "цены могут измениться в зависимости от сезона",
    description:
      "Жайлы және заманауи қонақүй Ақтау қаласының орталығында орналасқан. Біз сізге жоғары сапалы қызмет көрсетуге дайынбыз.",
    features: ["Тегін Wi-Fi", "Мейрамхана", "24/7 қабылдау", "Автотұрақ", "Кондиционер", "Таңғы ас"],
    amenities:
      "Қонақүйде барлық қажетті жайлылықтар бар. Біздің қызметкерлер сіздің демалысыңызды ыңғайлы етуге көмектеседі.",
    phone: "+7 (XXX) XXX-XX-XX",
    email: "info@hotel-aktau.kz",
    gallery: [],
  },
}

// Get hotel ID from URL
function getHotelIdFromURL() {
  const urlParams = new URLSearchParams(window.location.search)
  return Number.parseInt(urlParams.get("id")) || 1
}

// Render hotel details
function renderHotelDetail() {
  const hotelId = getHotelIdFromURL()
  const hotel = hotelDetailsData[hotelId] || hotelDetailsData.default

  const detailContainer = document.getElementById("hotelDetail")

  detailContainer.innerHTML = `
    <img 
      src="${hotel.image}" 
      alt="${hotel.title}"
      class="hotel-hero-image"
      onerror="this.src='/grand-hotel-exterior.png'"
    />
    
    <div class="hotel-content">
      <div class="hotel-main">
        <span class="hotel-category">${hotel.category}</span>
        <h1 class="hotel-title">${hotel.title}</h1>
        <div class="hotel-location">${hotel.location}</div>
        
        <div class="hotel-section">
          <h2>Сипаттама</h2>
          <p>${hotel.description}</p>
        </div>
        
        <div class="hotel-section">
          <h2>Қызметтер</h2>
          <ul class="hotel-features">
            ${hotel.features.map((feature) => `<li>${feature}</li>`).join("")}
          </ul>
        </div>
        
        <div class="hotel-section">
          <h2>Қосымша ақпарат</h2>
          <p>${hotel.amenities}</p>
        </div>
        
        ${
          hotel.gallery && hotel.gallery.length > 0
            ? `
          <div class="hotel-section">
            <h2>Галерея</h2>
            <div class="hotel-gallery">
              ${hotel.gallery
                .map(
                  (img) => `
                <img src="${img}" alt="Hotel gallery" class="gallery-image" />
              `,
                )
                .join("")}
            </div>
          </div>
        `
            : ""
        }
      </div>
      
      <div class="hotel-sidebar">
        <div class="booking-card">
          <div class="price-label">Баға:</div>
          <div class="price">${hotel.price}</div>
          
          <div class="contact-info">
            <div class="contact-item">
              <div class="contact-label">Телефон</div>
              <div class="contact-value">${hotel.phone}</div>
            </div>
            <div class="contact-item">
              <div class="contact-label">Email</div>
              <div class="contact-value">${hotel.email}</div>
            </div>
          </div>
          
          <button class="book-button" onclick="alert('Брондау функциясы әзірленуде')">
            Брондау
          </button>
        </div>
      </div>
    </div>
  `

  // Update page title
  document.title = `${hotel.title} – Маңғыстау Explorer`
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", renderHotelDetail)
