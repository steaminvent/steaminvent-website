export interface Activity {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;       // Format: YYYY-MM-DD zbog lakšeg sortiranja
  category: 'Radionica' | 'Takmičenje' | 'Obaveštenje' | 'Inicijativa';
  image: string;
  slug: string;
}

export const activities: Activity[] = [

  {
    id: 'prijem-novih-clanova-jesen',
    title: 'Otvorene prijave za prijem novih članova i jesenji ciklus radionica',
    excerpt: 'STEAM INVENT zvanično poziva sve zainteresovane da se priključe udruženju i obezbede mesto u novom ciklusu praktičnih radionica koje startuju u oktobru mesecu. ',
    content: 'Sa ponosom najavljujemo otvaranje prijava za novi ciklus radionica! Zbog rada u malim mentorskim grupama i rada na namenskoj opremi, broj mesta po grupama je ograničen. Sve naše radionice i detalje programa možete pronaći na stranici Programi našeg sajta kao i na zvaničnim stranicma društvenih mreža. Ili nas kontaktirati putem telefona i email-a. Ili jednostavno prošetati do našeg sedišta na adresi Kralja Petra I 5/12 u Sremskoj Mitrovici.',
    date: '2026-09-04',
    category: 'Obaveštenje',
    image: '/images/robotics-workshop.png',
    slug: 'otvorene-prijave-za-prijem-novih-clanova'
  },
  {
    id: 'steam-invent-osnivanje',
    title: 'Zvanično osnovano udruženje građana STEAM INVENT',
    excerpt: 'Pokrenuta je nova inženjerska inicijativa sa ciljem popularizacije STEAM disciplina, robotike i primenjenog programiranja.',
    content: 'Udruženje za promociju STEAM disciplina i inovacija "STEAM INVENT" zvanično je registrovano sa jasnim ciljem: da stvori stabilno okruženje za praktičnu primenu tehnoloških znanja i razvoj inovativnih projekata u Sremskoj Mitrovici. Naš tim stručnjaka spreman je da kroz radionice, predavanja i rad na realnim projektima pruži polaznicima veštine neophodne za moderno inženjersko okruženje.',
    date: '2026-08-19',
    category: 'Inicijativa',
    image: '/images/steam-drvo.svg',
    slug: 'zvanicno-osnovano-udruzenje-steam-invent'
  }
];