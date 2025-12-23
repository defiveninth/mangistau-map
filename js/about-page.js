// Guides data from API
const guidesData = [
  {
    id: 17,
    slug: "abaiuly_zandos",
    fio: "Абайулы Жандос",
    short_description: "стаж 2 года",
    image: "https://backend.mangystau-travel.kz/storage/ErajFjx1wdqBcZZ7phMqc2TKhAOMn2ZuXRO3NB1P.png",
  },
  {
    id: 43,
    slug: "abilova_gulzan_taganovna",
    fio: "Абилова Гулжан Тагановна",
    short_description: "стаж 2 года",
    image: "https://backend.mangystau-travel.kz/storage/MDPWt0ayusru7BmueNcANafLFa47vMxWKQ7VB3bu.png",
  },
  {
    id: 2,
    slug: "adilova_aselia_gabidenqyzy",
    fio: "Адилова Аселя",
    short_description: "стаж 1 год",
    image: "https://backend.mangystau-travel.kz/storage/t5IQjM5IxaEmu81SAZmVzvj24D6P5DKJT667kPVz.png",
  },
  {
    id: 34,
    slug: "aitkulova_zaniia_zarylgapkyzy",
    fio: "Айткулова Жания Жарылгапкызы",
    short_description: "стаж 2 года",
    image: "https://backend.mangystau-travel.kz/storage/tGECqMzdHcKzrh4S8VRmrYPDiv0WIROb6RHJqpyF.png",
  },
  {
    id: 21,
    slug: "aksenbai_zadyra_amankyzy",
    fio: "Аксенбай Жадыра Аманкызы",
    short_description: "стаж 2 года",
    image: "https://backend.mangystau-travel.kz/storage/cmQZIrxaONAzm8aORJEFJUgyRCWI3LtOMDqXFpG8.png",
  },
  {
    id: 7,
    slug: "alekaev_savelii_iurevic",
    fio: "Алекаев Савелий Юрьевич",
    short_description: "стаж 10 года",
    image: "https://backend.mangystau-travel.kz/storage/0S5ZeyyWLOSdSy1NSsUIeMwJqjRV4B2PRH8hfKxg.png",
  },
  {
    id: 44,
    slug: "amandykova_marina_baltabekovna",
    fio: "Амандыкова Марина Балтабековна",
    short_description: "стаж 2 года",
    image: "https://backend.mangystau-travel.kz/storage/vhNzfKklBVb1YDKQDi4T4UJWLs4RZ5393E68SawQ.png",
  },
  {
    id: 30,
    slug: "askar_dana_askarkyzy",
    fio: "Аскар Дана Аскаркызы",
    short_description: "стаж 2 года",
    image: "https://backend.mangystau-travel.kz/storage/7BZQbPBMRFaDLhW41TPm1w4oLTT7gqFE1w29haQu.png",
  },
  {
    id: 5,
    slug: "baqyt_bek_tobysuly",
    fio: "Бакыт Бек Тобышулы",
    short_description: "стаж 2 года",
    image: "https://backend.mangystau-travel.kz/storage/Xfo7yqCWANlJFNlzkQXwIboWq0wFNfFHrE3CyRli.png",
  },
  {
    id: 8,
    slug: "danilevskaia_aleksandra_aleksandrovna",
    fio: "Данилевская Александра Александровна",
    short_description: "стаж 13 года",
    image: "https://backend.mangystau-travel.kz/storage/2c4fhAc2KJ7HYh3hTbsJEWt7dDrx2Xqmd1U7A2Iz.png",
  },
  {
    id: 18,
    slug: "doncenko_igor",
    fio: "Донченко Игорь",
    short_description: "стаж 2 года",
    image: "https://backend.mangystau-travel.kz/storage/j8r8UWnOf6cRonBu8kOzesi5GbagdU6VHGsZjgUn.png",
  },
  {
    id: 38,
    slug: "ergalieva_ainur_smagulkyzy",
    fio: "Ергалиева Айнур Смагуловна",
    short_description: "стаж 3 года",
    image: "https://backend.mangystau-travel.kz/storage/FAbejbK0FsHvRaUEpovTGxzj2lo89GslVbbacaEt.png",
  },
  {
    id: 37,
    slug: "erxanaev_sarsen",
    fio: "Ерханаев Сарсен",
    short_description: "стаж 2 года",
    image: "https://backend.mangystau-travel.kz/storage/2L7cYC4sC9lYCDVQPYCtBJVB4JRutWPh8VbPeVgT.png",
  },
  {
    id: 31,
    slug: "zalgasbai_galiia_turarkyzy",
    fio: "Жалгасбай Галия Тураркызы",
    short_description: "стаж 2 года",
    image: "https://backend.mangystau-travel.kz/storage/rR0StYybdyipvrvieI7TbZKvcWBP2fgZsfdBSmoM.png",
  },
  {
    id: 22,
    slug: "zasybaeva_aigul_alpamysovna",
    fio: "Жасыбаева Айгуль Алпамысовна",
    short_description: "стаж 2 года",
    image: "https://backend.mangystau-travel.kz/storage/IXhT3kTHKI23NrTLJ257hOrhEP5ZHqInRONH7ono.png",
  },
]

