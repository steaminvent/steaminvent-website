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
    courseId: "razvoj-logike-kroz-scratch",
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
    courseId: "python-osnovni-nivo",

    modules: [
      {
        week: "Nedelje 1-4",
        title: "Python osnove, podaci i rad sa tekstom",
        description: "U prvom mesecu polaznici prelaze sa vizuelnog programiranja na pravo pisanje koda i upoznaju osnovne principe Python jezika. Uče kako funkcionišu promenljive, različiti tipovi podataka, korisnički unos, aritmetički operatori i formatiranje teksta. Posebnu pažnju posvećujemo radu sa stringovima, indeksiranju i sečenju teksta, kroz praktične zadatke u kojima polaznici od prvih linija koda kreiraju svoje male interaktivne programe.",
        skills: ["Python osnove", "Promenljive i tipovi podataka", "Korisnički unos", "Operatori", "Stringovi", "F-string formatiranje"]
      },
      {
        week: "Nedelje 5-8",
        title: "Logika programa, uslovi i petlje",
        description: "U drugom mesecu polaznici uče kako program donosi odluke i kako se određeni postupci mogu ponavljati. Savladavaju logičke operatore, uslovne strukture i petlje, a zatim sve naučeno povezuju kroz praktične probleme i interaktivne programe. Kroz izradu igre 'Pogodi tajni broj' i simulacije bankomata razvijamo algoritamsko razmišljanje, rešavanje problema i sposobnost povezivanja više programerskih koncepata u jednu funkcionalnu celinu.",
        skills: ["Algoritamsko razmišljanje", "If / Elif / Else", "Boolean logika", "While petlja", "Break i Continue", "Interaktivni programi"]
      },
      {
        week: "Nedelje 9-12",
        title: "Petlje i strukture podataka",
        description: "Treći mesec donosi prelazak sa rada sa pojedinačnim vrednostima na organizaciju i obradu većih količina podataka. Polaznici upoznaju for petlju i funkciju range(), a zatim detaljno rade sa listama, tuple-ima, skupovima i rečnicima. Kroz praktične projekte kao što su liste zadataka, obrada podataka i telefonski imenik uče kako da svoje programe učine korisnijim, organizovanijim i sposobnim da rade sa većim brojem podataka.",
        skills: ["For petlja", "Range()", "Liste", "Tuple i Set", "Dictionary", "Obrada podataka"]
      },
      {
        week: "Nedelje 13-16",
        title: "Funkcije, modularnost i završni projekat",
        description: "U završnom mesecu polaznici uče kako da veće programe podele na manje i pregledne celine pomoću funkcija. Upoznaju parametre, povratne vrednosti, opseg promenljivih i korišćenje ugrađenih Python modula kao što su math, random i string. Stečeno znanje objedinjujemo kroz završni projekat, u kome svaki polaznik samostalno planira i izrađuje svoju konzolnu aplikaciju, testira program, pronalazi i ispravlja greške, a zatim svoj projekat predstavlja pred grupom.",
        skills: ["Funkcije", "Parametri i Return", "Modularnost", "Python moduli", "Debugging", "Završni projekat"]
      }
    ]
  },
  {
    courseId: "python-srednji-nivo",

    modules: [
      {
        week: "Nedelje 1-4",
        title: "Od Python osnova do objektno-orijentisanog programiranja",
        description: "U prvom mesecu polaznici obnavljaju i produbljuju znanje Pythona, a zatim upoznaju potpuno novi način razmišljanja o organizaciji programa. Kroz poređenje proceduralnog i objektno-orijentisanog pristupa uče šta su klase i objekti, kako se modeluju podaci i ponašanje i kako se pomoću atributa, konstruktora i metoda kreiraju sopstveni objekti. Kroz praktične primere polaznici postepeno prelaze sa pisanja pojedinačnih funkcija na projektovanje programa sastavljenih od jasno definisanih objekata.",
        skills: ["Objektno-orijentisano programiranje", "Klase i objekti", "Atributi", "__init__ i self", "Metode", "Modelovanje problema"]
      },
      {
        week: "Nedelje 5-8",
        title: "Napredni rad sa klasama i objektima",
        description: "U drugom mesecu polaznici produbljuju rad sa klasama i uče kako da kontrolišu stanje i odgovornosti svojih objekata. Obrađuju instance i class atribute, enkapsulaciju, svojstva i različite vrste metoda, a zatim povezuju više klasa u funkcionalne sisteme. Naučeno primenjuju kroz izradu objektno-orijentisane aplikacije, čime razvijaju sposobnost da realne probleme predstave kroz više međusobno povezanih objekata i odgovornosti.",
        skills: ["Instance i class atributi", "Enkapsulacija", "@property", "Classmethod i Staticmethod", "Dizajn klasa", "Saradnja objekata"]
      },
      {
        week: "Nedelje 9-12",
        title: "Nasleđivanje, polimorfizam i kompozicija",       
        description: "Treći mesec predstavlja centralni deo OOP-a. Polaznici uče kako da postojeće klase proširuju i ponovo koriste kroz nasleđivanje, kako funkcionišu redefinisane metode i super(), kao i kako polimorfizam omogućava različito ponašanje objekata kroz zajednički interfejs. Posebnu pažnju posvećujemo kompoziciji i izboru odgovarajućeg odnosa između klasa, kako bi učenici naučili da ne koriste nasleđivanje tamo gde je prirodnije povezivanje objekata. Kroz razvoj složenijih sistema povezuju više OOP koncepata u jednu celinu.",
        skills: ["Nasleđivanje", "super()", "Overriding", "Polimorfizam", "Kompozicija", "Projektovanje sistema"]
      },
      {
        week: "Nedelje 13-16",
        title: "Robusne aplikacije, rad sa podacima i završni projekat",
        description: "U završnom mesecu polaznici uče kako da svoje aplikacije učine pouzdanijim i spremnim za realnu upotrebu. Obrađuju izuzetke i kontrolu grešaka, rad sa fajlovima i JSON formatom, kao i organizaciju programa kroz module. Stečeno znanje objedinjuju kroz završni objektno-orijentisani projekat u kome samostalno planiraju strukturu aplikacije, definišu klase i njihove odgovornosti, povezuju više objekata, čuvaju podatke i testiraju funkcionalnost programa. Kurs se završava prezentacijom projekta i code review-om, kroz koji polaznici uče da obrazlože svoje programske odluke i unaprede kvalitet sopstvenog koda.",
        skills: ["Exceptions", "Try / Except", "Rad sa fajlovima", "JSON", "Modularnost", "Završni OOP projekat"]
      }
    ]
  },
  {
    courseId: "sql-osnovni-nivo",

    modules: [
      {
        week: "Nedelje 1-2",
        title: "Osnove relacionih baza i kreiranje podataka",
        description: "U prvom delu kursa polaznici upoznaju osnovne principe relacionih baza podataka i način na koji su podaci organizovani u tabele. Uče šta predstavljaju baza podataka, tabela, red, kolona, primarni i strani ključ, kao i kako se tabele međusobno povezuju. Nakon upoznavanja sa Microsoft SQL Server okruženjem i SQL Server Management Studio alatom, polaznici kreiraju sopstvenu bazu podataka, definišu tabele i tipove podataka i unose početne podatke pomoću SQL naredbi.",
        skills: ["Osnove relacionih baza podataka", "Kreiranje baze podataka", "Kreiranje tabela", "Tipovi podataka", "Primary Key i Foreign Key", "INSERT naredba"]
      },
      {
        week: "Nedelje 3-4",
        title: "SELECT upiti i filtriranje podataka",
        description: "U drugom delu polaznici počinju aktivno da rade sa podacima pomoću SELECT naredbe. Uče kako da iz tabela izdvoje željene kolone i redove, kako da primene različite uslove i kako da rezultate upita sortiraju i organizuju. Kroz praktične zadatke obrađuju WHERE, AND, OR, NOT, BETWEEN, IN, LIKE, NULL i DISTINCT, a zatim povezuju više uslova kako bi rešavali konkretne probleme nad bazom podataka.",
        skills: ["SELECT i FROM", "WHERE", "AND / OR / NOT", "BETWEEN", "IN / NOT IN", "LIKE / NOT LIKE", "NULL vrednosti", "DISTINCT", "ORDER BY"]
      },
      {
        week: "Nedelje 5-6",
        title: "Obrada i analiza podataka",
        description: "U trećem delu kursa polaznici prelaze sa jednostavnog prikaza podataka na njihovu obradu i analizu. Upoznaju agregatne funkcije COUNT, SUM, AVG, MIN i MAX, kao i ROUND i aritmetičke izraze u SQL upitima. Nakon toga uče kako se podaci grupišu pomoću GROUP BY i kako se grupe filtriraju pomoću HAVING. Kroz praktične zadatke polaznici uče da iz baze izvuku korisne informacije kao što su ukupan broj zapisa, prosečne vrednosti, minimalne i maksimalne vrednosti i rezultati po grupama.",
        skills: ["COUNT", "SUM", "AVG", "MIN i MAX", "ROUND", "Aritmetički izrazi", "GROUP BY", "HAVING", "Analiza podataka"]
      },
      {
        week: "Nedelje 7-8",
        title: "Povezivanje tabela i završni projekat",
        description: "U završnom delu kursa polaznici uče kako da kombinuju podatke iz više tabela pomoću JOIN naredbi. Stečeno znanje objedinjuju kroz završni praktični projekat, u okviru kojeg samostalno kreiraju malu relacionu bazu, unose podatke i izrađuju skup SQL upita kojima rešavaju konkretne problemske zadatke.",
        skills: ["JOIN", "Povezivanje tabela", "Složeni SELECT upiti", "Rad sa više tabela", "Rešavanje problemskih zadataka", "Samostalni rad sa bazom", "Završni projekat"]
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