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