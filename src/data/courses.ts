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
    slug: "razvoj-logike-kroz-scratch",
    title: "Razvoj Logike kroz Scratch za Najmlađe",
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
    slug: "steam-igracke-i-robotika",
    title: "STEAM Igračke & Robotika za Najmlađe",
    subtitle: "Razvoj tehničkih veština kroz STEM igračke i robote za najmlađe",
    description: "Program je osmišljen kao praktičan uvod u svet inženjerstva, elektronike i robotike za decu. U prvom delu kursa fokus je na mehanici, električnim kolima i solarnoj energiji, gde deca od drvenih i plastičnih delova samostalno sklapaju funkcionalne igračke koje zadržavaju. "
    + "U drugom delu kursa prelaze na naprednije edukativne robote sa motorima i senzorima, gde uče osnove logike i blokovskog programiranja kako bi oživeli svoje konstrukcije.",
    difficulty: "Početni nivo",
    duration: "3 meseca (20 časova)",
    category: "Vizuelno programiranje",
    technologies: ["Robotika", "Scratch", "Blockly"],
    image: "/images/course-lego.png",
    featured: true
  },
  {
    slug: "python-pocetni-nivo",
    title: "Python: Početni nivo",
    subtitle: "Od prvih linija koda do samostalnih konzolnih aplikacija",
    description: "Python je jedan od najmoćnijih i najpopularnijih programskih jezika, a ovaj kurs je namenjen polaznicima koji žele da naprave prvi ozbiljan korak u svetu programiranja. "
                + "Kroz pažljivo osmišljene lekcije i veliki broj praktičnih zadataka, učenici postepeno uče kako da razmišljaju kao programeri, rešavaju probleme i svoje ideje pretvore u funkcionalan program. Ovaj kurs predstavlja čvrstu osnovu za nastavak učenja programiranja i prirodan uvod u naš Python srednji nivo, na kojem se detaljnije obrađuju objektno-orijentisano programiranje i napredniji koncepti.",
    difficulty: "Početni nivo",
    duration: "4 meseca (32 časa)",
    category: "Softversko inženjerstvo",
    technologies: ["Python", "VS Code", "Algoritamsko razmišljanje", "Strukture podataka", "Programiranje"],
    image: "/images/python-osnovni-kurs.png",
    featured: false
  },
  {
    slug: "python-srednji-nivo",
    title: "Python: Srednji nivo",
    subtitle: "Od objektno-orijentisanog programiranja do izrade složenijih aplikacija", 
    description: "Nakon savladavanja Python osnova, polaznici na ovom kursu prelaze na viši nivo programiranja i uče kako da svoje programe organizuju kao složene, pregledne i funkcionalne sisteme. "
              + "Glavni fokus kursa je objektno-orijentisano programiranje kroz koje učenici upoznaju klase, objekte, atribute, metode, enkapsulaciju, nasleđivanje, polimorfizam i kompoziciju. "
              + "Kroz praktične projekte uče kako više klasa može da sarađuje u jednoj aplikaciji, kako da program učine otpornijim na greške, sačuvaju podatke i organizuju kod kroz više modula. "
              + "Kurs predstavlja prirodan nastavak našeg Python osnovnog nivoa i priprema polaznike za naprednije programiranje, razvoj kompleksnijih aplikacija i rad na samostalnim projektima.",
    difficulty: "Srednji nivo",
    duration: "4 meseca (32 časa)",
    category: "Softversko inženjerstvo",
    technologies: ["Python", "VS Code", "OOP", "Rad sa fajlovima", "JSON"],
    image: "/images/python-srednji-nivo.png",
    featured: false
  },
  { 
    slug: "csharp-pocetni-nivo", 
    title: "C#: Početni nivo", 
    subtitle: "Od prvih linija koda do samostalnih konzolnih aplikacija", 
    description: "C# je jedan od najvažnijih savremenih programskih jezika i predstavlja odličnu osnovu za razvoj softvera, aplikacija i naprednih programerskih sistema. " 
              + "Ovaj kurs je namenjen polaznicima koji žele da naprave prvi ozbiljan korak u programiranju i kroz praktičan rad upoznaju osnove C# jezika. " 
              + "Kroz pažljivo osmišljene lekcije i veliki broj praktičnih zadataka, polaznici uče kako funkcionišu promenljive, tipovi podataka, operatori, grananje, petlje, nizovi i metode, ali i kako da analiziraju problem, osmisle algoritam i svoje rešenje pretvore u funkcionalan program. " 
              + "Poseban akcenat stavljen je na razvoj algoritamskog razmišljanja, rešavanje problema, debugging i samostalno pisanje preglednog i funkcionalnog koda u Visual Studio okruženju. " 
              + "Stečeno znanje polaznici objedinjuju kroz završni projekat, čime stiču čvrstu osnovu za nastavak učenja C# programiranja i prirodan prelazak na naš C# srednji nivo, na kojem se detaljnije obrađuju objektno-orijentisano programiranje i napredniji koncepti jezika.", 
    difficulty: "Početni nivo", 
    duration: "4 meseca (32 časa)", 
    category: "Softversko inženjerstvo", 
    technologies: [ "C #", "Visual Studio", "Algoritamsko razmišljanje", "Strukture podataka", "Programiranje" ], 
    image: "/images/course-csharp-pocetni.png", 
    featured: false 
  },
  {
    slug: "csharp-srednji-nivo",
    title: "C#: Srednji nivo",
    subtitle: "Od osnovnog C# programiranja do ozbiljnog objektno-orijentisanog razvoja",
    description: "Ovaj kurs predstavlja prirodan nastavak našeg C# kursa za početni nivo i namenjen je polaznicima koji žele da svoje osnovno znanje C# programiranja podignu na viši nivo. "
      + "Kroz sistematsko upoznavanje sa objektno-orijentisanim programiranjem, polaznici uče kako da programski kod organizuju kroz klase i objekte i kako da grade pregledne, modularne i ponovo upotrebljive softverske komponente. "
      + "Kurs detaljno obrađuje svojstva, konstruktore, modifikatore pristupa, enkapsulaciju, apstrakciju, nasleđivanje, polimorfizam i interfejse, uz posebno razumevanje razlike između overloading i overriding mehanizama. "
      + "Polaznici se zatim upoznaju sa exception handling mehanizmima, generičkim tipovima, kolekcijama, delegatima, lambda izrazima i LINQ-om, čime prelaze sa rada na osnovnim konzolnim programima na razvoj struktuisanijih i realnijih C# rešenja. "
      + "Kroz veliki broj praktičnih zadataka u Visual Studio okruženju polaznici uče da povezuju više koncepata, analiziraju postojeći kod, pronađu i otklone greške i donesu odgovarajuće odluke prilikom projektovanja programa. "
      + "Stečeno znanje objedinjuju kroz završni projekat u kojem samostalno razvijaju funkcionalnu C# aplikaciju i primenjuju ključne principe objektno-orijentisanog programiranja. Kurs predstavlja čvrstu osnovu za nastavak učenja i prirodan prelazak na razvoj desktop aplikacija kroz WPF i MVVM arhitekturu.",
    difficulty: "Srednji nivo",
    duration: "4 meseca (32 časa)",
    category: "Softversko inženjerstvo",
    technologies: ["C #", "Visual Studio", "OOP", "Generics", "Collections", "LINQ", "Delegates", "Lambda izrazi", "Programiranje"],
    image: "/images/course-csharp-srednji.png",
    featured: false
  },
  {
    slug: "csharp-napredni-nivo",
    title: "C#: Desktop App Development - Full Stack",
    subtitle: "WPF, MVVM i razvoj profesionalnih .NET desktop aplikacija",
    description:
      "Ovaj kurs predstavlja nastavak našeg C# kursa za srednji nivo i namenjen je polaznicima koji žele da svoje znanje programiranja podignu na nivo razvoja kompletnih i struktuisanih desktop aplikacija. "
      + "Kroz praktičan rad sa .NET 10, WPF i XAML tehnologijama polaznici uče kako da grade moderne Windows desktop aplikacije i kako da korisnički interfejs odvoje od poslovne logike i pristupa podacima. "
      + "Poseban akcenat stavljen je na MVVM arhitekturu, data binding, ObservableObject, ObservableCollection, commands, dependency injection i organizaciju aplikacije kroz jasno definisane slojeve. "
      + "Polaznici se upoznaju sa Entity Framework Core pristupom radu sa relacionim bazama podataka, povezivanjem WPF aplikacije sa SQL Server bazom, kreiranjem modela, DbContext-a i servisnog sloja, kao i implementacijom CRUD operacija. "
      + "Kroz praktičan projekat razvijaju kompletnu desktop aplikaciju koja povezuje korisnički interfejs, ViewModel sloj, poslovnu logiku i bazu podataka. "
      + "Tokom razvoja aplikacije polaznici uče kako da implementiraju pregled, dodavanje, izmenu i brisanje podataka, rad sa relacijama između entiteta, iznajmljivanje i vraćanje podataka, validaciju korisničkog unosa, obradu grešaka i asinhroni rad. "
      + "Na kraju kursa samostalno razvijaju funkcionalnu WPF aplikaciju zasnovanu na MVVM arhitekturi i primenjuju naučene principe softverske arhitekture, objektno-orijentisanog programiranja i rada sa bazama podataka. "
      + "Kurs predstavlja završni korak u našoj C# programskoj putanji i priprema polaznike za dalje usavršavanje u oblasti .NET softverskog inženjerstva.",
    difficulty: "Napredni nivo",
    duration: "4 meseca (32 časa)",
    category: "Softversko inženjerstvo",
    technologies: ["C #", ".NET 10", "Visual Studio", "WPF", "XAML", "MVVM", "Entity Framework Core", "SQL Server", "LINQ", "Dependency Injection", "Data Binding", "Commands", "Async/Await"],
    image: "/images/course-csharp-napredni.png",
    featured: false
  },
  {
    slug: "sql-pocetni-nivo",
    title: "SQL: Početni nivo",
    subtitle: "Od prvih tabela do samostalnog rada sa relacionim bazama podataka",
    description: "SQL je standardni jezik za rad sa relacionim bazama podataka i predstavlja jednu od najvažnijih veština u savremenom programiranju i obradi podataka. "
                + "Ovaj kurs je namenjen polaznicima koji žele da nauče kako se podaci organizuju u bazama, kako se kreiraju i povezuju tabele i kako se pomoću SQL upita podaci pretražuju, filtriraju, obrađuju i analiziraju. "
                + "Kroz veliki broj praktičnih primera i zadataka, polaznici rade u Microsoft SQL Server okruženju i postepeno prelaze od osnovnih SQL naredbi do složenijih upita koji povezuju više tabela. "
                + "Kurs predstavlja čvrstu osnovu za nastavak učenja SQL-a i prirodan uvod u naš SQL srednji nivo.",
    difficulty: "Početni nivo",
    duration: "2 meseca (16 časova)",
    category: "Softversko inženjerstvo",
    technologies: ["SQL", "Relacione baze podataka", "SQL upiti"],
    image: "/images/sql-osnovni-kurs.png",
    featured: false
  },
  {
    slug: "c-pocetni-nivo",
    title: "C: Početni nivo",
    subtitle: "Od prvih algoritama do samostalnog pisanja C programa",
    description: "Programski jezik C predstavlja jednu od najvažnijih osnova programiranja i omogućava polaznicima da na sistematičan način upoznaju kako se grade programi, kako računar obrađuje podatke i kako se rešavaju problemski zadaci kroz algoritme i programski kod. "
      + "Ovaj kurs je namenjen polaznicima koji žele da naprave prvi ozbiljan korak u programiranju i kroz praktičan rad upoznaju osnove programskog jezika C u Code::Blocks razvojnom okruženju. "
      + "Kroz pažljivo osmišljene lekcije polaznici uče kako se definiše struktura C programa, šta predstavljaju identifikatori i službene reči, kako funkcionišu različiti tipovi podataka i kako se podaci unose i prikazuju u programu. "
      + "Poseban akcenat stavljen je na razvoj algoritamskog razmišljanja i sposobnost rešavanja problema kroz sekvencijalno izvršavanje naredbi, uslovno grananje pomoću if i switch naredbi, kao i ponavljanje postupaka pomoću for, while i do-while petlji. "
      + "Polaznici se upoznaju i sa osnovama rada sa funkcijama, uključujući njihovu deklaraciju, implementaciju, poziv i prototipove, čime uče kako da svoje programe organizuju u manje i preglednije programske celine. "
      + "Kroz veliki broj praktičnih zadataka polaznici postepeno prelaze od jednostavnih primera do složenijih algoritamskih problema i stiču sigurnost u samostalnom pisanju C programa. "
      + "Stečeno znanje predstavlja čvrstu osnovu za nastavak učenja C programiranja i prirodan prelazak na naš C napredni nivo, na kojem se detaljnije obrađuju nizovi, matrice, algoritmi pretrage i sortiranja, pokazivači, dinamička memorija, stringovi, datoteke i strukture.",
    difficulty: "Početni nivo",
    duration: "3 meseca (24 časa)",
    category: "Softversko inženjerstvo",
    technologies: ["C", "Code::Blocks", "Algoritamsko razmišljanje", "Programiranje", "Osnove programiranja"],
    image: "/images/course-c-pocetni.png",
    featured: false
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