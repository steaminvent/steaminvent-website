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
    id: 'radionica-robotika-1',
    title: 'Održana radionica ugradnih sistema i automatizacije',
    excerpt: 'Uspešno je realizovana naša prva otvorena radionica gde su polaznici imali priliku da praktično sklapaju i programiraju pametne uređaje.',
    content: 'Prva otvorena radionica udruženja okupila je entuzijastične polaznike spremne za rad na realnom hardveru. Kroz praktičnu primenu mikrokontrolera, senzora i jednostavnih aktuatora, učesnici su savladali osnove algoritamskog razmišljanja i napravili prve funkcionalne projekte u svetu automatizacije.',
    date: '2026-07-15',
    category: 'Radionica',
    image: '/images/activities/robotics-workshop.jpg',
    slug: 'odrzana-radionica-ugradnih-sistema-i-automatizacije'
  },
  {
    id: 'prijem-novih-clanova-jesen',
    title: 'Otvorene prijave za prijem novih članova i jesenji ciklus radionica',
    excerpt: 'STEAM INVENT zvanično poziva sve zainteresovane da se priključe udruženju i obezbede mesto u novom ciklusu praktičnih radionica.',
    content: 'Sa ponosom najavljujemo otvaranje prijava za novi ciklus radionica! Zbog rada u malim mentorskim grupama i rada na namenskoj opremi, broj mesta po grupama je ograničen. Obrazovni programi obuhvataju primenjeno programiranje (C/C#), rad sa mikrokontrolerima (ESP32/Arduino) i osnove elektronike.',
    date: '2026-07-10',
    category: 'Obaveštenje',
    image: '/images/activities/upis-jesen.jpg',
    slug: 'otvorene-prijave-za-prijem-novih-clanova'
  },
  {
    id: 'steam-invent-osnivanje',
    title: 'Zvanično osnovano udruženje građana STEAM INVENT',
    excerpt: 'Pokrenuta je nova inženjerska inicijativa sa ciljem popularizacije STEAM disciplina, robotike i primenjenog programiranja.',
    content: 'Udruženje STEAM INVENT zvanično je registrovano sa jasnim ciljem: da stvori stabilno okruženje za praktičnu primenu tehnoloških znanja i razvoj inovativnih projekata u Sremskoj Mitrovici. Naš tim stručnjaka spreman je da kroz radionice, predavanja i rad na realnim projektima pruži polaznicima veštine neophodne za moderno inženjersko okruženje.',
    date: '2026-07-01',
    category: 'Inicijativa',
    image: '/images/activities/osnivanje-udruzenja.jpg',
    slug: 'zvanicno-osnovano-udruzenje-steam-invent'
  }
];