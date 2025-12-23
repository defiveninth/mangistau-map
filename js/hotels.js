const hotelsData = [
  {
    "id": 22,
    "title": "All Seasons",
    "location": "Актау, микрорайон 7А, 24/22",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-1.webp",
    "title_ru": "Отель"
  },
  {
    "id": 4,
    "title": "CASPIAN RIVIERA GRAND PALACE",
    "location": "Актау, 4-й А микрорайон, 39",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-2.jpg",
    "title_ru": "Отель"
  },
  {
    "id": 41,
    "title": "Dostyk Business Hotel",
    "location": "8-й микрорайон, 3/1",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-3.jpg",
    "title_ru": "Отель"
  },
  {
    "id": 15,
    "title": "Golden Palace Hotel",
    "location": "Актау, 6-й микрорайон, 40А",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-4.webp",
    "title_ru": "Отель"
  },
  {
    "id": 20,
    "title": "Grand Nur Plaza",
    "location": "Мангистауская область, Актау, микрорайон 29А",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-5.jpg",
    "title_ru": "Отель"
  },
  {
    "id": 3,
    "title": "Grand Victory",
    "location": "13 мкр., 25а",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-6.webp",
    "title_ru": "Отель"
  },
  {
    "id": 5,
    "title": "Holiday Inn",
    "location": "4 микрорайон, здание 73",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-7.webp",
    "title_ru": "Отель"
  },
  {
    "id": 35,
    "title": "Holiday Inn Aktau-Seaside",
    "location": "15-й микрорайон",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-8.webp",
    "title_ru": "Отель"
  },
  {
    "id": 33,
    "title": "HOTEL TARLAN",
    "location": "Актау, 29-й микрорайон, 226",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-9.jpg",
    "title_ru": "Отель"
  },
  {
    "id": 1,
    "title": "Renaissance",
    "location": "Мангистауская область, г. Актау, 9 мкр 4 дом",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-10.webp",
    "title_ru": "Отель"
  },
  {
    "id": 2,
    "title": "Rixos Water World Aktau",
    "location": "г. Актау, Теплый пляж",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-11.png",
    "title_ru": "Отель"
  },
  {
    "id": 40,
    "title": "Rusel Hotel",
    "location": "Актау, микрорайон 7А, 21",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-12.webp",
    "title_ru": "Отель"
  },
  {
    "id": 39,
    "title": "Shygys",
    "location": "Актау, квартал Шыгыс-1, 33",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-13.webp",
    "title_ru": "Хостел"
  },
  {
    "id": 18,
    "title": "Silk Way",
    "location": "3 микрорайон. здание. № 214",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-14.webp",
    "title_ru": "Отель"
  },
  {
    "id": 37,
    "title": "Tas Samaly Hotel",
    "location": "Актау, микрорайон Самал, 6/1",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-15.webp",
    "title_ru": "Отель"
  },
  {
    "id": 36,
    "title": "Tree Of Life",
    "location": "база отдыха Теплый пляж, участок 52",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-16.jpg",
    "title_ru": "База отдыха"
  },
  {
    "id": 7,
    "title": "Victoria Hotel",
    "location": "Актау, 15-й микрорайон, 4В",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-17.webp",
    "title_ru": "Отель"
  },
  {
    "id": 26,
    "title": "ZHANA OTEL",
    "location": "Актау, 4-й микрорайон, 84",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-18.webp",
    "title_ru": "Отель"
  },
  {
    "id": 78,
    "title": "Автокомплекс «Сәтті»",
    "location": "село Шетпе, микрорайон Ащыбулак 2, здание 1/2",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-19.jpg",
    "title_ru": "База отдыха"
  },
  {
    "id": 48,
    "title": "База отдыха «Sunset»",
    "location": "база отдыха Теплый пляж, участок 24",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-20.jpg",
    "title_ru": "База отдыха"
  },
  {
    "id": 49,
    "title": "База отдыха «Бриз»",
    "location": "база отдыха Теплый пляж, участок 5",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-21.jpg",
    "title_ru": "База отдыха"
  },
  {
    "id": 53,
    "title": "База отдыха «Комарово»",
    "location": "базы отдыха «Теплый пляж», 20 км от Актау",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-22.jpg",
    "title_ru": "База отдыха"
  },
  {
    "id": 50,
    "title": "База отдыха «Серебряные пески»",
    "location": "база отдыха Теплый пляж, участок 20",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-23.jpg",
    "title_ru": "База отдыха"
  },
  {
    "id": 13,
    "title": "Гостиница  «Stigl»",
    "location": "Актау,  Теплый Пляж",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-24.jpg",
    "title_ru": "База отдыха"
  },
  {
    "id": 9,
    "title": "Гостиница  «Актау»",
    "location": "Актау, 2-й микрорайон, 66",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-25.webp",
    "title_ru": "Отель"
  },
  {
    "id": 12,
    "title": "Гостиница  «Рахат»",
    "location": "Актау, жилой массив Приморский, 1",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-26.webp",
    "title_ru": "Отель"
  },
  {
    "id": 23,
    "title": "Гостиница  «Три Дельфина»",
    "location": "9-й микрорайон, 8А",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-27.webp",
    "title_ru": "Отель"
  },
  {
    "id": 11,
    "title": "Гостиница  «ШАМС»",
    "location": "Актау, 2-й микрорайон",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-28.webp",
    "title_ru": "Отель"
  },
  {
    "id": 84,
    "title": "Гостиница «Sulo Bautino»",
    "location": "Баутино, ул.Мунайши  8",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-30.png",
    "title_ru": "Хостел"
  },
  {
    "id": 73,
    "title": "Гостиница «Акнур»",
    "location": "Бейнеу, улица Косай-Ата 9а",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-31.jpg",
    "title_ru": "Хостел"
  },
  {
    "id": 62,
    "title": "Гостиница «Аксарай»",
    "location": "Жанаозен, микрорайон 3а старый автовокзал",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-32.webp",
    "title_ru": "Отель"
  },
  {
    "id": 85,
    "title": "Гостиница «Аққу»",
    "location": "Форт Шевченко, коттеджный городок  Акку",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-33.jpg",
    "title_ru": "Отель"
  },
  {
    "id": 10,
    "title": "Гостиница «Алматы (Коктем)»",
    "location": "Актау, 14-й микрорайон, 10",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-34.webp",
    "title_ru": "Отель"
  },
  {
    "id": 34,
    "title": "Гостиница «Анталия»",
    "location": "микрорайон 3Б, 1",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-36.webp",
    "title_ru": "Хостел"
  },
  {
    "id": 69,
    "title": "Гостиница «Арай»",
    "location": "Бейнеу, Бейнеуский район, улица Бейбарыс 124",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-37.jpg",
    "title_ru": "Хостел"
  },
  {
    "id": 29,
    "title": "Гостиница «Арман»",
    "location": "Актау, квартал Шыгыс-3, 1/2",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-38.webp",
    "title_ru": "Отель"
  },
  {
    "id": 70,
    "title": "Гостиница «Арна»",
    "location": "Бейнеу, улица Торемурат 3",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-39.jpg",
    "title_ru": "Хостел"
  },
  {
    "id": 43,
    "title": "Гостиница «Әлем-Т»",
    "location": "21 микрорайон, здание 6",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-40.webp",
    "title_ru": "Хостел"
  },
  {
    "id": 64,
    "title": "Гостиница «Бастау»",
    "location": "Жанаозен, микрорайон \"Оркен\", строение 8",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-41.webp",
    "title_ru": "Отель"
  },
  {
    "id": 74,
    "title": "Гостиница «Бейнеу»",
    "location": "Бейнеу, улица Косай-Ата 9а",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-42.webp",
    "title_ru": "Хостел"
  },
  {
    "id": 14,
    "title": "Гостиница «Гулдана»",
    "location": "Актау, микрорайон 3Б, 2",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-43.webp",
    "title_ru": "Отель"
  },
  {
    "id": 17,
    "title": "Гостиница «Достар»",
    "location": "микрорайон 1 Достар-пляж",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-44.webp",
    "title_ru": "Отель"
  },
  {
    "id": 19,
    "title": "Гостиница «Достык»",
    "location": "23-й микрорайон, 38/28",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-45.webp",
    "title_ru": "Отель"
  },
  {
    "id": 81,
    "title": "Гостиница «Достык»",
    "location": "Баутино, ул. Мунайші 21",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-46.jpg",
    "title_ru": "Хостел"
  },
  {
    "id": 27,
    "title": "Гостиница «Душа»",
    "location": "Актау, 5-й микрорайон, 14/1",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-47.webp",
    "title_ru": "Отель"
  },
  {
    "id": 28,
    "title": "Гостиница «Жануя»",
    "location": "мкр. Шыгыс дом 2, здание 26",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-48.jpg",
    "title_ru": "Отель"
  },
  {
    "id": 6,
    "title": "Гостиница «Жеруйык»",
    "location": "Актау, микрорайон 3А, 15",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-49.jpg",
    "title_ru": "Отель"
  },
  {
    "id": 68,
    "title": "Гостиница «Жибек жолы»",
    "location": "Бейнеу, улица Косай-Ата 38б",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-50.png",
    "title_ru": "Хостел"
  },
  {
    "id": 8,
    "title": "Гостиница «Зеленая»",
    "location": "Актау, 3-й микрорайон, 211",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-51.jpg",
    "title_ru": "Отель"
  },
  {
    "id": 24,
    "title": "Гостиница «Мандарин»",
    "location": "Актау, 2-й микрорайон, 17А",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-55.webp",
    "title_ru": "Отель"
  },
  {
    "id": 89,
    "title": "Гостиница «Мерей»",
    "location": "село Мангистау, 16 квартал, 12 участок",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-56.webp",
    "title_ru": "Хостел"
  },
  {
    "id": 32,
    "title": "Гостиница «Мирамар»",
    "location": "жилой массив \"Приморский\", улица Жемчужная 5",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-57.webp",
    "title_ru": "Хостел"
  },
  {
    "id": 71,
    "title": "Гостиница «Нур»",
    "location": "Бейнеу, улица М Бегенова 6а",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-58.jpg",
    "title_ru": "Отель"
  },
  {
    "id": 86,
    "title": "Гостиница «Оазис»",
    "location": "Баутино, ул. Мунайши 44",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-60.jpg",
    "title_ru": "Хостел"
  },
  {
    "id": 58,
    "title": "Гостиница «Орда»",
    "location": "Жанаозен, просп. Насипкали Марабаева, 35Б",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-62.webp",
    "title_ru": "Хостел"
  },
  {
    "id": 25,
    "title": "Гостиница «Приморский»",
    "location": "Актау, жилой массив Приморский, 7",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-63.webp",
    "title_ru": "Отель"
  },
  {
    "id": 65,
    "title": "Гостиница «РАХАТ»",
    "location": "Жанаозен, промзона № 3,  6 строение",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-64.webp",
    "title_ru": "Отель"
  },
  {
    "id": 21,
    "title": "Гостиница «Салем»",
    "location": "Актау, 1-й микрорайон, 1/19",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-65.webp",
    "title_ru": "Отель"
  },
  {
    "id": 66,
    "title": "Гостиница «Сұлу»",
    "location": "Жанаозен, трасса Актау-Жанаозен 59/1",
    "price": "-",
    "image": "/hotel-images/hotel-66.jpg",
    "title_ru": "Хостел"
  },
  {
    "id": 31,
    "title": "Гостиница «Талисман»",
    "location": "3-й микрорайон, 161",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-67.webp",
    "title_ru": "Отель"
  },
  {
    "id": 60,
    "title": "Гостиница «Темирказык»",
    "location": "Жанаозен, микрорайон Шанырак",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-68.webp",
    "title_ru": "Отель"
  },
  {
    "id": 30,
    "title": "Гостиница «Тумарым»",
    "location": "Актау, 2 микрорайон 66/2",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-71.webp",
    "title_ru": "Отель"
  },
  {
    "id": 16,
    "title": "Гостиница «Шагала»",
    "location": "Актау, микрорайон 1Б, 1",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-73.webp",
    "title_ru": "Отель"
  },
  {
    "id": 87,
    "title": "Гостиница «Шагала»",
    "location": "Баутино, ул. Мунайши 15",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-74.jpg",
    "title_ru": "Хостел"
  },
  {
    "id": 61,
    "title": "Гостиница «Шеркала»",
    "location": "Жанаозен, микрорайон Оркен, 66",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-75.webp",
    "title_ru": "Отель"
  },
  {
    "id": 42,
    "title": "Гостиница в ТЦ «Олжа»",
    "location": "микрорайон 30, здание 163,  1 этаж",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-76.webp",
    "title_ru": "Хостел"
  },
  {
    "id": 54,
    "title": "Детский лагерь «Алау»",
    "location": "база отдыха Теплый пляж",
    "price": "-",
    "image": "/hotel-images/hotel-78.jpg",
    "title_ru": "База отдыха"
  },
  {
    "id": 55,
    "title": "Детский лагерь «Балдаурен»",
    "location": "база отдыха Теплый пляж, участок 88",
    "price": "-",
    "image": "/hotel-images/hotel-79.jpg",
    "title_ru": "База отдыха"
  },
  {
    "id": 56,
    "title": "Детский лагерь «Фламинго»",
    "location": "зона отдыха Золотые пески",
    "price": "-",
    "image": "/hotel-images/hotel-80.jpg",
    "title_ru": "База отдыха"
  },
  {
    "id": 76,
    "title": "Курортная зона «Кендерли»",
    "location": "Жанаозен, ул. Сатпаева 2 территория Каракиянского района, залив",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-82.png",
    "title_ru": "База отдыха"
  },
  {
    "id": 38,
    "title": "Сaspian Pearl",
    "location": "Актау, 4-й А микрорайон, 19",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-83.webp",
    "title_ru": "Отель"
  },
  {
    "id": 52,
    "title": "Сеть элитных квартир «Trillioner-Aktau»",
    "location": "Актау, 13-й микрорайон, 15",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-85.jpg",
    "title_ru": "Хостел"
  },
  {
    "id": 44,
    "title": "Хостел «Jaqsy»",
    "location": "Актау, 22-й микрорайон, 38",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-86.webp",
    "title_ru": "Хостел"
  },
  {
    "id": 47,
    "title": "Хостел «Kaspi»",
    "location": "Актау, 12 микрорайон 37 дом",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-87.jpg",
    "title_ru": "Хостел"
  },
  {
    "id": 46,
    "title": "Хостел «Домбыра»",
    "location": "Актау, Приморский Улица Жемчужная 1/1",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-88.webp",
    "title_ru": "Хостел"
  },
  {
    "id": 45,
    "title": "Хостел «Хостел»",
    "location": "Актау, 3Б микрорайон, здание 55/3",
    "price": "Бағалар маусымға байланысты өзгеруі мүмкін",
    "image": "/hotel-images/hotel-89.webp",
    "title_ru": "Хостел"
  }
]

function renderHotels() {
  const hotelsGrid = document.getElementById("hotelsGrid")

  if (!hotelsData || hotelsData.length === 0) {
    hotelsGrid.innerHTML = `
      <div class="empty-state">
        <h2>Қонақүйлер табылмады</h2>
        <p>Кейінірек қайта тексеріңіз</p>
      </div>
    `
    return
  }

  hotelsGrid.innerHTML = ""

  hotelsData.forEach((hotel) => {
    const card = document.createElement("a")
    card.className = "hotel-card"
    card.href = `hotel-detail.html?id=${hotel.id}`

    card.innerHTML = `
      <img 
        src="/mangytau-map${hotel.image || "/grand-hotel-exterior.png"}" 
        alt="${hotel.title}"
        class="hotel-image"
      />
      <div class="hotel-info">
        <span class="hotel-category">${hotel.title_ru || "Отель"}</span>
        <h3 class="hotel-title">${hotel.title}</h3>
        <div class="hotel-location">${hotel.location}</div>
        <div class="hotel-price">${hotel.price}</div>
      </div>
    `

    hotelsGrid.appendChild(card)
  })
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", renderHotels)