const operatorsData = [
  {
    id: 18,
    slug: "ip_elite_business",
    title: "ИП «Elite business»",
    address: "г. Актау, 13 мкр, здание 10а",
    type: "ИП «Elite business»",
    route: "ИП «Elite business»",
    purpose: "Туры по Мангистау",
    duration: "6 часов",
    phone: "8 771 845 26 64",
    category_id: "4",
    link: null,
  },
  {
    id: 19,
    slug: "ip_made_in_mangystau",
    title: "ИП «Made in Mangystau»",
    address: "г. Актау, 17 мкр, здание 7, офис",
    type: "ИП «Made in Mangystau»",
    route: "ИП «Made in Mangystau»",
    purpose: "Туры по Мангистау",
    duration: "6 часов",
    phone: "+7 701 748 01 61",
    category_id: "4",
    link: null,
  },
  {
    id: 3,
    slug: "ip_askar_dana",
    title: "ИП «Аскар Дана»",
    address: "Мангистауская область, г. Актау, 14 мкр 45 дом, 21 офис",
    type: "Познавательная",
    route: "«Актау – впадина Каракия»",
    purpose: "Познавательное-оздоровительное путешествие",
    duration: "5 часов",
    phone: "+7 (775) 599 25 83",
    category_id: "2",
    link: null,
  },
  {
    id: 15,
    slug: "ip_inzu",
    title: "ИП «Инжу»",
    address: "г.Актау, 28А мкр, 23 д, кв 48.",
    type: "туроператор",
    route: "ИП «Инжу»",
    purpose: "Туры по Мангистау",
    duration: "6 часов",
    phone: "8702 525 46 04",
    category_id: "2",
    link: "https://www.instagram.com/intravel_aktau?igsh=MXNnYXhleG1qOW11eg==",
  },
  {
    id: 4,
    slug: "ip_etnotur",
    title: "ИП «Этнотур»",
    address: "Мангистауская область, г. Актау, 12 мкр 69 дом, 41 кв",
    type: "Экскурсия, познавательный тур",
    route: "«Тур по Скальной тропе»",
    purpose: "Историко-краеведческая, культурно-познавательная",
    duration: "1-1,5 часа",
    phone: "8 /7292/ 440 312, 434 051",
    category_id: "1",
    link: "https://api.whatsapp.com/send/?phone=77013647509&text=Здравствуйте%21%0A%0AПишу+из+приложения+2ГИС.%0A%0A&type=phone_number&app_absent=0",
  },
  {
    id: 17,
    slug: "ip_redmaya",
    title: "ИП Redmaya",
    address: "г. Актау, БЦ «Сункар», 2 мкр, 47Б",
    type: "ИП Redmaya",
    route: "ИП Redmaya",
    purpose: "Туры по Мангистау",
    duration: "6 часов",
    phone: "8 705 176 17 26",
    category_id: "4",
    link: null,
  },
  {
    id: 16,
    slug: "too_aqdariya_group",
    title: "ТОО «Aqdariya group»",
    address: "Мангистауская область, г.Актау, 17 мкр, зд.48",
    type: "туроператор",
    route: "ТОО «Aqdariya group»",
    purpose: "Туры по Мангистау",
    duration: "6-7 часов",
    phone: "8701 591 00 77",
    category_id: "2",
    link: null,
  },
  {
    id: 8,
    slug: "too_aqzhelken_group",
    title: "ТОО «Aqzhelken group»",
    address: "Мангистауская область, г. Актау, 28 мкр, 48 дом",
    type: "Экскурсия, познавательный тур",
    route: "«Паломничество к Бекет Ата»",
    purpose: "Паломничество",
    duration: "15 часов",
    phone: "+7 (700) 365 02 62",
    category_id: "3",
    link: "https://sapartime.taplink.ws",
  },
  {
    id: 10,
    slug: "too_kettyk_group",
    title: "ТОО «Kettyk Group»",
    address: "Мангистауская область, г. Актау, Микрорайон 6, 40 дом, 5",
    type: "Познавательное путешествие",
    route: "Караман ата – Ыбыкты сай (Ажуный каньон)",
    purpose: "Знакомство с культурой Мангистау",
    duration: "6-7 часов",
    phone: "+7 (708) 362 69 20",
    category_id: "2",
    link: "https://www.instagram.com/kettik.mangystau/?hl=ru",
  },
  {
    id: 20,
    slug: "too_mangystau_safari",
    title: "ТОО «Mangystau Safari»",
    address: "г. Актау, 17 мкр, БЦ «Ажар»",
    type: "ТОО «Mangystau Safari»",
    route: "ТОО «Mangystau Safari»",
    purpose: "Туры по Мангистау",
    duration: "6 часов",
    phone: "8 707 362 60 44",
    category_id: "4",
    link: null,
  },
  {
    id: 5,
    slug: "too_aktau_siti_tur",
    title: "ТОО «Актау Сити Тур»",
    address: "Мангистауская область, г. Актау, 5 мкр 36 дом, 2 офис",
    type: "Экскурсия, познавательный тур",
    route: "«Природный символ Мангистау – Шеркала!»",
    purpose: "Историко-познавательная",
    duration: "8-10 часов",
    phone: "+7 (702) 900 63 15, +7 (778) 217 67 54",
    category_id: "3",
    link: "https://www.instagram.com/aktau_city_tour",
  },
  {
    id: 13,
    slug: "too_vizit_aktau",
    title: "ТОО «Визит Актау»",
    address: "г.Актау, 1 В мкр, 59 дом",
    type: "туроператор",
    route: "ТОО «Визит Актау»",
    purpose: "Туры по Мангистау",
    duration: "6-7 часов",
    phone: "8778 111 10 80",
    category_id: "4",
    link: "https://www.instagram.com/visitaktau?igsh=eWhud2QxcWltdmth",
  },
]

