const publicBase = process.env.NEXT_PUBLIC_BASE_PATH || "";
const mapUrl = "https://yandex.ru/maps/org/kolorist_shapovalova_kseniya/176753126548/";

const service = (name, price = "", description = "") => ({
  name,
  price,
  time: "",
  description,
  url: "",
});

export default {
  basePath: publicBase,
  template: {
    specialty: "hair",
    bookingProvider: "",
    reviewSource: "Яндекс Карты",
  },
  brand: {
    name: "Ксения Шаповалова",
    subtitle: "Колорист и мастер по волосам",
    monogram: "КШ",
  },
  master: {
    name: "Ксения Шаповалова",
    dative: "Ксении Шаповаловой",
    genitive: "Ксении Шаповаловой",
    instrumental: "Ксенией Шаповаловой",
    monogram: "КШ",
    profession: "колорист и мастер по волосам",
    heroTitle: "Ксения Шаповалова",
    heroEmphasis: "колорист и мастер по волосам",
    heroCaption: "Колорист и мастер по волосам",
    imageAlt: "колорист и мастер по волосам",
    heroCopy: "Окрашивание, стрижки и уход за волосами с вниманием к качеству волос и желаемому оттенку.",
    visitMotto: "",
    experienceYears: null,
    experienceAria: "",
    aboutTitle: "Ксения Шаповалова",
    aboutLead: "Ксения Шаповалова — колорист и мастер по волосам в Москве.",
    aboutParagraphs: [
      "Клиенты отмечают сложные окрашивания, работу с блондом, стрижки и бережный подход к состоянию волос.",
      "В работе встречаются Airtouch, бразильское окрашивание, блонд, стрижки и уходовые процедуры."
    ],
    skills: [
      "Сложные окрашивания",
      "Стрижки",
      "Уход за волосами"
    ],
  },
  location: {
    country: "Россия",
    countryCode: "RU",
    city: "Москва",
    metro: "Боровское шоссе",
    cityMetro: "Москва · Боровское шоссе",
    address: "Москва, Боровское шоссе, 18к2",
    mapCardAddress: "Боровское шоссе, 18к2",
    schedule: "пн–пт 09:00–18:00",
    scheduleCapitalized: "Пн–пт 09:00–18:00",
    timeZone: "Europe/Moscow",
    openTime: "",
    closeTime: "",
  },
  contacts: {
    phoneDisplay: "+7 (915) 255-05-18",
    phoneHref: "tel:+79152550518",
    messenger: null,
  },
  links: {
    bookingUrl: "",
    reviewsUrl: "https://yandex.com/maps/org/kolorist_shapovalova_kseniya/176753126548/reviews/",
    mapUrl,
    routeUrl: mapUrl,
    mobileMapEmbedUrl: "about:blank",
    desktopMapEmbedUrl: "about:blank",
    yandexMapHrefMatch: "176753126548",
  },
  reputation: {
    rating: "5.0",
    reviewCount: "57",
  },
  images: {
    logo: "",
    portrait: `${publicBase}/placeholder.svg`,
    about: `${publicBase}/placeholder.svg`,
    favicon: `${publicBase}/placeholder.svg`,
    heroDecoration: `${publicBase}/assets/template/hair-tools.png`,
    beforeAfter: [],
    gallery: [],
  },
  services: {
    groups: [
      {
        id: "cuts",
        label: "Стрижки",
        services: [
          service("Женская стрижка", "3 000 ₽"),
        ],
      },
      {
        id: "color",
        label: "Окрашивание",
        services: [
          service("Сложное окрашивание"),
          service("Окрашивание Airtouch"),
          service("Бразильское окрашивание"),
          service("Окрашивание волос тон в тон"),
          service("Total Blond"),
          service("Омбре / Шатуш / Балаяж"),
        ],
      },
      {
        id: "care",
        label: "Уход",
        services: [
          service("Уход за волосами"),
          service("Счастье для волос"),
        ],
      },
    ],
  },
  i18n: {
    localLocale: "ru",
    locales: [
      { code: "ru", label: "RU" },
      { code: "en", label: "EN" },
    ],
    translations: {
      en: {
        "колорист и мастер по волосам": "colorist and hair stylist",
        "Колорист и мастер по волосам": "Colorist and hair stylist",
        "Окрашивание, стрижки и уход за волосами с вниманием к качеству волос и желаемому оттенку.": "Coloring, haircuts and hair care with attention to hair quality and the desired shade.",
        "Ксения Шаповалова": "Ksenia Shapovalova",
        "Ксения Шаповалова — колорист и мастер по волосам в Москве.": "Ksenia Shapovalova is a colorist and hair stylist in Moscow.",
        "Клиенты отмечают сложные окрашивания, работу с блондом, стрижки и бережный подход к состоянию волос.": "Clients highlight complex coloring, blond work, haircuts and a careful approach to hair condition.",
        "В работе встречаются Airtouch, бразильское окрашивание, блонд, стрижки и уходовые процедуры.": "Her work includes Airtouch, Brazilian coloring, blond services, haircuts and hair care.",
        "Сложные окрашивания": "Complex coloring",
        "Стрижки": "Haircuts",
        "Уход за волосами": "Hair care",
        "Москва": "Moscow",
        "Боровское шоссе": "Borovskoye Shosse",
        "Москва · Боровское шоссе": "Moscow · Borovskoye Shosse",
        "Москва, Боровское шоссе, 18к2": "Moscow, Borovskoye Shosse, 18 bldg. 2",
        "Боровское шоссе, 18к2": "Borovskoye Shosse, 18 bldg. 2",
        "пн–пт 09:00–18:00": "Mon–Fri 09:00–18:00",
        "Пн–пт 09:00–18:00": "Mon–Fri 09:00–18:00",
        "Женская стрижка": "Women's haircut",
        "Окрашивание": "Coloring",
        "Сложное окрашивание": "Complex coloring",
        "Окрашивание Airtouch": "Airtouch coloring",
        "Бразильское окрашивание": "Brazilian coloring",
        "Окрашивание волос тон в тон": "Tone-on-tone coloring",
        "Total Blond": "Total Blond",
        "Омбре / Шатуш / Балаяж": "Ombre / Shatush / Balayage",
        "Уход": "Care",
        "Счастье для волос": "Hair treatment"
      }
    },
  },
  reviews: [
    {
      author: "Юлия Дворянинова · Яндекс Карты",
      text: "Отмечает сложное окрашивание, внимательное отношение к пожеланиям и результат выше ожиданий."
    },
    {
      author: "Дарья Сидорова · Яндекс Карты",
      text: "Довольна окрашиванием Airtouch, укладкой и итоговым результатом."
    },
    {
      author: "Анжелика А. · Яндекс Карты",
      text: "Много лет доверяет Ксении окрашивание и укладки и отмечает стабильный результат."
    }
  ],
  promotions: [],
  amenities: [],
  seo: {
    siteUrl: "https://ichaey.github.io/TAN-0074/",
    title: "Ксения Шаповалова — колорист и мастер по волосам в Москве",
    description: "Окрашивание, стрижки и уход за волосами. Москва, Боровское шоссе, 18к2.",
    keywords: ["Ксения Шаповалова", "колорист Москва", "окрашивание волос", "Боровское шоссе"],
    locale: "ru_RU",
  },
  analytics: {
    yandexMetrikaId: "",
  },
};
