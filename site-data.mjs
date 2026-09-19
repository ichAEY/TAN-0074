const publicBase = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default {
  "basePath": publicBase,
  "template": {
    "specialty": "hair",
    "bookingProvider": "Telegram",
    "reviewSource": "Яндекс Карты"
  },
  "brand": {
    "name": "Ксения Шаповалова",
    "subtitle": "Колорист",
    "monogram": "КШ"
  },
  "master": {
    "name": "Ксения",
    "dative": "Ксении",
    "genitive": "Ксении",
    "instrumental": "Ксенией",
    "monogram": "КШ",
    "profession": "колорист и мастер по волосам",
    "heroTitle": "",
    "heroEmphasis": "эксперт по волосам",
    "heroCaption": "Колорист",
    "imageAlt": "колорист и мастер по волосам",
    "heroCopy": "Стрижки, окрашивание, блонд, уход и укладки с вниманием к состоянию волос, оттенку и вашему образу.",
    "visitMotto": "",
    "experienceYears": null,
    "experienceAria": "",
    "aboutTitle": "Ксения Шаповалова",
    "aboutLead": "Колорист и мастер по волосам в Москве.",
    "aboutParagraphs": [
      "В подтверждённой категории для длинных волос доступны окрашивание в один тон, окрашивание корней и сложное окрашивание.",
      "В окрашивание в один тон и окрашивание корней входят уход и укладка; сложное окрашивание включает осветление в различных техниках."
    ],
    "skills": [
      "Окрашивание волос",
      "Сложные техники окрашивания",
      "Уход и укладка",
      "Пн, Вт, Чт, Пт 10:00–18:00; Ср, Сб, Вс — выходной"
    ]
  },
  "location": {
    "country": "Россия",
    "countryCode": "RU",
    "city": "Москва",
    "metro": "",
    "cityMetro": "Москва",
    "address": "Боровское шоссе, 18, корп. 2, 119633",
    "mapCardAddress": "Боровское шоссе, 18, корп. 2, 119633",
    "schedule": "Пн, Вт, Чт, Пт 10:00–18:00; Ср, Сб, Вс — выходной",
    "scheduleCapitalized": "Пн, Вт, Чт, Пт 10:00–18:00; Ср, Сб, Вс — выходной",
    "timeZone": "Europe/Moscow",
    "openTime": "",
    "closeTime": ""
  },
  "contacts": {
    "phoneDisplay": "+7 (915) 255-05-18",
    "phoneHref": "tel:+79152550518",
    "messenger": {
      "type": "telegram",
      "label": "Telegram",
      "url": "https://t.me/Ksusha_colorist"
    }
  },
  "links": {
    "bookingUrl": "https://t.me/Ksusha_colorist",
    "reviewsUrl": "https://yandex.com/maps/org/kolorist_shapovalova_kseniya/176753126548/reviews/",
    "mapUrl": "https://yandex.ru/maps/org/kolorist_shapovalova_kseniya/176753126548/",
    "routeUrl": "https://yandex.ru/maps/org/kolorist_shapovalova_kseniya/176753126548/",
    "mobileMapEmbedUrl": "about:blank",
    "desktopMapEmbedUrl": "about:blank",
    "yandexMapHrefMatch": "176753126548"
  },
  "reputation": {
    "rating": "5.0",
    "reviewCount": "51"
  },
  "images": {
    "logo": "",
    "portrait": `${publicBase}/placeholder.svg`,
    "about": `${publicBase}/placeholder.svg`,
    "favicon": `${publicBase}/placeholder.svg`,
    "heroDecoration": `${publicBase}/assets/template/hair-tools.png`,
    "beforeAfter": [],
    "gallery": []
  },
  "services": {
    "groups": [
      {
        "id": "long-hair",
        "label": "Длинные (до лопатки)",
        "services": [
          {
            "name": "Окрашивание волос в один тон",
            "price": "7 500 ₽",
            "time": "",
            "description": "В процедуру входит окрашивание в один тон, уход и укладка.",
            "url": ""
          },
          {
            "name": "Окрашивание корней",
            "price": "6 500 ₽",
            "time": "",
            "description": "В процедуру входит окрашивание корней, уход и укладка.",
            "url": ""
          },
          {
            "name": "Сложное окрашивание",
            "price": "15 000 ₽",
            "time": "",
            "description": "Осветление в различных техниках: мелирование, Airtouch, шатуш и другие.",
            "url": ""
          }
        ]
      }
    ]
  },
  "i18n": {
    "localLocale": "ru",
    "locales": [
      {
        "code": "ru",
        "label": "RU"
      },
      {
        "code": "en",
        "label": "EN"
      }
    ],
    "translations": {
      "en": {
        "колорист и мастер по волосам": "colorist and hair stylist",
        "эксперт по волосам": "hair expert",
        "Колорист": "Colorist",
        "Стрижки, окрашивание, блонд, уход и укладки с вниманием к состоянию волос, оттенку и вашему образу.": "Haircuts, coloring, blonding, care and styling with attention to hair condition, tone and your look.",
        "Ксения Шаповалова": "Ksenia Shapovalova",
        "Колорист и мастер по волосам в Москве.": "Colorist and hair stylist in Moscow.",
        "В подтверждённой категории для длинных волос доступны окрашивание в один тон, окрашивание корней и сложное окрашивание.": "The confirmed long-hair category includes single-tone coloring, root coloring and complex coloring.",
        "В окрашивание в один тон и окрашивание корней входят уход и укладка; сложное окрашивание включает осветление в различных техниках.": "Single-tone and root coloring include care and styling; complex coloring includes lightening in multiple techniques.",
        "Окрашивание волос": "Hair coloring",
        "Сложные техники окрашивания": "Complex coloring techniques",
        "Уход и укладка": "Care and styling",
        "Пн, Вт, Чт, Пт 10:00–18:00; Ср, Сб, Вс — выходной": "Mon, Tue, Thu, Fri 10:00–18:00; Wed, Sat, Sun — closed",
        "Россия": "Russia",
        "Москва": "Moscow",
        "Боровское шоссе, 18, корп. 2, 119633": "18 Bldg. 2 Borovskoye Highway, Moscow, 119633",
        "Длинные (до лопатки)": "Long hair (to shoulder blades)",
        "Окрашивание волос в один тон": "Single-tone hair coloring",
        "В процедуру входит окрашивание в один тон, уход и укладка.": "Includes single-tone coloring, care and styling.",
        "Окрашивание корней": "Root coloring",
        "В процедуру входит окрашивание корней, уход и укладка.": "Includes root coloring, care and styling.",
        "Сложное окрашивание": "Complex coloring",
        "Осветление в различных техниках: мелирование, Airtouch, шатуш и другие.": "Lightening in multiple techniques: highlights, Airtouch, shatush and others."
      }
    }
  },
  "reviews": [
    {
      "author": "Юлия Дворянинова",
      "text": "Результат превзошел ожидания!"
    },
    {
      "author": "Наталья Н.",
      "text": "Ксения настоящий профессионал своего дела."
    },
    {
      "author": "Дарья Сидорова",
      "text": "Получила шикарный результат, укладку и супер настроение."
    }
  ],
  "promotions": [],
  "amenities": [],
  "seo": {
    "siteUrl": "https://ichaey.github.io/TAN-0074/",
    "title": "Ксения Шаповалова — колорист и мастер по волосам",
    "description": "Услуги колориста Ксении Шаповаловой в Москве: окрашивание волос, уход и укладка. Запись через Telegram.",
    "keywords": [
      "Ксения Шаповалова",
      "колорист Москва",
      "окрашивание волос Москва",
      "Airtouch Москва"
    ],
    "locale": "ru_RU"
  },
  "analytics": {
    "yandexMetrikaId": ""
  }
};
