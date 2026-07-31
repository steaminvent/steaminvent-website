// src/data/courses.ts

export interface Course {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  difficulty: string;     
  duration: string;       
  category: string;       
  technologies: string[];
  image: string;
  featured: boolean;
}

export const courses: Course[] = [
  {
    slug: "razvoj-logike-kroz-igru-scratch",
    title: "Razvoj Logike kroz Scratch",
    subtitle: "Kreiranje igara i animacija kroz algoritamski kod",
    description: "Učimo koncepte programiranja bez kucanja koda. Slažući šarene blokove koda, polaznici savladavaju osnovne koncepte programiranja kao što su promenljive, uslovi i petlje. Razvijaju logičko razmišljanje dizajnirajući sopstvene priče, animacije i video igre.",
    difficulty: "Početni nivo",
    duration: "3 meseca (24 časa)",
    category: "Vizuelno programiranje",
    technologies: ["Scratch", "Blockly", "Algoritmi"],
    image: "/images/course-scratch.png",
    featured: true
  },
  {
    slug: "lego-robotika-i-programiranje",
    title: "Lego Robotika & Programiranje",
    subtitle: "Uvod u mehaniku i logiku kroz sklapanje i igru",
    description: "Savršen uvod za ulazak u svet inženjerstva. Kroz sklapanje Lego kompleta, korišćenje motora i senzora, učimo kako fizički objekti oživljavaju uz pomoć jednostavnih vizuelnih komandi.",
    difficulty: "Početni nivo",
    duration: "3 meseca (24 časa)",
    category: "Vizuelno programiranje",
    technologies: ["Lego Education", "Senzori", "Mehanika"],
    image: "/images/course-lego.png",
    featured: true
  },
  {
    slug: "prakticna-elektronika-i-3d-stampa",
    title: "Elektronika & 3D Štampa",
    subtitle: "Od električnih šema do opipljivih fizičkih uređaja",
    description: "Upoznajte bazične elektronske komponente, naučite bezbedno lemljenje i korišćenje multimetra. Paralelno savladavamo osnove 3D modelovanja i rad sa 3D štampačima.",
    difficulty: "Srednji nivo",
    duration: "3 meseca (24 časa)",
    category: "Elektronika & IoT",
    technologies: ["Lemljenje", "Multimetar", "3D Modelovanje", "3D Štampa"],
    image: "/images/course-electronics.png",
    featured: false
  },
  {
    slug: "arduino-robotika-i-iot",
    title: "Arduino Robotika & Pametni IoT Sistemi",
    subtitle: "Programiranje mikrokontrolera i kreiranje pametnih uređaja",
    description: "Ulazak u svet Interneta Stvari (IoT). Naučite kako da programirate Arduino i ESP32, povežete senzore koji čitaju podatke iz okruženja, upravljate aktuatorima i bežično šaljete informacije putem interneta.",
    difficulty: "Srednji nivo",
    duration: "4 meseca (32 časa)",
    category: "Elektronika & IoT",
    technologies: ["Arduino", "C++", "ESP32", "Senzori & Aktuatori"],
    image: "/images/course-arduino.png",
    featured: true
  },
  {
    slug: "uvod-u-kodiranje-python-i-web",
    title: "Uvod u Kodiranje: Python & Web",
    subtitle: "Prvi koraci u profesionalnom tekstualnom programiranju",
    description: "Prelazak sa vizuelnog na kucani kod. Kroz Python učimo rešavanje logičkih problema, dok kroz HTML, CSS i osnove JavaScript-a gradimo prve moderne veb stranice.",
    difficulty: "Srednji nivo",
    duration: "4 meseca (32 časa)",
    category: "Softversko inženjerstvo",
    technologies: ["Python", "HTML5", "CSS3", "JavaScript"],
    image: "/images/course-python.png",
    featured: false
  },
  {
    slug: "objektno-orijentisano-programiranje-csharp",
    title: "Razvoj Aplikacija: C# & .NET",
    subtitle: "Savladajte objektno-orijentisano programiranje",
    description: "Program je fokusiran na razvoj stabilnih konzolnih i desktop aplikacija. Učimo strukturu C# jezika, rad sa klasama, objektima, interfejsima i arhitekturom savremenog softvera.",
    difficulty: "Napredni nivo",
    duration: "4 meseca (32 časa)",
    category: "Softversko inženjerstvo",
    technologies: ["C#", ".NET", "OOP", "Desktop Apps"],
    image: "/images/course-csharp.png",
    featured: true
  },
  {
    slug: "sql-baze-podataka-i-modelovanje",
    title: "SQL Baze Podataka & Modelovanje",
    subtitle: "Projektovanje, kreiranje i upravljanje podacima",
    description: "Naučite kako funkcioniše srce svakog softverskog sistema – baza podataka. Savladajte modelovanje podataka, postavljanje relacija i pisanje kompleksnih SQL upita za manipulaciju podacima.",
    difficulty: "Napredni nivo",
    duration: "3 meseca (24 časa)",
    category: "Softversko inženjerstvo",
    technologies: ["SQL", "Relacione Baze", "Modelovanje podataka", "Upiti"],
    image: "/images/course-sql.png",
    featured: false
  },
  {
    slug: "qa-testiranje-softvera",
    title: "QA Testiranje Softvera",
    subtitle: "Kontrola kvaliteta i metodologije pronalaženja grešaka",
    description: "Uđite u svet QA inženjeringa. Naučite kako da detaljno analizirate softver, pišete test slučajeve (Test Cases), otkrivate bagove i osigurate da aplikacija radi savršeno pre puštanja u rad.",
    difficulty: "Srednji nivo",
    duration: "3 meseca (24 časa)",
    category: "Softversko inženjerstvo",
    technologies: ["QA", "Manual Testing", "Test Cases", "Bug Tracking"],
    image: "/images/course-qa.png",
    featured: false
  },
  {
    slug: "vestacka-inteligencija-ai-i-razvoj-softvera",
    title: "Veštačka Inteligencija (AI) & Razvoj",
    subtitle: "Budućnost softvera kroz neuronske mreže i AI alate",
    description: "Najtraženija oblast današnjice. Učimo teorijske osnove mašinskog učenja i neuronskih mreža, i kako praktično iskoristiti napredne AI asistente u svakodnevnom pisanju koda i optimizaciji softvera.",
    difficulty: "Napredni nivo",
    duration: "4 meseca (32 časa)",
    category: "Softversko inženjerstvo",
    technologies: ["AI alati", "Neuronska mreža", "Prompt Eng.", "Machine Learning"],
    image: "/images/course-ai.png",
    featured: true
  }
];