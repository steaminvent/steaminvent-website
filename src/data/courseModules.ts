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
    courseId: "python-web-development-api",

    modules: [
      {
        week: "Nedelje 1-4",
        title: "Python na webu: klijent, server i Flask",
        description: "U prvom mesecu polaznici prelaze iz klasičnog programiranja u svet web aplikacija i upoznaju osnovni način na koji web funkcioniše. Obrađuju odnos između klijenta i servera, HTTP protokol, zahteve i odgovore, URL adrese i osnovnu strukturu web aplikacije. Nakon toga upoznaju Flask kao Python framework za razvoj web aplikacija i uče kako se kreiraju rute, obrađuju zahtevi i generišu web stranice. Kroz Jinja templejte povezuju Python logiku sa HTML stranicama, dok kroz organizaciju projekta uče kako se web aplikacija odvaja na logičke celine. Cilj prvog meseca je da polaznik razume šta se dešava kada korisnik otvori web stranicu i da samostalno napravi osnovnu Flask aplikaciju.",
        skills: ["Client-server arhitektura", "HTTP", "Request / Response", "URL i routing", "Flask", "Jinja templates", "Struktura web projekta"]
      },

      {
        week: "Nedelje 5-8",
        title: "Dinamičke web aplikacije i rad sa bazom podataka",
        description: "U drugom mesecu polaznici prelaze sa statičkih stranica na stvarne aplikacije koje primaju i obrađuju podatke. Uče kako se obrađuju HTML forme, kako se podaci proveravaju i validiraju i kako se koriste sesije za čuvanje stanja između zahteva. Zatim uvode bazu podataka i upoznaju osnovne principe čuvanja, preuzimanja, izmene i brisanja podataka. Kroz SQLite i SQLAlchemy povezuju Python aplikaciju sa bazom i kreiraju CRUD funkcionalnosti. Poseban akcenat stavljen je na povezivanje modela, poslovne logike i web interfejsa, kako bi polaznici razumeli kako nastaje kompletna web funkcionalnost od korisničkog unosa do trajnog čuvanja podataka.",
        skills: ["HTML forme", "Obrada podataka", "Validacija", "Sesije", "SQLite", "SQLAlchemy", "CRUD"]
      },

      {
        week: "Nedelje 9-12",
        title: "REST API, JSON i komunikacija između aplikacija",
        description: "Treći mesec uvodi polaznike u razvoj programskih interfejsa koji omogućavaju da različite aplikacije međusobno razmenjuju podatke. Uče šta je API, kako REST pristup organizuje resurse i kako se koriste HTTP metode GET, POST, PUT i DELETE. Posebnu pažnju posvećujemo HTTP statusnim kodovima, JSON formatu i strukturi API odgovora. Polaznici samostalno razvijaju REST endpoint-e povezane sa bazom podataka i testiraju ih kroz odgovarajuće alate. Kroz praktične zadatke povezuju postojeću Flask aplikaciju sa API slojem i razumeju razliku između klasičnog web prikaza i API servisa koji podatke isporučuje drugim aplikacijama.",
        skills: ["REST API", "HTTP metode", "GET / POST / PUT / DELETE", "JSON", "API endpoint"]
      },

      {
        week: "Nedelje 13-16",
        title: "Kompletna web aplikacija i završni projekat",
        description: "U završnom mesecu polaznici objedinjuju znanja stečena tokom kursa i razvijaju kompletnu web aplikaciju zasnovanu na Pythonu. Uče kako da projekat organizuju u više logičkih komponenti, odvoje konfiguraciju od poslovne logike i pravilno povežu rute, modele, bazu podataka i korisnički interfejs. U završnoj fazi uvode osnovnu autentifikaciju korisnika, obradu grešaka i JavaScript osnove za slanje podataka bez potpunog učitavanja stranice. Završni projekat mora da sadrži rad sa bazom podataka, korisničke funkcionalnosti i REST API deo, čime polaznici prvi put grade zaokružen softverski sistem. Kurs se završava prezentacijom projekta, demonstracijom funkcionalnosti i code review-om, kroz koji polaznici analiziraju organizaciju aplikacije i kvalitet sopstvenog koda.",
        skills: ["WEB app", "Autentifikacija", "JavaScript", "Frontend & API", "Obrada grešaka", "Završni web projekat"]
      }
    ]
  },
  {
    courseId: "ai-machine-learning",
    modules: [
      {
        week: "Nedelje 1-4",
        title: "AI, podaci i Machine Learning osnove",
        description: "U prvom mesecu polaznici ulaze u oblast veštačke inteligencije i upoznaju razliku između AI, Machine Learning-a i Deep Learning-a. Uče šta je Machine Learning, na koji način modeli uče iz podataka i kako se realan problem pretvara u problem koji je moguće rešavati korišćenjem podataka. Obrađuju se osnovni pojmovi kao što su dataset, sample, feature, label, model, training, validation, test i inference, kao i razlika između supervised i unsupervised learning pristupa. "
          + "Nakon konceptualnog uvoda polaznici koriste NumPy za rad sa numeričkim nizovima, višedimenzionalnim podacima i osnovnim numeričkim operacijama, a zatim Pandas za učitavanje, pregled, filtriranje, transformaciju i čišćenje dataset-a. Posebna pažnja posvećena je missing values, numeričkim i kategorijskim podacima, osnovnoj statističkoj analizi i pripremi podataka za Machine Learning. "
          + "Korišćenjem Matplotlib-a polaznici uče da vizuelno istraže podatke, uoče obrasce, distribucije, odstupanja i odnose između karakteristika. Zatim se uvode train/test skupovi i objašnjava zašto se model ne sme procenjivati na podacima koje je koristio tokom učenja. "
          + "Kroz završni praktični zadatak ovog modula polaznici dobijaju realan dataset koji samostalno analiziraju, čiste, vizuelizuju i pripremaju za prvi Machine Learning model. Time se postavlja osnova za ceo dalji ML workflow: problem → podaci → priprema podataka → model.",
        skills: ["AI / ML / Deep Learning koncepti", "Dataset", "Features i Labels", "Training / Validation / Test", "Inference", "Supervised Learning", "Unsupervised Learning", "NumPy", "Pandas", "Data Cleaning", "Missing Values", "Numerički i kategorijski podaci", "Matplotlib", "Data Visualization", "Train / Test Split"]
      },

      {
        week: "Nedelje 5-8",
        title: "Supervised Machine Learning: regresija i klasifikacija",
        description: "U drugom mesecu polaznici prelaze sa pripreme podataka na izgradnju prvih Machine Learning modela. Najpre se uvodi linearna regresija kako bi polaznici razumeli osnovnu ideju predikcije numeričke vrednosti na osnovu ulaznih karakteristika. Na jednostavnim primerima uče odnos između features i target vrednosti, treniranje modela i korišćenje modela za predikciju novih podataka. "
          + "Nakon regresije uvodi se klasifikacija i logistic regression, čime polaznici uče kako Machine Learning model može da donosi odluku između više kategorija. Zatim se uvodi k-Nearest Neighbors kako bi se pokazalo da različiti algoritmi koriste različite principe za donošenje predikcija. "
          + "Decision Trees uvode koncept grananja i odlučivanja na osnovu karakteristika, dok Random Forest pokazuje kako kombinovanje većeg broja stabala može dovesti do robusnijeg modela. Na kraju se uvodi gradient boosting na nivou potrebnom za razumevanje osnovne ideje ensemble metoda. "
          + "Sav rad realizuje se kroz scikit-learn, pri čemu polaznici uče standardni workflow: priprema X i y podataka, kreiranje modela, treniranje pomoću fit, generisanje predikcija pomoću predict i osnovno poređenje različitih modela. Poseban fokus stavljen je na razliku između regresionih i klasifikacionih problema i na izbor odgovarajućeg algoritma prema konkretnom problemu. "
          + "Modul se završava nizom praktičnih zadataka, uključujući predviđanje numeričke vrednosti i klasifikaciju događaja, čime polaznik prvi put samostalno prolazi kroz kompletan proces od dataset-a do istreniranog ML modela.",
        skills: ["Machine Learning Workflow", "scikit-learn", "Linear Regression", "Logistic Regression", "Classification", "k-Nearest Neighbors", "Decision Trees", "Random Forest", "Gradient Boosting", "Model Training", "Model Prediction", "Regression", "Classification"]
      },

      {
        week: "Nedelje 9-12",
        title: "Evaluacija, unapređivanje modela i Unsupervised Learning",
        description: "U trećem mesecu fokus se pomera sa samog treniranja modela na razumevanje toga koliko model zaista dobro radi i kako njegove performanse mogu da se poboljšaju. Polaznici uče confusion matrix i ključne metrike za klasifikaciju, uključujući accuracy, precision, recall i F1 score, kao i metrike za regresiju kao što su MAE, MSE, RMSE i R². Posebno se obrađuje pitanje zašto visok procenat tačnih predikcija ne mora automatski da znači da je model dobar. "
          + "Zatim se uvode overfitting i underfitting i objašnjava se kako nastaju problemi sa generalizacijom. Polaznici upoznaju osnovnu intuiciju bias-variance odnosa i uče zašto model mora biti testiran na podacima koje nije koristio tokom treniranja. Uvodi se cross-validation kao pouzdaniji način procene performansi modela. "
          + "Nakon evaluacije prelazi se na unapređivanje modela kroz preprocessing, feature scaling i feature engineering. Polaznici uče kako se priprema podataka može organizovati zajedno sa modelom korišćenjem scikit-learn Pipeline mehanizma i zašto je sprečavanje data leakage-a ključno za ispravnu procenu modela. "
          + "U nastavku se uvode hyperparameters, GridSearchCV i RandomizedSearchCV i polaznici uče kako da sistematski porede različite konfiguracije modela. Time se Machine Learning proces proširuje sa prostog treniranja modela na eksperimentisanje, merenje i odabir najboljeg rešenja. "
          + "U drugom delu modula prelazi se na unsupervised learning. Obrađuju se clustering, K-Means, osnovna ideja PCA i anomaly detection. Polaznici uče kako da otkriju strukture i neuobičajene obrasce čak i kada unapred ne postoji target vrednost. Modul se završava praktičnim projektom koji objedinjuje clustering i detekciju anomalija.",
        skills: ["Confusion Matrix", "Accuracy", "Precision", "Recall", "F1 Score", "MAE", "MSE", "RMSE", "R²", "Cross-Validation", "Overfitting", "Underfitting", "Feature Scaling", "Feature Engineering", "Pipelines", "Data Leakage", "Hyperparameter Tuning", "GridSearchCV", "RandomizedSearchCV", "K-Means", "Clustering", "PCA", "Anomaly Detection"]
      },

      {
        week: "Nedelje 13-16",
        title: "Neural Networks i Deep Learning sa PyTorch-om",
        description: "U četvrtom mesecu polaznici prelaze sa klasičnog Machine Learning-a na neuronske mreže i Deep Learning. Pošto su prethodno već naučili šta su podaci, model, trening, loss, evaluacija i overfitting, neuronske mreže se uvode kao prirodan nastavak, a ne kao potpuno nova i izolovana oblast. "
          + "Najpre se objašnjavaju osnovni elementi neuronske mreže: neuron, weight, bias, layer i activation function. Polaznici uče kako se informacije prosleđuju kroz mrežu i kako kombinovanje više slojeva omogućava modelu da uči složenije obrasce. "
          + "Zatim se uvodi PyTorch i tensor kao osnovna struktura za numeričke podatke. Polaznici upoznaju forward pass, loss function, gradient, gradient descent i backpropagation i kroz praktične primere uče kako se mreža trenira i kako se njene greške koriste za podešavanje težina. "
          + "Nakon toga se obrađuju osnovni PyTorch koncepti potrebni za izgradnju sopstvenog trening procesa, uključujući Dataset, DataLoader, model, training loop, optimizer, learning rate, batch size i epoch. Posebno se obrađuju validation i overfitting kako bi se prethodno znanje iz evaluacije direktno povezalo sa Deep Learning-om. "
          + "U završnom delu modula uvodi se osnovna ideja Convolutional Neural Networks i polaznici razvijaju jednostavan model za klasifikaciju slika. Cilj ovog dela nije ovladavanje velikim i kompleksnim arhitekturama, već razumevanje osnovnog principa Deep Learning-a i sposobnost da se jednostavna neuronska mreža samostalno definiše, trenira, evaluira i koristi za predikciju.",
        skills: [ "Neural Networks", "Neuron", "Weights", "Bias", "Layers", "Activation Functions", "Tensors", "Forward Pass", "Loss Function", "Gradient Descent", "Backpropagation", "PyTorch", "Dataset", "DataLoader", "Training Loop", "Optimizer", "Learning Rate", "Epoch", "Batch", "MLP", "CNN Fundamentals", "Image Classification"]
      },

      {
        week: "Nedelje 17-20",
        title: "AI aplikacija i završni projekat",
        description: "U završnom mesecu polaznici objedinjuju znanje iz prethodnih modula kroz razvoj kompletnog AI/ML rešenja. Modul počinje definisanjem realnog problema, cilja sistema i podataka potrebnih za njegovo rešavanje. Polaznici zatim prolaze kompletan workflow koji su tokom kursa postepeno usvajali: analiza podataka, preprocessing, feature engineering, izbor kandidata, treniranje, evaluacija, poređenje modela i izbor finalnog modela. "
          + "Centralni završni projekat predstavlja razvoj sistema za prediktivno održavanje i detekciju anomalija u industrijskom sistemu. Na osnovu podataka koji simuliraju rad senzora, kao što su temperatura, vibracije, pritisak, brzina i opterećenje, polaznici razvijaju model koji treba da prepozna neuobičajeno ponašanje sistema i proceni mogućnost nastanka problema. "
          + "U okviru projekta koriste se klasični Machine Learning modeli za klasifikaciju i anomaly detection, dok se jednostavna neuronska mreža uvodi kao dodatni model za poređenje rezultata i povezivanje sa prethodno obrađenim Deep Learning konceptima. Poseban fokus stavljen je na pravilnu evaluaciju i izbor modela na osnovu odgovarajućih metrika, a ne samo na ostvareni procenat tačnosti. "
          + "Nakon izbora finalnog modela polaznici uče kako da istrenirani model sačuvaju, ponovo učitaju i koriste nad novim podacima bez ponovnog treniranja. Model se zatim integriše u funkcionalnu Python aplikaciju koja prima ulazne podatke, pokreće inference i korisniku prikazuje rezultat predikcije i detektovane anomalije. "
          + "Rezultat kursa je kompletna portfolio AI aplikacija, a ne samo Jupyter Notebook ili istrenirani model. Završno rešenje demonstrira ceo AI/ML pipeline: od sirovih senzorskih podataka, njihove analize i pripreme, preko treniranja i evaluacije više modela, do izbora finalnog modela, inference procesa i njegove integracije u aplikaciju. Na taj način polaznik završava kurs sa konkretnim projektom koji može samostalno predstaviti kao primer praktične primene Machine Learning-a i Deep Learning-a.",
        skills: ["AI Problem Definition", "End-to-End ML Pipeline", "Data Preparation", "Feature Engineering", "Model Comparison", "Model Selection", "Predictive Maintenance", "Anomaly Detection", "Classification", "Neural Network Comparison", "Model Persistence", "Inference", "Python AI Application", "Streamlit", "Final AI Project"]
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
    courseId: "c-napredni-nivo",
    
    modules: [
      {
        week: "Nedelje 1-4",
        title: "Nizovi, algoritmi pretrage i sortiranja",
        description: "U prvom modulu polaznici prelaze sa osnovnih programskih konstrukcija na organizaciju i obradu većeg broja podataka. Detaljno se obrađuju jednodimenzionalni nizovi odnosno vektori, njihova eksplicitna inicijalizacija, indeksi i načini za upis i ispis elemenata. Polaznici kroz praktične zadatke uče kako da analiziraju sadržaj niza i implementiraju linearno pretraživanje. Poseban deo modula posvećen je osnovnim algoritmima sortiranja, uključujući selection sort i bubble sort, pri čemu polaznici razumeju logiku rada algoritma i način njegove implementacije u C jeziku. Obrađuju se i operacije left shift i right shift, a kroz kombinovanje nizova, funkcija i petlji rešavaju se složeniji algoritamski problemi.",
        skills: ["Vektori", "Upis i ispis elemenata", "Linearno pretraživanje", "Selection Sort", "Bubble Sort", "Left Shift", "Right Shift"]
      },

      {
        week: "Nedelje 5-8",
        title: "Matrice, pokazivači i adresna aritmetika",
        description: "U drugom modulu polaznici prelaze na dvodimenzionalne nizove odnosno matrice i uče kako se podaci organizuju u redove i kolone. Obrađuju se inicijalizacija dvodimenzionalnih nizova i pristup pojedinačnim elementima, uz rešavanje problemskih zadataka koji zahtevaju obradu redova, kolona i kompletnih matrica. Nakon rada sa matricama uvode se pokazivači kao jedan od ključnih koncepata programskog jezika C. Polaznici uče kako se pokazivač definiše, kako se povezuje sa promenljivom i memorijskom adresom i kako funkcioniše adresna aritmetika. Kroz praktične primere povezuju pokazivače sa nizovima i funkcijama i stvaraju osnovu za razumevanje dinamičkog upravljanja memorijom.",
        skills: ["Matrice", "Pokazivači", "Memorijske adrese", "Pokazivači i nizovi", "Pokazivači i funkcije"]
      },

      {
        week: "Nedelje 9-12",
        title: "Dinamička memorija i rad sa stringovima",
        description: "Treći modul predstavlja jedan od najvažnijih koraka u prelasku na naprednije C programiranje. Polaznici produbljuju razumevanje pokazivača i upoznaju dinamičku dodelu memorije, učeći kako program tokom izvršavanja može da zahteva i koristi memorijski prostor prema potrebi. Kroz praktične zadatke povezuju dinamičku memoriju sa nizovima i funkcijama i uče da razmišljaju o životnom ciklusu podataka i memorijskih resursa. Nakon toga prelaze na stringove, njihovu deklaraciju i inicijalizaciju, unos i ispis i osnovne funkcije za rad sa znakovima i tekstualnim podacima. Poseban fokus stavljen je na povezivanje stringova sa funkcijama, kako bi polaznici mogli da grade složenija rešenja za obradu tekstualnih podataka.",
        skills: ["Dinamička memorije", "Rad sa memorijskim prostorom", "string", "Stringovi i funkcije", "Obrada tekstualnih podataka"]
      },

      {
        week: "Nedelje 13-16",
        title: "Datoteke, strukture i složena organizacija podataka",
        description: "U završnom modulu polaznici uče kako da podatke iz svojih programa trajno čuvaju i ponovo koriste pomoću datoteka. Upoznaju definiciju i podelu datoteka, različite režime njihovog otvaranja i osnovne funkcije za rad sa datotekama. Posebna pažnja posvećena je funkcijama fgetc() i fputc(), kao i razumevanju razlike između relativne i apsolutne putanje. Nakon toga uvode se strukture kao način organizovanja više međusobno povezanih podataka u jednu logičku celinu. Kroz praktične zadatke polaznici povezuju strukture sa nizovima, stringovima, funkcijama i datotekama i uče da grade složenija programska rešenja. U završnom delu kursa objedinjuju sve naučene koncepte kroz kompleksnije problemske zadatke i praktičan projekat, čime razvijaju sposobnost samostalnog projektovanja i implementacije C programa.",
        skills: ["Datoteke", "Strukture","Završni projekat"]
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
  }
];