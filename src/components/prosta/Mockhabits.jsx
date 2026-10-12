// src/data/mockHabits.js

export const mockHabits = [
  {
    id: 1,
    name: "Suv ichish",
    // Aralash holat (Haftaning ba'zi kunlari bajarilgan)
    completedDates: ['2026-10-05', '2026-10-07', '2026-10-08'],
  },
  {
    id: 2,
    name: "Kechqurun 30 bet kitob o'qish va qisqacha xulosa yozib borish",
    // Juda uzun matn holati (Dizayn buziladimi yoki yo'qmi tekshirish uchun)
    completedDates: ['2026-10-09'],
  },
  {
    id: 3,
    name: "Ertalab yugurish",
    // Bo'sh holat (Bu hafta umuman bajarilmagan, massiv bo'sh)
    completedDates: [],
  },
  {
    id: 4,
    name: "Badantarbiya",
    // To'liq bajarilgan holat (Haftaning hamma kuni belgilangan)
    completedDates: [
      '2026-10-05', '2026-10-06', '2026-10-07', '2026-10-08',
      '2026-10-09', '2026-10-10', '2026-10-11'
    ],
  },
  {
    id: 5,
    name: "Til o'rganish",
    // Faqat oxirgi kun (Yakshanba) belgilangan holat (Chetki katak ishlashini tekshirish uchun)
    completedDates: ['2026-10-11'],
  },
  {
    id: 6,
    name: "Oila bilan vaqt o'tkazish",
    // Ko'proq odatlar qo'shib, ekranda Scroll (pastga tushish) ishlashini tekshiramiz
    completedDates: ['2026-10-05', '2026-10-06'],
  },
  {
    id: 7,
    name: "Dasturlash darslarini ko'rish",
    // Scroll ishlayotganini aniq ko'rish uchun yana bitta odat
    completedDates: ['2026-10-10'],
  }
];