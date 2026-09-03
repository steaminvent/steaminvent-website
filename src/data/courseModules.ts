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
    courseId: "steam-igracke-i-robotika",
    modules: [
      {
        week: "Nedelje 1-4",
        title: "Osnove mehanike i elektronike",
        description: "U prvom mesecu polaznici ulaze u svet mehanike i elektronike kroz praktično sklapanje STEM igračaka. Uče kako funkcionišu zupčanici, kako se zatvara električno kolo i kako solarni paneli pretvaraju svetlost u pokret. Svaku igračku koju naprave u ovom delu kursa deca zadržavaju i nose kući kao poklon.",
        skills: [" DC motori", "Solarni paneli", "Zupčanici", "Strujna kola", "STEAM igračke"]
      },
      {
        week: "Nedelje 5-8",
        title: "Uvod u robotiku, senzore i blokovsko programiranje",
        description: "U drugom delu kursa deca prelaze na edukativne kompletne robote sa pametnim hub-om, motorima i senzorima. Uče kako da povežu fizičkog robota sa računarom/tabletom i kako da slažući šarene blokove koda upravljaju njegovim kretanjem i reakcijama na okruženje.",
        skills: ["Smart Hub", "Elektromotori i senzori", "Blockly / Scratch"]
      },
      {
        week: "Nedelje 9-10",
        title: "Složene robotske konstrukcije i završni projekat",
        description: "Polaznici objedinjuju sva stečena znanja iz mehanike, elektronike i programiranja. Kroz timski rad sklapaju složenije robote (sa sistemima poluga, sajli ili više pokretnih delova) i programiraju ih za rešavanje konkretnih praktičnih zadataka.",
        skills: ["Multisenzorska logika", "Ispitivanje i poligon zadaci", "Timski rad"]
      }
    ]
  },
  {
    courseId: "python-pocetni-nivo",

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
    courseId: "csharp-pocetni-nivo", 
    
    modules: [ 
      { 
        week: "Nedelje 1-4", 
        title: "C# osnove, tipovi podataka i rad sa podacima", 
        description: "U prvom mesecu polaznici se upoznaju sa C# programskim jezikom i radnim okruženjem Visual Studio. Uče osnovnu strukturu programa, pravila pisanja koda, identifikatore i službene reči, a zatim upoznaju najvažnije tipove podataka, uključujući celobrojne, realne, logičke, znakovne i string vrednosti. Kroz praktične zadatke savladavaju unos i prikaz podataka, osnovne operatore i konverziju između različitih tipova. Kroz postepeno složenije zadatke polaznici prelaze od razumevanja pojedinačnih naredbi do pisanja svojih prvih samostalnih C# programa.", 
        skills: [ "C# osnove", "Visual Studio", "Identifikatori i službene reči", "Tipovi podataka", "Korisnički unos i prikaz", "Operatori", "Konverzija tipova" ] 
      }, 
      { 
        week: "Nedelje 5-8", 
        title: "Logika programa i uslovno grananje", 
        description: "U drugom mesecu polaznici uče kako program analizira podatke i donosi odluke na osnovu zadatih uslova. Savladavaju logičke i relacione operatore, naredbu if i višestruko grananje pomoću switch naredbe. Kroz veliki broj problemskih zadataka uče kako da jedan problem razlože na korake, postave odgovarajuće uslove i napišu algoritam koji pravilno reaguje na različite situacije. Poseban fokus je na razvoju algoritamskog načina razmišljanja i povezivanju više programerskih koncepata u jednu funkcionalnu celinu.", 
        skills: [ "Algoritamsko razmišljanje", "If naredba", "Switch naredba", "Logički operatori", "Relacioni operatori", "Uslovno grananje" ] 
      }, 
      { 
        week: "Nedelje 9-12", 
        title: "Petlje, debugging i nizovi", 
        description: "Treći mesec donosi prelazak na programe koji izvršavaju ponovljene postupke i obrađuju veći broj podataka. Polaznici upoznaju for, while i do-while petlje, kao i naredbe break i continue, a zatim uče kako da pomoću debugging alata u Visual Studio okruženju pronađu, analiziraju i isprave greške u svom kodu. Nakon toga prelaze na jednodimenzionalne i dvodimenzionalne nizove, gde uče kako da organizuju, pretražuju i obrađuju skupove podataka. Kroz praktične problemske zadatke povezuju petlje i nizove i postepeno razvijaju sposobnost rešavanja složenijih programerskih problema.", 
        skills: [ "For petlja", "While petlja", "Do-while petlja", "Break i Continue", "Debugging", "Jednodimenzionalni nizovi", "Dvodimenzionalni nizovi" ] 
      }, 
      { 
        week: "Nedelje 13-16", 
        title: "Metode, strukture, enum i završni projekat", 
        description: "U završnom mesecu polaznici uče kako da složenije programe podele na manje, pregledne i ponovo upotrebljive celine pomoću metoda. Savladavaju parametre i povratne vrednosti i uče kako da organizuju programski kod tako da bude pregledniji, razumljiviji i lakši za održavanje. Zatim se upoznaju sa strukturama i enumeratorima kao osnovnim načinima organizovanja podataka u C# jeziku. Stečeno znanje objedinjuju kroz završni projekat, u kojem samostalno planiraju, izrađuju i testiraju funkcionalnu konzolnu aplikaciju, primenjujući naučene koncepte, rešavajući greške i unapređujući svoje rešenje. Završni projekat predstavlja pripremu za sledeći nivo učenja i prelazak na objektno-orijentisano programiranje.", 
        skills: [ "Metode", "Parametri i povratne vrednosti", "Organizacija programskog koda", "Strukture", "Enum", "Debugging", "Završni projekat" ] 
      } 
    ] 
  },
  {
    courseId: "csharp-srednji-nivo",

    modules: [
      {
        week: "Nedelje 1-4",
        title: "Objektno-orijentisano programiranje, klase i svojstva",
        description: "U prvom mesecu polaznici prelaze sa proceduralnog načina razmišljanja na objektno-orijentisani pristup programiranju. Upoznaju osnovne principe OOP-a i uče kako se kroz klase i objekte modeluju elementi realnog problema. Detaljno se obrađuju klase, objekti, polja i svojstva, uključujući automatska svojstva, read-only svojstva, private set, init i izvedena svojstva. Polaznici zatim upoznaju modifikatore pristupa i uče kako se kontroliše vidljivost i dostupnost članova klase. Poseban deo posvećen je konstruktorima, njihovim različitim oblicima, preopterećenju, ulančavanju konstruktora, privatnim i statičkim konstruktorima, kao i razumevanju uloge finalizatora u C# jeziku.",
        skills: ["OOP osnove", "Klase i objekti", "Fields i Properties", "Modifikatori pristupa", "Konstruktori"]
      },
      {
        week: "Nedelje 5-8",
        title: "Enkapsulacija, nasleđivanje, apstrakcija i polimorfizam",
        description: "U drugom mesecu polaznici produbljuju razumevanje objektno-orijentisanog dizajna kroz principe enkapsulacije, apstrakcije, nasleđivanja i polimorfizma. Uče kako klase mogu da naslede ponašanje i osobine drugih klasa, kako funkcionišu jednostruko, višestepeno i hijerarhijsko nasleđivanje, kao i kako se u C# jeziku funkcionalnosti višestrukog nasleđivanja realizuju pomoću interfejsa. Obrađuju se base i protected članovi, sealed klase i metode, kao i abstract klase i metode. Kroz virtual i override metode polaznici uče kako se implementira runtime polimorfizam, dok kroz overloading upoznaju compile-time polimorfizam. Poseban akcenat stavljen je na razumevanje razlike između overloading i overriding mehanizama i njihove praktične primene.",
        skills: ["Encapsulation", "Apstract", "Inheritance", "base keyword", "Protected members", "Sealed classes i methods", "Polymorphism", "Virtual methods","Override", "Overloading"]
      },
      {
        week: "Nedelje 9-12",
        title: "Interfejsi, exception handling i generičko programiranje",
        description: "Treći mesec uvodi polaznike u naprednije mehanizme organizacije i kontrole programa. Uče kako se pomoću interfejsa definišu ugovori koje klase implementiraju i kako se interfejsi koriste za fleksibilniji i modularniji dizajn aplikacija. Posebno se analizira odnos između abstract class i interface koncepta i kriterijumi za njihov izbor. Zatim se obrađuje exception handling, uključujući try, catch, multiple catch, finally, nested try/catch, throw, hijerarhiju izuzetaka i kreiranje sopstvenih exception klasa. U završnom delu meseca polaznici se upoznaju sa generičkim tipovima i razumeju kako generics omogućavaju bezbedan, fleksibilan i ponovo upotrebljiv kod.",
        skills: ["Interface", "Abstract class vs. Interface", "Exception handling", "Generics"]
      },
      {
        week: "Nedelje 13-16",
        title: "Kolekcije, delegati, lambda izrazi, LINQ i završni projekat",
        description: "U završnom mesecu polaznici uče kako da efikasno organizuju i obrađuju veće količine podataka korišćenjem kolekcija. Najpre upoznaju osnovne negeneričke kolekcije kao što su ArrayList, Hashtable, Stack, Queue i SortedList, a zatim prelaze na savremene generičke kolekcije kao što su List<T>, Dictionary<TKey,TValue>, Queue<T>, Stack<T>, HashSet<T>, SortedSet<T>, SortedList<TKey,TValue> i SortedDictionary<TKey,TValue>. Nakon toga se uvode delegati, Action, Func i Predicate, kao i lambda izrazi koji predstavljaju važan deo modernog C# programiranja. Znanje se dalje povezuje kroz LINQ, gde polaznici uče filtriranje, selekciju, sortiranje, pretragu, agregaciju i grupisanje podataka. Na kraju meseca sve naučene koncepte objedinjuju kroz završni projekat, u kojem samostalno projektuju i razvijaju funkcionalnu C# aplikaciju sa jasnom strukturom i objektno-orijentisanim dizajnom.",
        skills: ["Collections", "Delegates", "Lambda", "LINQ", "Završni projekat"]
      }
    ]
  },
  {
    courseId: "csharp-napredni-nivo",
    modules: [
      {
        week: "Nedelje 1-4",
        title: "WPF, XAML i arhitektura .NET desktop aplikacije",
        description: "U prvom mesecu polaznici prelaze sa razvoja klasičnih C# aplikacija na razvoj grafičkih desktop aplikacija korišćenjem WPF tehnologije u .NET 10 okruženju. Upoznaju ulogu .NET platforme, WPF-a i XAML-a i uče kako se definiše struktura korisničkog interfejsa pomoću različitih layout panela i standardnih WPF kontrola. Obrađuju se Grid, StackPanel, DockPanel, WrapPanel, DataGrid, TextBox, ComboBox, CheckBox, Button, ListBox i drugi elementi korisničkog interfejsa. Polaznici zatim uče konceptualno razdvajanje prezentacionog sloja od ostatka aplikacije, organizaciju WPF projekta, rad sa Resources i osnovama kreiranja stilizovanog i preglednog korisničkog interfejsa. U završnom delu meseca uvode se UserControl, DataTemplate, Style, Trigger i Value Converter koncepti koji predstavljaju osnovu za izgradnju funkcionalnijeg i profesionalnijeg WPF interfejsa.",
        skills: ["WPF", "XAML", "Window", "Grid", "WPF kontrole", "Styles", "Resources", "DataTemplate", "Value Converter"]
      },
      {
        week: "Nedelje 5-8",
        title: "MVVM, Data Binding, Commands i Dependency Injection",
        description: "U drugom mesecu polaznici detaljno upoznaju MVVM arhitekturu i uče kako da WPF aplikaciju organizuju tako da korisnički interfejs bude odvojen od aplikacione i poslovne logike. Obrađuju se Model, View i ViewModel u praktičnom kontekstu, kao i ObservableObject, INotifyPropertyChanged, ObservableProperty i ObservableCollection. Polaznici uče kako funkcioniše Data Binding, uključujući OneWay, TwoWay i binding kolekcija, selected objekata i UI svojstava. Poseban deo kursa posvećen je Commands mehanizmu kroz ICommand, RelayCommand i AsyncRelayCommand, kao i povezivanju komandi sa kontrolama u XAML-u. Nakon toga se uvodi Dependency Injection i organizacija servisa pomoću interfejsa i konkretnih implementacija. Kroz praktične primere polaznici povezuju View, ViewModel i servisni sloj i grade aplikaciju bez direktnog mešanja poslovne logike i korisničkog interfejsa.",
        skills: ["MVVM", "View / ViewModel / Model", "INotifyPropertyChanged", "Data Binding", "ICommand", "Dependency Injection", "Interfaces", "Service Layer"]
      },
      {
        week: "Nedelje 9-12",
        title: "Entity Framework Core, SQL Server i rad sa podacima",
        description: "U trećem mesecu polaznici povezuju WPF aplikaciju sa relacionom bazom podataka i upoznaju kompletan tok rada sa podacima kroz Entity Framework Core. Kreiraju SQL Server bazu, tabele i relacije između entiteta i uče kako se C# modeli povezuju sa bazom preko DbContext klase. Obrađuju se DbSet, konfiguracija konteksta, rad sa relacijama, navigacionim svojstvima i LINQ upitima. Polaznici zatim uvode Data Access Layer i Business Logic Layer i uče kako da pristup podacima organizuju kroz servisne interfejse i implementacije. Poseban fokus stavljen je na CRUD operacije, asinhroni rad sa bazom, filtriranje i selekciju podataka, proveru uslova pre izvršavanja operacija i obradu izuzetaka. Na kraju meseca WPF aplikacija dobija funkcionalnu vezu sa bazom podataka i omogućava učitavanje i prikaz stvarnih podataka kroz ViewModel i Data Binding.",
        skills: ["SQL Server", "Entity Framework Core", "DbContext", "DbSet","EF Core modeli", "LINQ", "CRUD","Database operations"]
      },
      {
        week: "Nedelje 13-16",
        title: "Kompletna WPF/MVVM aplikacija i završni projekat",
        description: "U završnom mesecu polaznici objedinjuju sve naučene tehnologije i principe kroz razvoj kompletne WPF desktop aplikacije zasnovane na MVVM arhitekturi. Kao praktični projekat razvijaju aplikaciju za upravljanje igrama, korisnicima i iznajmljivanjima, pri čemu se povezuju WPF interfejs, ViewModel sloj, servisni sloj, Entity Framework Core i SQL Server baza. Implementiraju se prikaz i selekcija podataka, dodavanje novih zapisa, izmena postojećih zapisa i brisanje podataka uz potvrdu korisnika. Zatim se implementiraju poslovne funkcionalnosti poput iznajmljivanja i vraćanja igre, provere dostupnosti i automatskog osvežavanja podataka. Polaznici uče kako da koriste komande i binding umesto direktne poslovne logike u code-behind fajlovima, kao i kako da obrađuju greške, prikazuju statusne poruke i organizuju UI na način koji je pregledan i lak za održavanje. Kurs se završava samostalnim završnim projektom u kojem polaznici kreiraju sopstvenu WPF aplikaciju i primenjuju kompletnu arhitekturu naučenu tokom kursa.",
        skills: ["WPF app", "MVVM pattern", "CRUD", "Commands", "EF Core", "SQL Server", "Dependency Injection", "Validation", "Završni projekat"]
      }
    ]
  },
  {
    courseId: "sql-pocetni-nivo",

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
    courseId: "c-pocetni-nivo",

    modules: [
      {
        week: "Nedelje 1-4",
        title: "Algoritmi, C osnove i tipovi podataka",
        description: "U prvom modulu polaznici se upoznaju sa osnovama algoritamskog razmišljanja i načinom rešavanja problema kroz jasno definisane korake. Nakon uvoda u algoritme i Code::Blocks razvojno okruženje, upoznaju strukturu programskog jezika C i osnovne elemente potrebne za pisanje prvih programa. Obrađuju se identifikatori, službene reči i osnovna pravila organizacije C programa. Posebna pažnja posvećena je razumevanju načina na koji računar predstavlja podatke, uključujući binarni brojni sistem, kao i različitim tipovima podataka. Polaznici uče o celobrojnim, realnim, znakovnim i logičkim podacima, numeričkim i simboličkim konstantama, kao i osnovama rada sa stringovima. Kroz praktične zadatke upoznaju način unosa i prikaza podataka i počinju da samostalno pišu jednostavne C programe.",
        skills: ["Algoritmi", "Code::Blocks", "Struktura C programa", "Identifikatori", "Službene reči", "Binarni brojni sistem", "Tipovi podataka", "Unos i prikaz podataka"]
      },
      {
        week: "Nedelje 5-8",
        title: "Naredbe, grananje i ciklusi",
        description: "U drugom modulu polaznici uče kako se formira tok izvršavanja programa i kako se program prilagođava različitim situacijama na osnovu zadatih uslova. Upoznaju proste naredbe i sekvence odnosno blokove naredbi, a zatim savladavaju naredbe grananja if i switch. Nakon toga prelaze na cikluse for, while i do-while, kroz koje uče kako da efikasno rešavaju probleme koji zahtevaju ponavljanje određenih postupaka. Naredbe break i continue koriste za precizniju kontrolu toka ciklusa. Kroz veliki broj praktičnih zadataka polaznici povezuju sekvencijalno izvršavanje, grananje i ponavljanje i postepeno prelaze na složenije algoritamske probleme. Poseban fokus je na razvijanju sposobnosti da se problem analizira, razloži na korake i pretvori u jasno i funkcionalno C rešenje.",
        skills: ["Proste naredbe", "Sekvenca naredbi", "Blok naredbi", "If naredba", "Switch naredba", "For petlja", "While petlja", "Do-while petlja", "Break", "Continue"]
      },

      {
        week: "Nedelje 9-12",
        title: "Funkcije i samostalno programiranje",
        description: "U završnom modulu polaznici upoznaju funkcije kao osnovu organizovanja i modularizacije programskog koda. Uče kako se funkcija deklariše i implementira, kako se poziva i koja je uloga prototipa funkcije. Kroz praktične zadatke uče da složenije probleme podele na manje i logički povezane programske celine, čime njihova rešenja postaju preglednija, razumljivija i lakša za održavanje. U završnom delu modula povezuju sve prethodno naučene koncepte: tipove podataka, unos i prikaz podataka, sekvence, grananje, cikluse i funkcije. Kroz završne problemske zadatke samostalno analiziraju problem, kreiraju algoritam i implementiraju kompletno C rešenje. Na taj način stiču čvrstu osnovu za nastavak učenja i prirodan prelazak na C napredni nivo.",
        skills: ["Funkcije", "Modularno programiranje", "Organizacija programskog koda", "Samostalno rešavanje problema", "Završni problemski zadaci"]
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
  }
];