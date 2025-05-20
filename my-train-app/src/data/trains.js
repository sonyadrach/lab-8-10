const trains = [
  {
    id: 1,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/HRCS2-004_%D0%B8_002_%D0%BD%D0%B0_%D1%81%D1%82%D0%B0%D0%BD%D1%86%D0%B8%D0%B8_%D0%9A%D0%B8%D0%B5%D0%B2_%D0%9F%D0%B0%D1%81%D1%81%D0%B0%D0%B6%D0%B8%D1%80%D1%81%D0%BA%D0%B8%D0%B9.jpg/1920px-HRCS2-004_%D0%B8_002_%D0%BD%D0%B0_%D1%81%D1%82%D0%B0%D0%BD%D1%86%D0%B8%D0%B8_%D0%9A%D0%B8%D0%B5%D0%B2_%D0%9F%D0%B0%D1%81%D1%81%D0%B0%D0%B6%D0%B8%D1%80%D1%81%D0%BA%D0%B8%D0%B9.jpg",
    name: "Інтерсіті Київ - Львів",
    description: "Швидкісний потяг з комфортними вагонами.",
    type: "Пасажирський",
    departureTime: "2025-05-21T08:00",
    arrivalTime: "2025-05-21T14:00",
    coaches: [
      { coachId: "A", seats: 20 },
      { coachId: "B", seats: 20 }
    ]
  },
  {
    id: 2,
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/%D0%A7%D0%A17-171%2C_%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0%2C_%D0%97%D0%B0%D0%BF%D0%BE%D1%80%D0%BE%D0%B6%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%2C_%D1%81%D1%82%D0%B0%D0%BD%D1%86%D0%B8%D1%8F_%D0%97%D0%B0%D0%BF%D0%BE%D1%80%D0%BE%D0%B6%D1%8C%D0%B5-I_%28Trainpix_84003%29.jpg",
    name: "Львів - Запоріжжя",
    description: "Потяг з нічним курсом та спальними вагонами.",
    type: "Купейний",
    departureTime: "2025-05-21T21:00",
    arrivalTime: "2025-06-21T12:08",
    coaches: [
      { coachId: "C", seats: 15 },
      { coachId: "D", seats: 15 }
    ]
  },
  {
    id: 3,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/%D0%A5%D0%B0%D1%80%D0%BA%D1%96%D0%B2._%D0%92%D0%BE%D0%BA%D0%B7%D0%B0%D0%BB_%D0%9F%D1%96%D0%B2%D0%B4%D0%B5%D0%BD%D0%BD%D0%BE%D1%97_%D0%B7%D0%B0%D0%BB%D1%96%D0%B7%D0%BD%D0%B8%D1%86%D1%96_-1.jpg/2560px-%D0%A5%D0%B0%D1%80%D0%BA%D1%96%D0%B2._%D0%92%D0%BE%D0%BA%D0%B7%D0%B0%D0%BB_%D0%9F%D1%96%D0%B2%D0%B4%D0%B5%D0%BD%D0%BD%D0%BE%D1%97_%D0%B7%D0%B0%D0%BB%D1%96%D0%B7%D0%BD%D0%B8%D1%86%D1%96_-1.jpg",
    name: "Львів - Харків",
    description: "Потяг з нічним курсом та спальними вагонами.",
    type: "Купейний",
    departureTime: "2025-05-21T20:30",
    arrivalTime: "2025-05-21T10:20",
    coaches: [
      { coachId: "E", seats: 15 },
      { coachId: "F", seats: 15 }
    ]
  },
  {
    id: 4,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Railway-station-Khmelnytskyi-17.jpg/2560px-Railway-station-Khmelnytskyi-17.jpg",
    name: "Подільський експрес: Хмельницький - Київ",
    description: "Потяг з сидячими місцями.",
    type: "Пасажирський",
    departureTime: "2025-05-21T14:04",
    arrivalTime: "2025-05-21T20:28",
    coaches: [
      { coachId: "G", seats: 25 },
      { coachId: "H", seats: 25 }
    ]
  }
];

export default trains;