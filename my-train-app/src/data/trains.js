const trains = [
  {
    id: 1,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Chair_lift%2C_Pohar.jpg/2560px-Chair_lift%2C_Pohar.jpg",
    name: "Бойківський експрес (Інтерсіті Київ - Львів - Славське)",
    description: "Швидкісний потяг з комфортними вагонами.",
    type: "Пасажирський",
    departureTime: "2025-05-25T08:00",
    arrivalTime: "2025-05-26T14:00",
    coaches: [
      { coachId: "A", seats: 54 },
      { coachId: "B", seats: 54 }
    ]
  },
  {
    id: 2,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/%D0%92%D0%BE%D0%B3%D0%BD%D1%96_%D0%BD%D1%96%D1%87%D0%BD%D0%BE%D1%97_%D0%B3%D1%80%D0%B5%D0%B1%D0%BB%D1%96.jpg/1920px-%D0%92%D0%BE%D0%B3%D0%BD%D1%96_%D0%BD%D1%96%D1%87%D0%BD%D0%BE%D1%97_%D0%B3%D1%80%D0%B5%D0%B1%D0%BB%D1%96.jpg",
    name: "Нічний експрес (Ужгород - Запоріжжя)",
    description: "Потяг з нічним курсом та спальними вагонами.",
    type: "Купейний",
    departureTime: "2025-05-24T13:28",
    arrivalTime: "2025-05-25T10:17",
    coaches: [
      { coachId: "C", seats: 24 },
      { coachId: "D", seats: 24 }
    ]
  },
  {
    id: 3,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/%D0%AE%D0%B6%D0%BD%D1%8B%D0%B9_%D0%92%D0%BE%D0%BA%D0%B7%D0%B0%D0%BB%2C_%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2_%285848674054%29.jpg/2560px-%D0%AE%D0%B6%D0%BD%D1%8B%D0%B9_%D0%92%D0%BE%D0%BA%D0%B7%D0%B0%D0%BB%2C_%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2_%285848674054%29.jpg",
    name: "Оберіг (Львів - Харків)",
    description: "Потяг з нічним курсом та спальними вагонами.",
    type: "Купейний",
    departureTime: "2025-05-24T15:30",
    arrivalTime: "2025-05-25T05:56",
    coaches: [
      { coachId: "E", seats: 24 },
      { coachId: "F", seats: 24 }
    ]
  },
  {
    id: 4,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/%D0%9C%D1%96%D1%81%D1%8C%D0%BA%D0%B0_%D1%80%D0%B0%D0%B4%D0%B0._%D0%9D%D1%96%D1%87.jpg/2560px-%D0%9C%D1%96%D1%81%D1%8C%D0%BA%D0%B0_%D1%80%D0%B0%D0%B4%D0%B0._%D0%9D%D1%96%D1%87.jpg",
    name: "Подільський експрес (Хмельницький - Київ)",
    description: "Потяг з сидячими місцями.",
    type: "Пасажирський",
    departureTime: "2025-05-23T14:04",
    arrivalTime: "2025-05-23T20:28",
    coaches: [
      { coachId: "G", seats: 54 },
      { coachId: "H", seats: 54 }
    ]
  },
   {
    id: 5,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/%D0%91%D1%83%D0%B4%D1%96%D0%B2%D0%BB%D1%8F_%D0%B7%D0%B0%D0%BB%D1%96%D0%B7%D0%BD%D0%B8%D1%87%D0%BD%D0%BE%D0%B3%D0%BE_%D0%B2%D0%BE%D0%BA%D0%B7%D0%B0%D0%BB%D1%83_%D0%B2_%D0%B2%D0%B5%D1%87%D0%B5%D1%80%D1%96_%28%D0%9E%D0%B4%D0%B5%D1%81%D0%B0%29.jpg/1920px-%D0%91%D1%83%D0%B4%D1%96%D0%B2%D0%BB%D1%8F_%D0%B7%D0%B0%D0%BB%D1%96%D0%B7%D0%BD%D0%B8%D1%87%D0%BD%D0%BE%D0%B3%D0%BE_%D0%B2%D0%BE%D0%BA%D0%B7%D0%B0%D0%BB%D1%83_%D0%B2_%D0%B2%D0%B5%D1%87%D0%B5%D1%80%D1%96_%28%D0%9E%D0%B4%D0%B5%D1%81%D0%B0%29.jpg",
    name: "Пальміра (Харків - Одеса)",
    description: "Потяг з нічним курсом та спальними вагонами.",
    type: "Купейний",
    departureTime: "2025-05-27T21:50",
    arrivalTime: "2025-05-28T09:19",
    coaches: [
      { coachId: "G", seats: 24 },
      { coachId: "H", seats: 24 }
    ]
  },
  {
    id: 6,
    image: "https://upload.wikimedia.org/wikipedia/uk/c/cb/%D0%A7%D0%B5%D1%80%D0%BA%D0%B0%D1%81%D0%B8_%D0%9C%D1%83%D0%B7%D0%B8%D1%87%D0%BD%D0%B8%D0%B9_%D1%84%D0%BE%D0%BD%D1%82%D0%B0%D0%BD.jpg",
    name: "Столичний експрес (Київ — Черкаси)",
    description: "Потяг з сидячими місцями.",
    type: "Пасажирський",
    departureTime: "2025-05-27T06:28",
    arrivalTime: "2025-05-27T09:07",
    coaches: [
      { coachId: "G", seats: 24 },
      { coachId: "H", seats: 24 }
    ]
  },
];

export default trains;