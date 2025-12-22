const places = [
  {
    id: "bozhyra",
    name: "Бозжыра",
    description: "Шөлді далада созылған драмалық ақ жарлар мен басқа дүниелік жартас құрылымдары бар кең бор төбешігі.",
    image: "/mangistau-map/public/bozhyra.png",
    url: "https://maps.app.goo.gl/vK8ayGY1HAe3dr7x8",
  },
  {
    id: "tuzbair",
    name: "Түзбайыр тұз алқабы",
    description: "Ақ жер шексіз көк аспанмен кездесетін, айна тәрізді сюрреалистік пейзаж жасайтын кең тұз шөлі.",
    image: "/mangistau-map/public/tuzbair.png",
    url: "https://maps.app.goo.gl/gEnghG44DjZy5VLV6",
  },
  {
    id: "airakty-zhygylan",
    name: "Айрақты-Шығылған",
    description:
      "Шөл еденінен көтерілген керемет табиғи сәулетке жел мен уақыт бойынша мүсінделген ежелгі әктас құрылымдары.",
    image: "/mangistau-map/public/airaqty.png",
    url: "https://maps.app.goo.gl/HFBT2jpUkMqz45Fg7",
  },
  {
    id: "karakiya",
    name: "Қаракия ойпаты",
    description:
      "Жер теңіз деңгейінен төмен түсетін, керемет тау қабаттарында ежелгі теңіз тарихының қабаттарын көрсететін геологиялық ғажайып.",
    image: "/mangistau-map/public/kakakia.png",
    url: "https://maps.app.goo.gl/755FmBsDUGXpvta88",
  },
  {
    id: "sherkala",
    name: "Шерқала тауы",
    description: "Киіз үй пішіндес таңбалы тау оқшауланып тұр, ғасырлар бойы саяхатшыларды бағыттаған қасиетті белгі.",
    image: "/mangistau-map/public/sherkala.png",
    url: "https://maps.app.goo.gl/aFaa1xhpM76TA6V28",
  },
  {
    id: "otpan-tau",
    name: "Отпан Тау",
    description:
      "Қоршаған Маңғыстау пейзажының панорамалық көрінісін ұсынатын жалпақ үстелі және тік қабырғалары бар салтанатты үстел таулары.",
    image: "/mangistau-map/public/otpan-tau.png",
    url: "https://maps.app.goo.gl/p3hM9VnxQPNgRJvz6",
  },
  {
    id: "karamsay",
    name: "Қарамсай шатқалы",
    description:
      "Ақ әктас арқылы ойылған жасырын шатқал жүйесі, күн сәулесінде жарқырайтын тар өткелдер мен биік қабырғалар бар.",
    image: "/mangistau-map/public/karamsay.png",
    url: "https://maps.app.goo.gl/8r11Qmsqe3CoB7wV8",
  },
  {
    id: "torysh",
    name: "Торыш – Доптар алқабы",
    description:
      "Алқап бойына шашыраған алып тас сфералардың ерекше алқабы, олардың әрқайсысы миллиондаған жылдар бойына жасалған геологиялық жұмбақ.",
    image: "/mangistau-map/public/torysh.png",
    url: "https://maps.app.goo.gl/V64ZhgEakmYtRBe69",
  },
  {
    id: "tupkaragan",
    name: "Түпқараған түбегі",
    description: "Каспий теңізіне созылған алыс түбек, мұнда шөл драмалық жағалық пейзажда су кездеседі.",
    image: "/mangistau-map/public/tupkaragan.png",
    url: "https://maps.app.goo.gl/rZFV8b6NqxYpYzSr7",
  },
]

const feed = document.getElementById("feed")

places.forEach((place, index) => {
  const slide = document.createElement("section")
  slide.className = "slide"
  slide.style.backgroundImage = `url(${place.image})`

  slide.innerHTML = `
      <div class="overlay">
        <div class="title">${place.name}</div>
        <div class="description">${place.description}</div>
        <a class="explore-btn" href="${place.url}" target="_blank">
          Орынды зерттеу →
        </a>
      </div>
      ${
        index === 0
          ? `
      <div class="scroll-indicator">
        <span class="scroll-text">Айналдыру</span>
        <div class="scroll-arrow"></div>
      </div>
      `
          : ""
      }
    `

  feed.appendChild(slide)
})