// Render guides
function renderGuides() {
  const guidesGrid = document.getElementById("guides-grid")

  guidesData.forEach((guide) => {
    const guideCard = document.createElement("div")
    guideCard.className = "guide-card"

    guideCard.innerHTML = `
      <img 
        src="${guide.image}" 
        alt="${guide.fio}" 
        class="guide-image"
        onerror="this.style.background='linear-gradient(135deg, #C19A6B 0%, #E8D5C4 100%)'"
      />
      <div class="guide-info">
        <div class="guide-name">${guide.fio}</div>
        <div class="guide-experience">${guide.short_description}</div>
      </div>
    `

    guidesGrid.appendChild(guideCard)
  })
}

// Render tour operators
function renderOperators() {
  const operatorsGrid = document.getElementById("operators-grid")

  operatorsData.forEach((operator) => {
    const operatorCard = document.createElement("div")
    operatorCard.className = "operator-card"

    const linkHTML = operator.link
      ? `<a href="${operator.link}" target="_blank" rel="noopener noreferrer" class="operator-link">
           Веб-сайтқа өту →
         </a>`
      : ""

    operatorCard.innerHTML = `
      <div class="operator-header">
        <div class="operator-icon">🚐</div>
        <div class="operator-title-section">
          <div class="operator-title">${operator.title}</div>
          <div class="operator-type">${operator.type}</div>
        </div>
      </div>
      <div class="operator-details">
        <div class="operator-detail-item">
          <span class="operator-detail-icon">📍</span>
          <span class="operator-detail-text">${operator.address}</span>
        </div>
        <div class="operator-detail-item">
          <span class="operator-detail-icon">🗺️</span>
          <span class="operator-detail-text"><strong>Маршрут:</strong> ${operator.route}</span>
        </div>
        <div class="operator-detail-item">
          <span class="operator-detail-icon">⏱️</span>
          <span class="operator-detail-text"><strong>Ұзақтығы:</strong> ${operator.duration}</span>
        </div>
        <div class="operator-detail-item">
          <span class="operator-detail-icon">📞</span>
          <span class="operator-detail-text">
            <a href="tel:${operator.phone}" class="operator-phone-link">${operator.phone}</a>
          </span>
        </div>
      </div>
      ${linkHTML}
    `

    operatorsGrid.appendChild(operatorCard)
  })
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  renderGuides()
  renderOperators()
})
