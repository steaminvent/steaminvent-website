// src/data/courseModules.ts

export interface ModuleItem {
  week: string;
  title: string;
  description: string;
  skills: string[];
}

export interface CourseCurriculum {
  courseId: string;
  modules: ModuleItem[];
}

export const courseCurriculums: CourseCurriculum[] = [
  {
    courseId: "razvoj-logike-kroz-igru-scratch",
    modules: [
      {
        week: "Nedelje 1-4",
        title: "Osnove programiranja, animacije i digitalno crtanje",
        description: "U prvom mesecu, naši najmlađi članovi se upoznaju sa osnovama algoritamskog razmišljanja i radnim okruženjem. Učimo kako računar razume komande i kako da prenesemo svoje ideje na ekran. Kreiramo prve animacije korišćenjem koordinata, grananja i petlji kao osnovnih koncepata programiranja.",
        skills: ["Algoritamski način razmišljanja", "Koordinate", "If-Then", "Loop", "Animacije", "Digitalno crtanje"]
      },
      {
        week: "Nedelje 5-8",
        title: "Logika video-igara i napredniji interaktivni projekti",
        description: "Drugi mesec donosi pravu akciju! Prelazimo na izradu potpuno funkcionalnih video-igara. Pravimo igru Bekstvo iz lavirinta, gde učimo kako računar prepoznaje zidove (preko detekcije boja) i kako sprečavamo prolazak kroz prepreke. Učimo kako različiti delovi programa komuniciraju međusobno nevidljivim porukama. Kreiramo igricu i lik Goblina koji hvata padajuće slatke krofne i izbegava otrovne. Učimo kako jedan originalni lik može stvoriti stotine svojih kopija na nasumičnim pozicijama, optimizujući rad računara. I to sve kroz igru!",
        skills: ["Promenljive", "Sistem poruka", "Kloniranje objekata", "Praćenje rezultata", "Dizajn", "Video igre"]
      },
      {
        week: "Nedelje 9-12",
        title: "Mehanika, proširena stvarnost (AR) i arhitektura igara",
        description: "U završnom mesecu, polaznici pomeraju granice i prave spektakularne, složene projekte, pripremajući se za ozbiljnije programske jezike. Kreiramo svemirsku igricu gde programiramo projektile i neprijatelje koji međusobno komuniciraju, sudaraju se i brišu iz memorije, uz uvođenje Cooldown mehanizma. Poseban deo kursa posvećujemo korišćenjem web kamere i Video Sensing tehnologije. Pravimo našu verziju Fruit Ninja igre, gde deca pokretima sopstvenog tela u stvarnom svetu seckaju voće na ekranu. I za kraj kreiramo jedan tajni zabavan projekat.",
        skills: ["Augmented Reality / AR", "Video Sensing", "Gravity mechanics"]
      }
    ]
  },
  {
    courseId: "uvod-u-kodiranje-python-i-web",
    modules: [
      {
        week: "Nedelje 1-4",
        title: "Uvod u programiranje i Python sintaksu",
        description: "Postavljanje razvojnog okruženja, rad sa varijablama, osnovnim tipovima podataka i kontrolom toka (if/else uslovi i petlje).",
        skills: ["VS Code", "Sintaksa", "Algoritamski način razmišljanja"]
      },
      {
        week: "Nedelje 5-8",
        title: "Strukture podataka i funkcije",
        description: "Ovladavanje listama, rečnicima i torkama. Pisanje modularnog koda kroz funkcije i rukovanje izuzecima (try/except).",
        skills: ["Liste & Rečnici", "Modularnost", "Debuggovanje"]
      },
      {
        week: "Nedelje 9-12",
        title: "Osnove Web-a: HTML5 & CSS3",
        description: "Prelazak na vizuelni deo. Kreiranje strukture web stranica, stilizovanje pomoću CSS-a i uvod u responzivni dizajn (Flexbox).",
        skills: ["HTML5", "CSS3 Layouts", "UI Dizajn"]
      },
      {
        week: "Nedelje 13-16",
        title: "Povezivanje Pythona sa Web-om (Backend)",
        description: "Izrada prve dinamičke web aplikacije korišćenjem Flask ili FastAPI mikrookvira. Rad sa rutama i slanje podataka.",
        skills: ["Flask/FastAPI", "Backend", "HTTP Protokoli"]
      }
    ]
  },
  {
    courseId: "objektno-orijentisano-programiranje-csharp",
    modules: [
      {
        week: "Nedelje 1-4",
        title: "Osnove C# jezika i konzolne aplikacije",
        description: "Uvod u .NET ekosistem, tipove podataka, operatore i kontrolne strukture kroz razvoj interaktivnih konzolnih programa.",
        skills: [".NET CLI", "C# Sintaksa", "Konzolne aplikacije"]
      },
      {
        week: "Nedelje 5-8",
        title: "Objektno-Orijentisano Programiranje (OOP)",
        description: "Temeljni koncepti OOP-a: kreiranje klasa, instanciranje objekata, enkapsulacija podataka, nasleđivanje i polimorfizam.",
        skills: ["Klase i Objekti", "Konstruktori", "Nasleđivanje"]
      },
      {
        week: "Nedelje 9-12",
        title: "Rad sa podacima i SQL Server",
        description: "Povezivanje C# aplikacija sa relacionim bazama podataka. Pisanje osnovnih SQL upita (CRUD operacije) i korišćenje ADO.NET-a.",
        skills: ["T-SQL", "Baze podataka", "ADO.NET"]
      },
      {
        week: "Nedelje 13-16",
        title: "Razvoj desktop aplikacija (WPF & MVVM)",
        description: "Kreiranje modernih grafičkih interfejsa (GUI) pomoću XAML-a. Implementacija čistog softverskog arhitektonskog šablona MVVM.",
        skills: ["WPF / XAML", "MVVM Šablon", "Data Binding"]
      }
    ]
  }
];