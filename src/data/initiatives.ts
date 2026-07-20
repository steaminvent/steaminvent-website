// src/data/initiatives.ts

export interface Initiative {
  id: string;
  title: string;
  description: string;
  iconPath: string;
}

export const initiatives: Initiative[] = [
  {
    id: "talent-support",
    title: "Mentorski rad i podrška talentima",
    description: "Za sve naše članove organizujemo obuke, dopunsku i naprednu nastavu iz raznih oblasti, pripreme talentovanih učenika za takmičenja i sistemsko akademsko usmeravanje srednjoškolaca ka tehničkim fakultetima.",
    iconPath: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" // Zvezda
  },
  {
    id: "business-cooperation",
    title: "Saradnja sa lokalnom privredom",
    description: "Kreiramo namenske B2B obuke za zaposlene u privredi. Kreiramo radionice iz domena IT, elektronike, elektrotehnike, energetike, automatike, dizajna i drugih oblasti.",
    iconPath: "M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16M12 11h.01M12 15h.01M8 11h.01M8 15h.01M16 11h.01M16 15h.01" // Zgrada
  },
  {
    id: "community-events",
    title: "Naučne konferencije i događaji",
    description: "Pokrećemo i organizujemo lokalne IT događaje, stručne hakatone i naučne konferencije, sa primarnim ciljem dugoročne promocije STEAM disciplina i umrežavanja mladih inovatora i inženjera.",
    iconPath: "M17 22v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M16 5.13a4 4 0 0 1 0 7.75M23 22v-2a4 4 0 0 0-3-3.87M12 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
  }
];