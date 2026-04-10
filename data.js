const QUESTIONS = [
  {
    "nummer": "1.1",
    "chapter": 1,
    "chapterTitle": "Allgemeine mathematische Grundkenntnisse und Grössen",
    "question": "0,042 A entspricht",
    "options": [
      "42 x 10-1 A",
      "42 x 10-2 A",
      "42 x 10-3 A",
      "42 x 10^3 A"
    ],
    "correctIndex": 2,
    "correctAnswer": "42 x 10-3 A"
  },
  {
    "nummer": "1.2",
    "chapter": 1,
    "chapterTitle": "Allgemeine mathematische Grundkenntnisse und Grössen",
    "question": "0,00042 A entspricht",
    "options": [
      "420 x 10-5 A",
      "420 x 10-6 A",
      "420 x 10-5 A",
      "42 x 10-6 A"
    ],
    "correctIndex": 1,
    "correctAnswer": "420 x 10-6 A"
  },
  {
    "nummer": "1.3",
    "chapter": 1,
    "chapterTitle": "Allgemeine mathematische Grundkenntnisse und Grössen",
    "question": "100 mW entspricht",
    "options": [
      "0,01 W",
      "0,001 W",
      "10^-2 W",
      "10^-1 W"
    ],
    "correctIndex": 3,
    "correctAnswer": "10^-1 W"
  },
  {
    "nummer": "1.4",
    "chapter": 1,
    "chapterTitle": "Allgemeine mathematische Grundkenntnisse und Grössen",
    "question": "4 200 000 Hz entspricht",
    "options": [
      "4,2 x 10^6 Hz",
      "4,2 x 10^5 Hz",
      "42 x 10^-5 Hz",
      "42 x 10^6 Hz"
    ],
    "correctIndex": 0,
    "correctAnswer": "4,2 x 10^6 Hz"
  },
  {
    "nummer": "1.5",
    "chapter": 1,
    "chapterTitle": "Allgemeine mathematische Grundkenntnisse und Grössen",
    "question": "Welche Einheit wird für die elektrische Spannung verwendet?",
    "options": [
      "Ampère (A)",
      "Volt (V)",
      "Ohm (Ω)",
      "Ampèrestunden (Ah)"
    ],
    "correctIndex": 1,
    "correctAnswer": "Volt (V)"
  },
  {
    "nummer": "1.6",
    "chapter": 1,
    "chapterTitle": "Allgemeine mathematische Grundkenntnisse und Grössen",
    "question": "Welche Einheit wird für die elektrische Ladung verwendet?",
    "options": [
      "Ampère (A)",
      "Joule (J)",
      "Kilowatt (kW)",
      "Ampèresekunde (As)"
    ],
    "correctIndex": 3,
    "correctAnswer": "Ampèresekunde (As)"
  },
  {
    "nummer": "1.7",
    "chapter": 1,
    "chapterTitle": "Allgemeine mathematische Grundkenntnisse und Grössen",
    "question": "Welche Einheit wird für die elektrische Leistung verwendet?",
    "options": [
      "Kilowattstunden (kWh)",
      "Joule (J)",
      "Watt (W)",
      "Ampèrestunden (Ah)"
    ],
    "correctIndex": 2,
    "correctAnswer": "Watt (W)"
  },
  {
    "nummer": "1.8",
    "chapter": 1,
    "chapterTitle": "Allgemeine mathematische Grundkenntnisse und Grössen",
    "question": "In welcher Einheit wird der elektrische Widerstand angegeben?",
    "options": [
      "Farad",
      "Ohm",
      "Siemens",
      "Henry"
    ],
    "correctIndex": 1,
    "correctAnswer": "Ohm"
  },
  {
    "nummer": "1.9",
    "chapter": 1,
    "chapterTitle": "Allgemeine mathematische Grundkenntnisse und Grössen",
    "question": "0,22 μF sind",
    "options": [
      "22 nF",
      "220 nF",
      "22 pF",
      "220 pF"
    ],
    "correctIndex": 1,
    "correctAnswer": "220 nF"
  },
  {
    "nummer": "1.10",
    "chapter": 1,
    "chapterTitle": "Allgemeine mathematische Grundkenntnisse und Grössen",
    "question": "3,75 MHz sind",
    "options": [
      "3750 kHz",
      "375 kHz",
      "0,375 GHz",
      "0,0375 GHz"
    ],
    "correctIndex": 0,
    "correctAnswer": "3750 kHz"
  },
  {
    "nummer": "1.11",
    "chapter": 1,
    "chapterTitle": "Allgemeine mathematische Grundkenntnisse und Grössen",
    "question": "Welche Einheit wird für die Kapazität verwendet?",
    "options": [
      "Henry (H)",
      "Siemens (S)",
      "Ohm (Ω)",
      "Farad (F)"
    ],
    "correctIndex": 3,
    "correctAnswer": "Farad (F)"
  },
  {
    "nummer": "2.1",
    "chapter": 2,
    "chapterTitle": "Elektrizität, Magnetismus und Funktheorie",
    "question": "Welche Einheit hat die elektrische Leistung?",
    "options": [
      "Volt (V)",
      "Watt (W)",
      "Ampere (A)",
      "Ohm (Ω)"
    ],
    "correctIndex": 1,
    "correctAnswer": "Watt (W)"
  },
  {
    "nummer": "2.2",
    "chapter": 2,
    "chapterTitle": "Elektrizität, Magnetismus und Funktheorie",
    "question": "Die elektrische Arbeit bezeichnet man auch mit…",
    "options": [
      "Kilowatt (kW)",
      "Volt (V)",
      "Kilowattstunde (kWh)",
      "Voltampere (VA)"
    ],
    "correctIndex": 2,
    "correctAnswer": "Kilowattstunde (kWh)"
  },
  {
    "nummer": "2.3",
    "chapter": 2,
    "chapterTitle": "Elektrizität, Magnetismus und Funktheorie",
    "question": "Was versteht man unter Spannungsabfall?",
    "options": [
      "Restspannung einer entladenen Batterie.",
      "Ein mehr oder weniger grosser Spannungsverlust, der nicht mit dem ohmschen Gesetz erklärt werden kann.",
      "Man bezeichnet damit z.B. die an den Klemmen eines Widerstandes gemessene Potentialdifferenz.",
      "Auf alle Fälle ein unerwünschter Spannungsverlust."
    ],
    "correctIndex": 2,
    "correctAnswer": "Man bezeichnet damit z.B. die an den Klemmen eines Widerstandes gemessene Potentialdifferenz."
  },
  {
    "nummer": "2.4",
    "chapter": 2,
    "chapterTitle": "Elektrizität, Magnetismus und Funktheorie",
    "question": "In welcher Gruppe kommen nur Halbleitermaterialien vor?",
    "options": [
      "Selen, Eisen, Silizium",
      "Gold, Germanium, Silizium",
      "Kupfer, Selen, Germanium",
      "Selen, Germanium, Silizium"
    ],
    "correctIndex": 3,
    "correctAnswer": "Selen, Germanium, Silizium"
  },
  {
    "nummer": "2.5",
    "chapter": 2,
    "chapterTitle": "Elektrizität, Magnetismus und Funktheorie",
    "question": "In welche Kategorie fallen die Materialien Germanium und Silizium?",
    "options": [
      "Leiter",
      "Isolatoren",
      "Halbleiter",
      "Nichtleiter"
    ],
    "correctIndex": 2,
    "correctAnswer": "Halbleiter"
  },
  {
    "nummer": "2.6",
    "chapter": 2,
    "chapterTitle": "Elektrizität, Magnetismus und Funktheorie",
    "question": "Welche Aussage ist richtig? Je grösser der Querschnitt eines Leiters desto...",
    "options": [
      "...kleiner der Widerstand.",
      "…grösser der Widerstand.",
      "…kleiner der spezifische Widerstand.",
      "…grösser der spezifische Widerstand."
    ],
    "correctIndex": 0,
    "correctAnswer": "...kleiner der Widerstand."
  },
  {
    "nummer": "2.7",
    "chapter": 2,
    "chapterTitle": "Elektrizität, Magnetismus und Funktheorie",
    "question": "Bei einer Serieschaltung von drei unterschiedlichen Widerständen sind die Teilspannungen über den einzelnen Widerständen...",
    "options": [
      "…überall gleich.",
      "…umgekehrt proportional zum Widerstandswert.",
      "...proportional zum Widerstandswert.",
      "…die Frage kann nicht eindeutig beantwortet werden."
    ],
    "correctIndex": 2,
    "correctAnswer": "...proportional zum Widerstandswert."
  },
  {
    "nummer": "2.8",
    "chapter": 2,
    "chapterTitle": "Elektrizität, Magnetismus und Funktheorie",
    "question": "Bei einer Serieschaltung von drei unterschiedlichen Widerständen ist der Strom in den einzelnen Widerständen...",
    "options": [
      "…überall gleich.",
      "…umgekehrt proportional zum Widerstandswert.",
      "...proportional zum Widerstandswert.",
      "…abhängig von den einzelnen Widerständen (bei gleichen Gesamtwiderstand)."
    ],
    "correctIndex": 0,
    "correctAnswer": "…überall gleich."
  },
  {
    "nummer": "2.10",
    "chapter": 2,
    "chapterTitle": "Elektrizität, Magnetismus und Funktheorie",
    "question": "Vier Widerstände, R1 = 100Ω, R2 = 500Ω, R3 = 1kΩ und R4 = 5kΩ sind parallel geschaltet. Die Ströme in den einzelnen Widerständen sind...",
    "options": [
      "…überall gleich.",
      "…umgekehrt proportional zum Widerstandswert.",
      "...proportional zum Widerstandswert.",
      "…die Frage kann nicht eindeutig beantwortet werden."
    ],
    "correctIndex": 1,
    "correctAnswer": "…umgekehrt proportional zum Widerstandswert."
  },
  {
    "nummer": "2.33",
    "chapter": 2,
    "chapterTitle": "Elektrizität, Magnetismus und Funktheorie",
    "question": "Wie verhält sich die magnetische Feldstärke einer bifilaren Wicklung bei einer Stromänderung von 1.8A in 200ms?",
    "options": [
      "Eine bifilare Wicklung erzeugt gegen aussen kein Magnetfeld; keine Änderung.",
      "Das gegen aussen erzeugte Magnetfeld wird grösser.",
      "Das gegen aussen erzeugte Magnetfeld wird kleiner.",
      "Die Auswirkungen sind abhängig vom verwendeten Material (Eisen, Kupfer) der Wicklung."
    ],
    "correctIndex": 0,
    "correctAnswer": "Eine bifilare Wicklung erzeugt gegen aussen kein Magnetfeld; keine Änderung."
  },
  {
    "nummer": "2.34",
    "chapter": 2,
    "chapterTitle": "Elektrizität, Magnetismus und Funktheorie",
    "question": "Wie verhält sich die magnetische Feldstärke um einen einzelnen Leiter?",
    "options": [
      "Sie ist proportional zum Strom.",
      "Sie ist umgekehrt proportional zum Strom.",
      "Sie ist unabhängig vom Strom.",
      "Sie ist abhängig vom Material des Leiters."
    ],
    "correctIndex": 0,
    "correctAnswer": "Sie ist proportional zum Strom."
  },
  {
    "nummer": "2.35",
    "chapter": 2,
    "chapterTitle": "Elektrizität, Magnetismus und Funktheorie",
    "question": "24.930MHz sind – verglichen mit der Wellenlänge von 12.010m – die ...",
    "options": [
      "... tiefere Frequenz",
      "... höhere Frequenz",
      "... gleiche Frequenz",
      "... kleinere Wellenlänge"
    ],
    "correctIndex": 0,
    "correctAnswer": "... tiefere Frequenz"
  },
  {
    "nummer": "2.36",
    "chapter": 2,
    "chapterTitle": "Elektrizität, Magnetismus und Funktheorie",
    "question": "Welche der aufgelisteten Frequenzen liegt im 15m Amateurfunkband?",
    "options": [
      "3777kHz",
      "14323kHz",
      "18092kHz",
      "21376kHz"
    ],
    "correctIndex": 3,
    "correctAnswer": "21376kHz"
  },
  {
    "nummer": "2.38",
    "chapter": 2,
    "chapterTitle": "Elektrizität, Magnetismus und Funktheorie",
    "question": "Wie stehen im elektromagnetischen Feld im freien Raum die Vektoren E und H zueinander?",
    "options": [
      "Sie stehen senkrecht zueinander.",
      "Sie weisen in die gleiche Richtung.",
      "Sie stehen 180° zueinander.",
      "Sie stehen 45° zueinander."
    ],
    "correctIndex": 0,
    "correctAnswer": "Sie stehen senkrecht zueinander."
  },
  {
    "nummer": "2.42",
    "chapter": 2,
    "chapterTitle": "Elektrizität, Magnetismus und Funktheorie",
    "question": "Wie nennt sich die in der Zeichnung mit „b“ bezeichnete Grösse?",
    "options": [
      "negative Halbwelle",
      "positive Halbwelle",
      "Periodendauer",
      "Amplitude"
    ],
    "correctIndex": 0,
    "correctAnswer": "negative Halbwelle"
  },
  {
    "nummer": "2.54",
    "chapter": 2,
    "chapterTitle": "Elektrizität, Magnetismus und Funktheorie",
    "question": "Ein ideales symmetrisches Rechtecksignal setzt sich wie folgt zusammen:",
    "options": [
      "aus einer Sinus-Grundwelle und theoretisch unendlich vielen ganzzahligen, ungeraden Harmonischen.",
      "aus einer Sinus Grundwelle und der 3. und 5. Harmonischen.",
      "aus einer Sinus Grundwelle und der 2. und 5. Harmonischen.",
      "aus einer Sinus Grundwelle und einer Anzahl Frequenzen die unterhalb der Grundwelle liegen."
    ],
    "correctIndex": 0,
    "correctAnswer": "aus einer Sinus-Grundwelle und theoretisch unendlich vielen ganzzahligen, ungeraden Harmonischen."
  },
  {
    "nummer": "2.55",
    "chapter": 2,
    "chapterTitle": "Elektrizität, Magnetismus und Funktheorie",
    "question": "Der Begriff \"Oberwellen\" bedeutet",
    "options": [
      "ganzzahlige Vielfache der Grundfrequenz.",
      "gradzahlige Vielfache der Grundfrequenz.",
      "ungradzahlige Vielfache der Grundfrequenz.",
      "das Bestreben eines HF-Stromes, an der Oberfläche eines Leiters zu fliessen."
    ],
    "correctIndex": 0,
    "correctAnswer": "ganzzahlige Vielfache der Grundfrequenz."
  },
  {
    "nummer": "2.56",
    "chapter": 2,
    "chapterTitle": "Elektrizität, Magnetismus und Funktheorie",
    "question": "Was sagt die Messgrösse Klirrfaktor eines NF-Signals aus?",
    "options": [
      "sie gibt die Grösse der Verzerrungen des Signals an.",
      "sie beschreibt den Frequenzgang einer Verstärker-Stufe.",
      "sie beschreibt die maximal mögliche Amplitude des Signals.",
      "sie beschreibt um welchen Faktor die hohen Frequenzen (> 4kHz) angehoben werden."
    ],
    "correctIndex": 0,
    "correctAnswer": "sie gibt die Grösse der Verzerrungen des Signals an."
  },
  {
    "nummer": "2.59",
    "chapter": 2,
    "chapterTitle": "Elektrizität, Magnetismus und Funktheorie",
    "question": "Bei der HF-Übertragung mittels AM wird die NF-Tonhöhe bestimmt durch...",
    "options": [
      "...die Frequenz der Hüllkurve.",
      "…die maximale Amplitude der Trägerfrequenz.",
      "…die Auslenkung der Trägerfrequenz (Frequenzhub).",
      "…den Modulationsgrad der Trägerfrequenz."
    ],
    "correctIndex": 0,
    "correctAnswer": "...die Frequenz der Hüllkurve."
  },
  {
    "nummer": "2.61",
    "chapter": 2,
    "chapterTitle": "Elektrizität, Magnetismus und Funktheorie",
    "question": "Welche Modulationsart stellt das KO-Bild dar?",
    "options": [
      "2-Ton SSB-Modulation (J3E)",
      "CW-Modulation (A1A)",
      "AM (A3E)",
      "FM (F3E)"
    ],
    "correctIndex": 0,
    "correctAnswer": "2-Ton SSB-Modulation (J3E)"
  },
  {
    "nummer": "3.3",
    "chapter": 3,
    "chapterTitle": "Bauelemente",
    "question": "Wie verändert sich der Innenwiderstand Ri eines Bleiakkus mit zunehmendem Alter?",
    "options": [
      "Ri wird grösser.",
      "Ri wird kleiner.",
      "Ri verändert sich nicht.",
      "Die Klemmenspannung fehlt."
    ],
    "correctIndex": 0,
    "correctAnswer": "Ri wird grösser."
  },
  {
    "nummer": "3.4",
    "chapter": 3,
    "chapterTitle": "Bauelemente",
    "question": "Der innere Widerstand eines Akkumulatorelementes und seine Speicherkapazität sind über die gesamte Lebensdauer betrachtet ...",
    "options": [
      "... proportional zueinander.",
      "... umgekehrt proportional zueinander.",
      "... voneinander absolut unabhängig.",
      "... immer gleichbleibend."
    ],
    "correctIndex": 1,
    "correctAnswer": "... umgekehrt proportional zueinander."
  },
  {
    "nummer": "3.5",
    "chapter": 3,
    "chapterTitle": "Bauelemente",
    "question": "Der Temperaturkoeffizient eines Widerstandes ist eine Zahl welche angibt...",
    "options": [
      "...um wie viel Ω sich ein Widerstand von 1Ω bei einer Temperaturänderung um 1°C verändert.",
      "…um wie viele Grad (°C) sich ein Widerstand bei einer bestimmten Belastung erwärmt.",
      "…bis zu welcher maximalen Temperatur ein Widerstand betrieben werden darf.",
      "…um wie viel sich ein Widerstand bei einer Temperaturänderung von 1° ausdehnt."
    ],
    "correctIndex": 0,
    "correctAnswer": "...um wie viel Ω sich ein Widerstand von 1Ω bei einer Temperaturänderung um 1°C verändert."
  },
  {
    "nummer": "3.6",
    "chapter": 3,
    "chapterTitle": "Bauelemente",
    "question": "Bei welchen Kondensatortypen müssen Sie auf richtige Polarität achten?",
    "options": [
      "Keramik Kondensatoren",
      "Metall-Papier-Kondensatoren",
      "Luftkondensatoren (Drehkondensatoren)",
      "Elektrolyt- und Tantalkondensatoren"
    ],
    "correctIndex": 3,
    "correctAnswer": "Elektrolyt- und Tantalkondensatoren"
  },
  {
    "nummer": "3.7",
    "chapter": 3,
    "chapterTitle": "Bauelemente",
    "question": "Wie verhält sich die Kapazität eines Luftkondensators wenn der Plattenabstand verdoppelt wird?",
    "options": [
      "Die Kapazität wird halbiert.",
      "Die Kapazität wird verdoppelt.",
      "Die Kapazität wird um den Faktor 2 kleiner.",
      "Die Kapazität wird um den Faktor 2 grösser."
    ],
    "correctIndex": 0,
    "correctAnswer": "Die Kapazität wird halbiert."
  },
  {
    "nummer": "3.8",
    "chapter": 3,
    "chapterTitle": "Bauelemente",
    "question": "Welche der folgenden Kurven stellt das Verhalten einer Kapazität dar?",
    "options": [
      "a)",
      "b)",
      "c)",
      "d)"
    ],
    "correctIndex": 3,
    "correctAnswer": "d)"
  },
  {
    "nummer": "3.10",
    "chapter": 3,
    "chapterTitle": "Bauelemente",
    "question": "Durch Parallelschaltung von zwei gleichen Spulen - ohne gegenseitige Kopplung – wird die Induktivität...",
    "options": [
      "…halbiert.",
      "…verdoppelt.",
      "…um den Faktor 2 kleiner.",
      "…um den Faktor 2 grösser."
    ],
    "correctIndex": 0,
    "correctAnswer": "…halbiert."
  },
  {
    "nummer": "3.17",
    "chapter": 3,
    "chapterTitle": "Bauelemente",
    "question": "Wie verhalten sich bei einem Transformator die Stromstärken zu den Windungszahlen?",
    "options": [
      "proportional",
      "umgekehrt proportional",
      "kein Zusammenhang",
      "I1/I2 = n1/n2"
    ],
    "correctIndex": 1,
    "correctAnswer": "umgekehrt proportional"
  },
  {
    "nummer": "3.18",
    "chapter": 3,
    "chapterTitle": "Bauelemente",
    "question": "Warum wird ein Netztransformator mit einem Paket aus isolierten Einzelblechen aufgebaut und nicht mit einem massiven Eisenkern?",
    "options": [
      "Um den Zusammenbau zu vereinfachen.",
      "Um die Wärmeableitung zu verbessern.",
      "Als Schutz vor Überspannungen.",
      "Um die Wirbelstromverluste möglichst klein zu halten."
    ],
    "correctIndex": 3,
    "correctAnswer": "Um die Wirbelstromverluste möglichst klein zu halten."
  },
  {
    "nummer": "4.20",
    "chapter": 4,
    "chapterTitle": "Schaltungen",
    "question": "Die nachstehende Schaltung ist ...",
    "options": [
      "... ein Tiefpass.",
      "... ein Hochpass.",
      "... ein Bandpass.",
      "... eine Bandsperre."
    ],
    "correctIndex": 0,
    "correctAnswer": "... ein Tiefpass."
  },
  {
    "nummer": "4.22",
    "chapter": 4,
    "chapterTitle": "Schaltungen",
    "question": "Im folgenden Schaltbild ist ein passiver Vierpol dargestellt. Welches der 4 Diagramme zeigt den charakteristischen Verlauf der Ausgangsspannung Uout in Abhängigkeit der Frequenz f?",
    "options": [
      "a)",
      "b)",
      "c)",
      "d)"
    ],
    "correctIndex": 1,
    "correctAnswer": "b)"
  },
  {
    "nummer": "4.30",
    "chapter": 4,
    "chapterTitle": "Schaltungen",
    "question": "Die nachstehende Schaltung ist…",
    "options": [
      "... ein Tiefpass.",
      "... ein Hochpass.",
      "... ein Bandpass.",
      "... eine Bandsperre."
    ],
    "correctIndex": 0,
    "correctAnswer": "... ein Tiefpass."
  },
  {
    "nummer": "4.31",
    "chapter": 4,
    "chapterTitle": "Schaltungen",
    "question": "Im folgenden Schaltbild ist ein passiver Vierpol dargestellt. Welches der vier Diagramme zeigt den charakteristischen Verlauf der Ausgangsspannung Uout in Abhängigkeit der Frequenz f?",
    "options": [
      "a)",
      "b)",
      "c)",
      "d)"
    ],
    "correctIndex": 0,
    "correctAnswer": "a)"
  },
  {
    "nummer": "4.32",
    "chapter": 4,
    "chapterTitle": "Schaltungen",
    "question": "Welches der vier Diagramme zeigt die Resonanzkurve eines Serieschwingkreises?",
    "options": [
      "a)",
      "b)",
      "c)",
      "d)"
    ],
    "correctIndex": 2,
    "correctAnswer": "c)"
  },
  {
    "nummer": "4.33",
    "chapter": 4,
    "chapterTitle": "Schaltungen",
    "question": "Welches der vier Diagramme zeigt die Resonanzkurve eines Parallelschwingkreises?",
    "options": [
      "a)",
      "b)",
      "c)",
      "d)"
    ],
    "correctIndex": 0,
    "correctAnswer": "a)"
  },
  {
    "nummer": "4.39",
    "chapter": 4,
    "chapterTitle": "Schaltungen",
    "question": "Die Resonanzfrequenz eines Sperrkreises soll auf den halben Wert gebracht werden. Wie muss die Induktivität verändert werden, wenn die Kapazität unverändert bleibt?",
    "options": [
      "um den Faktor 2 vergrössert",
      "um den Faktor 4 vergrössert",
      "um den Faktor 2 verkleinert",
      "um den Faktor 4 verkleinert"
    ],
    "correctIndex": 1,
    "correctAnswer": "um den Faktor 4 vergrössert"
  },
  {
    "nummer": "4.53",
    "chapter": 4,
    "chapterTitle": "Schaltungen",
    "question": "Welche Gleichung trifft für den Resonanzfall eines Schwingkreises zu?",
    "options": [
      "Der Blindwiderstand der Spule ist grösser als derjenige des Kondensators (XL > XC).",
      "Der Blindwiderstand der Spule ist kleiner als derjenige des Kondensators (XL < XC).",
      "Die Blindwiderstände der Spule und des Kondensators sind gleich (XL = XC)",
      "Die Verluste der Spule und des Kondensators sind gleich (VL = VC)."
    ],
    "correctIndex": 2,
    "correctAnswer": "Die Blindwiderstände der Spule und des Kondensators sind gleich (XL = XC)"
  },
  {
    "nummer": "4.56",
    "chapter": 4,
    "chapterTitle": "Schaltungen",
    "question": "Ein Brückengleichrichter wird mit 141.4V Wechselspannung (Ueff.) gespiesen. Wie gross ist die unbelastete Gleichspannung – nach dem Siebglied gemessen – am Ausgang?",
    "options": [
      "100V",
      "141.4V",
      "200V",
      "282.8V"
    ],
    "correctIndex": 2,
    "correctAnswer": "200V"
  },
  {
    "nummer": "4.58",
    "chapter": 4,
    "chapterTitle": "Schaltungen",
    "question": "Welche Kurvenform hat die Spannung Uout?",
    "options": [
      "a)",
      "b)",
      "c)",
      "d)"
    ],
    "correctIndex": 0,
    "correctAnswer": "a)"
  },
  {
    "nummer": "4.71",
    "chapter": 4,
    "chapterTitle": "Schaltungen",
    "question": "Welche der drei Transistor-Grundschaltungen hat die grösste Eingangsimpedanz?",
    "options": [
      "die Basisschaltung",
      "die Kollektorschaltung",
      "die Emitterschaltung",
      "Sie ist bei den drei Grundschaltungen immer gleich."
    ],
    "correctIndex": 1,
    "correctAnswer": "die Kollektorschaltung"
  },
  {
    "nummer": "4.72",
    "chapter": 4,
    "chapterTitle": "Schaltungen",
    "question": "Welche der drei Transistor-Grundschaltungen hat die grösste Leistungsverstärkung?",
    "options": [
      "die Basisschaltung",
      "die Kollektorschaltung",
      "die Emitterschaltung",
      "Sie ist bei den drei Grundschaltungen immer gleich."
    ],
    "correctIndex": 2,
    "correctAnswer": "die Emitterschaltung"
  },
  {
    "nummer": "4.82",
    "chapter": 4,
    "chapterTitle": "Schaltungen",
    "question": "Durch welche schaltungstechnische Massnahme kann ein Verstärker am unerwünschten Schwingen gehindert werden?",
    "options": [
      "durch Gegenkopplung",
      "durch Mitkopplung",
      "nach Möglichkeit keine Kondensatoren verwenden",
      "Betriebsspannung möglichst klein wählen"
    ],
    "correctIndex": 0,
    "correctAnswer": "durch Gegenkopplung"
  },
  {
    "nummer": "4.92",
    "chapter": 4,
    "chapterTitle": "Schaltungen",
    "question": "Welcher der aufgeführten Oszillatoren hat die beste Frequenzstabilität?",
    "options": [
      "Quarzoszillator",
      "LC-Oszillator",
      "RC-Oszillator",
      "VCO"
    ],
    "correctIndex": 0,
    "correctAnswer": "Quarzoszillator"
  },
  {
    "nummer": "4.94",
    "chapter": 4,
    "chapterTitle": "Schaltungen",
    "question": "Bei den technischen Daten Ihres 70cm Gerätes steht unter anderem: Frequenztoleranz bei 435.000MHz: ±2 x 10-6. Was bedeutet diese Angabe?",
    "options": [
      "Frequenzabweichung bei 435MHz maximal ±870Hz.",
      "Frequenzabweichung bei 435MHz maximal ±2Hz.",
      "Bandbreite der Endstufe 870Hz.",
      "Bandbreite der Endstufe 2MHz."
    ],
    "correctIndex": 0,
    "correctAnswer": "Frequenzabweichung bei 435MHz maximal ±870Hz."
  },
  {
    "nummer": "5.1",
    "chapter": 5,
    "chapterTitle": "Empfänger",
    "question": "Welcher Unterschied besteht im technischen Konzept zwischen einem Geradeaus- und einem Überlagerungs-Empfänger?",
    "options": [
      "Beim Geradeaus-Empfänger erfolgt die Demodulation auf der Empfangsfrequenz.",
      "Beim Geradeaus-Empfänger erfolgt die Demodulation auf der Zwischenfrequenz.",
      "Beim Überlagerungs-Empfänger ist die demodulierte NF-Spannung grösser.",
      "Beim Überlagerungs-Empfänger erfolgt die Demodulation auf der Empfangsfrequenz."
    ],
    "correctIndex": 0,
    "correctAnswer": "Beim Geradeaus-Empfänger erfolgt die Demodulation auf der Empfangsfrequenz."
  },
  {
    "nummer": "5.9",
    "chapter": 5,
    "chapterTitle": "Empfänger",
    "question": "Welche Aufgaben hat die HF-Vorstufe eines Empfängers unter anderem?",
    "options": [
      "Verbessern der Empfindlichkeit",
      "Stabilisieren des Oszillators",
      "Zuführen des BFO-Signals bei SSB-Empfang (J3E)",
      "Empfangssignal in die ZF (IF)–Lage transferieren"
    ],
    "correctIndex": 0,
    "correctAnswer": "Verbessern der Empfindlichkeit"
  },
  {
    "nummer": "5.10",
    "chapter": 5,
    "chapterTitle": "Empfänger",
    "question": "Welche Funktion hat der Begrenzer in einem Empfänger?",
    "options": [
      "Unterdrückung von AM-Anteilen bei FM-Empfang (F3E)",
      "Rauschunterdrückung bei kleinen Signalen",
      "Verbesserung des Signal/Rausch-Abstandes",
      "Linearisierung der FM-Demodulation"
    ],
    "correctIndex": 0,
    "correctAnswer": "Unterdrückung von AM-Anteilen bei FM-Empfang (F3E)"
  },
  {
    "nummer": "5.11",
    "chapter": 5,
    "chapterTitle": "Empfänger",
    "question": "Welche Aufgaben hat die automatische Verstärkungsregelung AVC (automatic volume control), auch AGC (automatic gain control) genannt, eines Empfängers?",
    "options": [
      "Konstanthaltung des ZF-Signals am Demodulator",
      "Ausblenden von steilflankigen Störsignalen",
      "Begrenzung der Ausgangsspannung des NF-Verstärkers",
      "Reduktion des Stromverbrauchs bei batteriebetriebenen Geräten"
    ],
    "correctIndex": 0,
    "correctAnswer": "Konstanthaltung des ZF-Signals am Demodulator"
  },
  {
    "nummer": "5.12",
    "chapter": 5,
    "chapterTitle": "Empfänger",
    "question": "Welche Aufgabe hat der Überlagerungsoszillator BFO (beat frequency oscillator)?",
    "options": [
      "Abstimmhilfe durch Überlagerungston.",
      "Liefert bei den Betriebsarten CW und SSB die zur Demodulation fehlende Trägerfrequenz.",
      "Er dient zum Verschieben der ZF-Nulllage.",
      "Er steuert die ALC."
    ],
    "correctIndex": 1,
    "correctAnswer": "Liefert bei den Betriebsarten CW und SSB die zur Demodulation fehlende Trägerfrequenz."
  },
  {
    "nummer": "5.13",
    "chapter": 5,
    "chapterTitle": "Empfänger",
    "question": "Weshalb wird der Frequenzgang der NF-Verstärker in Amateurfunkgeräten auf 300Hz - 3kHz beschränkt?",
    "options": [
      "zur Reduktion der Bandbreite",
      "zur Verstärkung des modulierten Signals",
      "zur Reduktion des Stromverbrauchs bei batteriebetriebenen Geräten.",
      "Hohe Frequenzen werden so besser hörbar."
    ],
    "correctIndex": 0,
    "correctAnswer": "zur Reduktion der Bandbreite"
  },
  {
    "nummer": "5.14",
    "chapter": 5,
    "chapterTitle": "Empfänger",
    "question": "Was bewirkt ein Störaustaster (noise blanker)?",
    "options": [
      "Er unterdrückt Störimpulse.",
      "Er reduziert das Rauschen.",
      "Er unterdrückt AM-Anteile bei FM-Betrieb.",
      "Er zeigt Störungen an."
    ],
    "correctIndex": 0,
    "correctAnswer": "Er unterdrückt Störimpulse."
  },
  {
    "nummer": "5.15",
    "chapter": 5,
    "chapterTitle": "Empfänger",
    "question": "Was bewirkt die unabhängige Empfängerverstimmung RIT (receiver incremental tuning), auch „Clarifier“ genannt?",
    "options": [
      "RIT erlaubt die Sendefrequenz unabhängig von der Empfangsfrequenz, um einen geringen Betrag (fTx ca. ±10kHz) zu verschieben.",
      "RIT erlaubt die Empfangsfrequenz unabhängig von der Sendefrequenz, um einen geringen Betrag (fRx ca. ±10kHz) zu verschieben.",
      "RIT erlaubt die Empfängerempfindlichkeit um einen geringen Betrag zu verändern.",
      "RIT erlaubt die Mittenfrequenz des ZF-Filters um einen geringen Betrag zu verändern (fZF ca. ±10kHz)."
    ],
    "correctIndex": 1,
    "correctAnswer": "RIT erlaubt die Empfangsfrequenz unabhängig von der Sendefrequenz, um einen geringen Betrag (fRx ca. ±10kHz) zu verschieben."
  },
  {
    "nummer": "5.16",
    "chapter": 5,
    "chapterTitle": "Empfänger",
    "question": "Was versteht man unter „IF-Shift“?",
    "options": [
      "„IF-Shift“ gestattet die Mittenfrequenz des Vorverstärkers zu verschieben.",
      "„IF-Shift“ erhöht die Selektivität der Empfängers.",
      "„IF-Shift“ gestattet die Verschiebung der ZF-Mittenfrequenz.",
      "„IF-Shift“ gestattet die Verringerung der ZF-Bandbreite."
    ],
    "correctIndex": 2,
    "correctAnswer": "„IF-Shift“ gestattet die Verschiebung der ZF-Mittenfrequenz."
  },
  {
    "nummer": "5.17",
    "chapter": 5,
    "chapterTitle": "Empfänger",
    "question": "Was versteht man unter einem Kerbfilter (Notchfilter)?",
    "options": [
      "Ein Filter zum Dämpfen breitbandiger Störungen.",
      "Ein Filter zum Dämpfen von Impulsstörungen (Viehhüter).",
      "Ein Filter zum Dämpfen einer einzelnen Störfrequenz.",
      "Ein Filter zum Dämpfen aller Frequenzen innerhalb eines kleinen Frequenzbereichs."
    ],
    "correctIndex": 3,
    "correctAnswer": "Ein Filter zum Dämpfen aller Frequenzen innerhalb eines kleinen Frequenzbereichs."
  },
  {
    "nummer": "5.18",
    "chapter": 5,
    "chapterTitle": "Empfänger",
    "question": "Was verstehen Sie unter dem Begriff „Squelch“?",
    "options": [
      "Eine Schaltung zur Begrenzung der ZF-Bandbreite im Empfänger.",
      "Eine Schaltung welche den NF-Verstärker im Empfänger sperrt, wenn kein HF-Signal anliegt.",
      "Eine Schaltung welche den NF-Verstärker im Empfänger einschaltet, wenn kein HF-Signal anliegt.",
      "Eine Schaltung welche den NF-Verstärker im Empfänger sperrt, wenn ein HF-Signal anliegt."
    ],
    "correctIndex": 1,
    "correctAnswer": "Eine Schaltung welche den NF-Verstärker im Empfänger sperrt, wenn kein HF-Signal anliegt."
  },
  {
    "nummer": "5.20",
    "chapter": 5,
    "chapterTitle": "Empfänger",
    "question": "Sie vergleichen die technischen Daten von zwei Empfängern miteinander. Empfänger A hat ein Signal / Rauschverhältnis von 12dB bei 0.4µV, Empfänger B ein solches von 20dB bei ebenfalls 0.4µV. Welcher Empfänger ist empfindlicher?",
    "options": [
      "Empfänger A",
      "Empfänger B",
      "beide Empfänger sind gleich empfindlich",
      "Für einen Vergleich muss die Rauschzahl angegeben sein."
    ],
    "correctIndex": 1,
    "correctAnswer": "Empfänger B"
  },
  {
    "nummer": "5.28",
    "chapter": 5,
    "chapterTitle": "Empfänger",
    "question": "Welche Baugruppe bestimmt die Rauschzahl und die Empfindlichkeit eines Empfängers?",
    "options": [
      "die Mischstufe",
      "der ZF-Verstärker",
      "der NF-Verstärker",
      "die HF-Vorstufe"
    ],
    "correctIndex": 3,
    "correctAnswer": "die HF-Vorstufe"
  },
  {
    "nummer": "5.29",
    "chapter": 5,
    "chapterTitle": "Empfänger",
    "question": "Bei Empfangsanlagen über 30MHz kann der richtige Einbau eines zusätzlichen rauscharmen HF-Vorverstärkers die Empfindlichkeit wesentlich verbessern. An welchem Punkt (Ort) der Anlage ist dieser einzubauen?",
    "options": [
      "unmittelbar am Eingang des Gerätes",
      "unmittelbar bei der Antenne",
      "Es spielt keine Rolle wo der Verstärker eingebaut wird.",
      "Das kann nur durch Messungen ermittelt werden."
    ],
    "correctIndex": 1,
    "correctAnswer": "unmittelbar bei der Antenne"
  },
  {
    "nummer": "5.35",
    "chapter": 5,
    "chapterTitle": "Empfänger",
    "question": "Welche Funktion hat ein Notch-Filter (Kerb-Filter) in einem Empfänger?",
    "options": [
      "dämpfen breitbandiger Störungen",
      "dämpfen von Impulsstörungen (Viehhüter)",
      "dämpfen einer einzelnen Störfrequenz",
      "dämpfen aller Frequenzen innerhalb eines kleinen Frequenzbereichs nahe der Empfangsfrequenz"
    ],
    "correctIndex": 3,
    "correctAnswer": "dämpfen aller Frequenzen innerhalb eines kleinen Frequenzbereichs nahe der Empfangsfrequenz"
  },
  {
    "nummer": "6.3",
    "chapter": 6,
    "chapterTitle": "Sender",
    "question": "Was ist ein Frequenzvervielfacher?",
    "options": [
      "Eine Baugruppe mit linearer Kennlinie, deren Ausgangssignal ein Vielfaches des Eingangssignals beträgt.",
      "Eine Baugruppe mit nichtlinearer Kennlinie, deren Ausgangssignal einen Oberwellenanteil des Eingangssignals enthält, der anschliessend herausgefiltert wird.",
      "Eine Schaltung, welche die Modulationsfrequenz verdoppelt.",
      "Ein Verstärker, der die Leistung vervielfacht."
    ],
    "correctIndex": 1,
    "correctAnswer": "Eine Baugruppe mit nichtlinearer Kennlinie, deren Ausgangssignal einen Oberwellenanteil des Eingangssignals enthält, der anschliessend herausgefiltert wird."
  },
  {
    "nummer": "6.4",
    "chapter": 6,
    "chapterTitle": "Sender",
    "question": "Was ist ein Mischer?",
    "options": [
      "Eine Schaltung, mit der NF und HF addiert werden.",
      "Eine Schaltung, die zwei Frequenzen multipliziert und dabei Summen- und Differenzfrequenzen erzeugt.",
      "Eine Schaltung, die nur die Differenzfrequenz erzeugt.",
      "Eine Schaltung zum Vermischen von Ober- und Unterwelle."
    ],
    "correctIndex": 1,
    "correctAnswer": "Eine Schaltung, die zwei Frequenzen multipliziert und dabei Summen- und Differenzfrequenzen erzeugt."
  },
  {
    "nummer": "6.5",
    "chapter": 6,
    "chapterTitle": "Sender",
    "question": "Welche Aussage zur SSB-Erzeugung trifft zu?",
    "options": [
      "SSB wird direkt durch Frequenzmodulation erzeugt.",
      "SSB entsteht aus einem Doppelseitenbandsignal, bei dem ein Seitenband und der Träger unterdrückt werden.",
      "SSB ist identisch mit AM.",
      "SSB benötigt keine Trägerunterdrückung."
    ],
    "correctIndex": 1,
    "correctAnswer": "SSB entsteht aus einem Doppelseitenbandsignal, bei dem ein Seitenband und der Träger unterdrückt werden."
  },
  {
    "nummer": "6.8",
    "chapter": 6,
    "chapterTitle": "Sender",
    "question": "Welche Schaltungsgruppe verhindert bei einem Sender die Abstrahlung von Oberwellen?",
    "options": [
      "NF-Verstärker",
      "Tiefpassfilter",
      "Squelch",
      "AGC"
    ],
    "correctIndex": 1,
    "correctAnswer": "Tiefpassfilter"
  },
  {
    "nummer": "7.1",
    "chapter": 7,
    "chapterTitle": "Antennen und Antennenzuleitungen",
    "question": "Wie gross ist die Wellenlänge einer Frequenz von 145MHz ungefähr?",
    "options": [
      "20m",
      "10m",
      "2m",
      "70cm"
    ],
    "correctIndex": 2,
    "correctAnswer": "2m"
  },
  {
    "nummer": "7.2",
    "chapter": 7,
    "chapterTitle": "Antennen und Antennenzuleitungen",
    "question": "Welche Antenne ist ein Halbwellendipol?",
    "options": [
      "Eine Antenne mit gesamter Länge λ/2",
      "Eine Antenne mit gesamter Länge λ/4",
      "Eine Antenne mit gesamter Länge λ",
      "Eine Antenne mit gesamter Länge 2λ"
    ],
    "correctIndex": 0,
    "correctAnswer": "Eine Antenne mit gesamter Länge λ/2"
  },
  {
    "nummer": "7.3",
    "chapter": 7,
    "chapterTitle": "Antennen und Antennenzuleitungen",
    "question": "Welche Eigenschaft hat ein λ/4-Monopol über idealer Massefläche?",
    "options": [
      "Er entspricht einem halben Dipol und hat Rundstrahlcharakteristik.",
      "Er strahlt nur nach oben.",
      "Er ist ein Richtstrahler.",
      "Er benötigt keinen Gegengewichtspunkt."
    ],
    "correctIndex": 0,
    "correctAnswer": "Er entspricht einem halben Dipol und hat Rundstrahlcharakteristik."
  },
  {
    "nummer": "7.4",
    "chapter": 7,
    "chapterTitle": "Antennen und Antennenzuleitungen",
    "question": "Was bedeutet SWR?",
    "options": [
      "Sendewellenrest",
      "Stehwellenverhältnis",
      "Spulenwiderstand",
      "Signalwechselrate"
    ],
    "correctIndex": 1,
    "correctAnswer": "Stehwellenverhältnis"
  },
  {
    "nummer": "7.5",
    "chapter": 7,
    "chapterTitle": "Antennen und Antennenzuleitungen",
    "question": "Was bedeutet ein SWR von 1:1?",
    "options": [
      "Totale Fehlanpassung",
      "Perfekte Anpassung",
      "Nur halbe Leistung wird übertragen",
      "Antenne ist defekt"
    ],
    "correctIndex": 1,
    "correctAnswer": "Perfekte Anpassung"
  },
  {
    "nummer": "7.6",
    "chapter": 7,
    "chapterTitle": "Antennen und Antennenzuleitungen",
    "question": "Welche Leitung ist typisch unsymmetrisch?",
    "options": [
      "Koaxialkabel",
      "Hühnerleiter",
      "Bandleitung",
      "Zweidrahtleitung symmetrisch"
    ],
    "correctIndex": 0,
    "correctAnswer": "Koaxialkabel"
  },
  {
    "nummer": "7.7",
    "chapter": 7,
    "chapterTitle": "Antennen und Antennenzuleitungen",
    "question": "Wozu dient ein Balun?",
    "options": [
      "Zur Spannungsvervielfachung",
      "Zur Anpassung zwischen symmetrisch und unsymmetrisch",
      "Zur NF-Verstärkung",
      "Zur Unterdrückung aller Oberwellen"
    ],
    "correctIndex": 1,
    "correctAnswer": "Zur Anpassung zwischen symmetrisch und unsymmetrisch"
  },
  {
    "nummer": "7.8",
    "chapter": 7,
    "chapterTitle": "Antennen und Antennenzuleitungen",
    "question": "Welche Eigenschaft hat eine Yagi-Antenne?",
    "options": [
      "Sie ist ein Rundstrahler.",
      "Sie ist eine Richtantenne.",
      "Sie ist immer vertikal polarisiert.",
      "Sie braucht keine Speiseleitung."
    ],
    "correctIndex": 1,
    "correctAnswer": "Sie ist eine Richtantenne."
  },
  {
    "nummer": "7.9",
    "chapter": 7,
    "chapterTitle": "Antennen und Antennenzuleitungen",
    "question": "Wie wirkt sich Leitungsdämpfung aus?",
    "options": [
      "Sie erhöht die Antennenverstärkung.",
      "Sie verringert die übertragene Leistung.",
      "Sie verbessert das SWR.",
      "Sie verändert die Frequenz."
    ],
    "correctIndex": 1,
    "correctAnswer": "Sie verringert die übertragene Leistung."
  },
  {
    "nummer": "7.10",
    "chapter": 7,
    "chapterTitle": "Antennen und Antennenzuleitungen",
    "question": "Welche Polarisation hat ein senkrechter λ/4-Strahler typischerweise?",
    "options": [
      "horizontal",
      "zirkular",
      "vertikal",
      "elliptisch"
    ],
    "correctIndex": 2,
    "correctAnswer": "vertikal"
  },
  {
    "nummer": "8.1",
    "chapter": 8,
    "chapterTitle": "Wellenausbreitung",
    "question": "Welche Schicht der Ionosphäre ist für Kurzwellenverbindungen besonders wichtig?",
    "options": [
      "Troposphäre",
      "D- und F-Schichten",
      "Ozonschicht",
      "Magnetosphäre"
    ],
    "correctIndex": 1,
    "correctAnswer": "D- und F-Schichten"
  },
  {
    "nummer": "8.2",
    "chapter": 8,
    "chapterTitle": "Wellenausbreitung",
    "question": "Welche Frequenzen werden tagsüber in der D-Schicht stärker gedämpft?",
    "options": [
      "tiefe Kurzwellenfrequenzen",
      "UKW",
      "Mikrowellen",
      "alle gleich"
    ],
    "correctIndex": 0,
    "correctAnswer": "tiefe Kurzwellenfrequenzen"
  },
  {
    "nummer": "8.3",
    "chapter": 8,
    "chapterTitle": "Wellenausbreitung",
    "question": "Was bedeutet Bodenwelle?",
    "options": [
      "Ausbreitung entlang der Erdoberfläche",
      "Reflexion an der Ionosphäre",
      "Ausbreitung über Satelliten",
      "Nur Ausbreitung im Kabel"
    ],
    "correctIndex": 0,
    "correctAnswer": "Ausbreitung entlang der Erdoberfläche"
  },
  {
    "nummer": "8.4",
    "chapter": 8,
    "chapterTitle": "Wellenausbreitung",
    "question": "Was bedeutet Raumwelle?",
    "options": [
      "Eine Welle im Weltall",
      "Eine über Reflexion in der Ionosphäre ausgebreitete Welle",
      "Eine Leitungsschwingung",
      "Eine Bodenwelle auf UKW"
    ],
    "correctIndex": 1,
    "correctAnswer": "Eine über Reflexion in der Ionosphäre ausgebreitete Welle"
  },
  {
    "nummer": "8.5",
    "chapter": 8,
    "chapterTitle": "Wellenausbreitung",
    "question": "Welche Ausbreitungsart ist im 2m-Band meist dominant?",
    "options": [
      "Boden- bzw. Sichtwelle",
      "nur Ionosphärenwelle",
      "nur Raumwelle via F2",
      "nur D-Schicht-Reflexion"
    ],
    "correctIndex": 0,
    "correctAnswer": "Boden- bzw. Sichtwelle"
  },
  {
    "nummer": "9.1",
    "chapter": 9,
    "chapterTitle": "Messtechnik",
    "question": "Wozu dient ein Voltmeter?",
    "options": [
      "Zum Messen des Stroms",
      "Zum Messen des Widerstands",
      "Zum Messen der Spannung",
      "Zum Messen der Frequenz"
    ],
    "correctIndex": 2,
    "correctAnswer": "Zum Messen der Spannung"
  },
  {
    "nummer": "9.2",
    "chapter": 9,
    "chapterTitle": "Messtechnik",
    "question": "Wie wird ein Amperemeter idealerweise in den Stromkreis eingefügt?",
    "options": [
      "parallel",
      "in Serie",
      "über einen Kondensator",
      "gar nicht direkt"
    ],
    "correctIndex": 1,
    "correctAnswer": "in Serie"
  },
  {
    "nummer": "9.3",
    "chapter": 9,
    "chapterTitle": "Messtechnik",
    "question": "Wie wird ein Voltmeter idealerweise angeschlossen?",
    "options": [
      "in Serie",
      "parallel zum Messobjekt",
      "an den Schutzleiter",
      "nur über Transformator"
    ],
    "correctIndex": 1,
    "correctAnswer": "parallel zum Messobjekt"
  },
  {
    "nummer": "9.4",
    "chapter": 9,
    "chapterTitle": "Messtechnik",
    "question": "Was misst ein Ohmmeter?",
    "options": [
      "Leistung",
      "Kapazität",
      "Widerstand",
      "Induktivität"
    ],
    "correctIndex": 2,
    "correctAnswer": "Widerstand"
  },
  {
    "nummer": "9.5",
    "chapter": 9,
    "chapterTitle": "Messtechnik",
    "question": "Wozu dient ein SWR-Meter?",
    "options": [
      "Zum Messen des Stehwellenverhältnisses",
      "Zum Messen der NF-Spannung",
      "Zum Messen der Batteriekapazität",
      "Zum Messen der Modulationstiefe"
    ],
    "correctIndex": 0,
    "correctAnswer": "Zum Messen des Stehwellenverhältnisses"
  },
  {
    "nummer": "9.6",
    "chapter": 9,
    "chapterTitle": "Messtechnik",
    "question": "Welche Eigenschaft sollte ein Voltmeter möglichst haben?",
    "options": [
      "kleinen Innenwiderstand",
      "grossen Innenwiderstand",
      "niedrige Frequenz",
      "hohen Stromverbrauch"
    ],
    "correctIndex": 1,
    "correctAnswer": "grossen Innenwiderstand"
  },
  {
    "nummer": "10.1",
    "chapter": 10,
    "chapterTitle": "Störungen und Störschutz",
    "question": "Welche Massnahme hilft gegen leitungsgebundene HF-Störungen?",
    "options": [
      "Abschirmung und Filter",
      "höhere Sendeleistung",
      "kleinere Antenne",
      "mehr NF-Verstärkung"
    ],
    "correctIndex": 0,
    "correctAnswer": "Abschirmung und Filter"
  },
  {
    "nummer": "10.2",
    "chapter": 10,
    "chapterTitle": "Störungen und Störschutz",
    "question": "Wozu dienen Ferritkerne auf Leitungen?",
    "options": [
      "zur Kühlung",
      "zur Reduktion hochfrequenter Störungen",
      "zur Spannungsverdopplung",
      "zur Erhöhung der NF-Lautstärke"
    ],
    "correctIndex": 1,
    "correctAnswer": "zur Reduktion hochfrequenter Störungen"
  },
  {
    "nummer": "10.3",
    "chapter": 10,
    "chapterTitle": "Störungen und Störschutz",
    "question": "Was ist eine mögliche Ursache für TVI/BCI?",
    "options": [
      "unzureichende Entstörung oder Nichtlinearitäten in Geräten",
      "zu tiefe Batteriespannung",
      "zu kleine Sicherung",
      "zu grosser Lautsprecher"
    ],
    "correctIndex": 0,
    "correctAnswer": "unzureichende Entstörung oder Nichtlinearitäten in Geräten"
  },
  {
    "nummer": "11.1",
    "chapter": 11,
    "chapterTitle": "Schutz gegen elektrische Spannungen, Personenschutz",
    "question": "Welche Spannung kann für Menschen gefährlich sein?",
    "options": [
      "Nur 1V AC",
      "Spannungen, die zu gefährlichen Körperströmen führen",
      "Nur HF-Spannung",
      "Nur Spannungen über 10kV"
    ],
    "correctIndex": 1,
    "correctAnswer": "Spannungen, die zu gefährlichen Körperströmen führen"
  },
  {
    "nummer": "11.2",
    "chapter": 11,
    "chapterTitle": "Schutz gegen elektrische Spannungen, Personenschutz",
    "question": "Wozu dient der Schutzleiter?",
    "options": [
      "Zur Erhöhung der Sendeleistung",
      "Zum Schutz gegen gefährliche Berührungsspannungen",
      "Zur NF-Verstärkung",
      "Zur Frequenzstabilisierung"
    ],
    "correctIndex": 1,
    "correctAnswer": "Zum Schutz gegen gefährliche Berührungsspannungen"
  },
  {
    "nummer": "11.3",
    "chapter": 11,
    "chapterTitle": "Schutz gegen elektrische Spannungen, Personenschutz",
    "question": "Was bewirkt eine Sicherung?",
    "options": [
      "Sie erhöht den Strom.",
      "Sie unterbricht bei Überstrom den Stromkreis.",
      "Sie stabilisiert die Frequenz.",
      "Sie ersetzt den Schutzleiter."
    ],
    "correctIndex": 1,
    "correctAnswer": "Sie unterbricht bei Überstrom den Stromkreis."
  },
  {
    "nummer": "12.1",
    "chapter": 12,
    "chapterTitle": "Schutz vor nichtionisierender Strahlung, NIS",
    "question": "Was bedeutet NIS?",
    "options": [
      "Nichtionisierende Strahlung",
      "Niederfrequente Isolationsspannung",
      "Normierte Impedanzschwankung",
      "Nichtlineare Stromquelle"
    ],
    "correctIndex": 0,
    "correctAnswer": "Nichtionisierende Strahlung"
  },
  {
    "nummer": "12.2",
    "chapter": 12,
    "chapterTitle": "Schutz vor nichtionisierender Strahlung, NIS",
    "question": "Welche Schutzmassnahme ist bei Sendeantennen wichtig?",
    "options": [
      "Ausreichender Sicherheitsabstand",
      "lauter Lautsprecher",
      "mehr Mikrofonverstärkung",
      "grösseres SWR"
    ],
    "correctIndex": 0,
    "correctAnswer": "Ausreichender Sicherheitsabstand"
  },
  {
    "nummer": "13.1",
    "chapter": 13,
    "chapterTitle": "Blitzschutz",
    "question": "Welche Massnahme schützt eine Antennenanlage gegen Blitzschäden?",
    "options": [
      "nur hohe Sendeleistung",
      "Erdung und Blitzschutzmassnahmen",
      "kleineres Mikrofon",
      "NF-Filter"
    ],
    "correctIndex": 1,
    "correctAnswer": "Erdung und Blitzschutzmassnahmen"
  },
  {
    "nummer": "13.2",
    "chapter": 13,
    "chapterTitle": "Blitzschutz",
    "question": "Was ist bei Gewitter mit Antennenleitungen sinnvoll?",
    "options": [
      "am Gerät angeschlossen lassen",
      "möglichst gut sichern bzw. trennen nach Schutzkonzept",
      "mehr HF einspeisen",
      "SWR nachregeln"
    ],
    "correctIndex": 1,
    "correctAnswer": "möglichst gut sichern bzw. trennen nach Schutzkonzept"
  },
  {
    "nummer": "14.1",
    "chapter": 14,
    "chapterTitle": "Analoge und digitale Modulationsverfahren",
    "question": "Was bedeutet AM?",
    "options": [
      "Amplitudenmodulation",
      "Automatische Messung",
      "Antennenmodus",
      "Audio-Multiplex"
    ],
    "correctIndex": 0,
    "correctAnswer": "Amplitudenmodulation"
  },
  {
    "nummer": "14.2",
    "chapter": 14,
    "chapterTitle": "Analoge und digitale Modulationsverfahren",
    "question": "Was bedeutet FM?",
    "options": [
      "Frequenzmodulation",
      "Filtermodus",
      "Fernmessung",
      "Feldmessung"
    ],
    "correctIndex": 0,
    "correctAnswer": "Frequenzmodulation"
  },
  {
    "nummer": "14.3",
    "chapter": 14,
    "chapterTitle": "Analoge und digitale Modulationsverfahren",
    "question": "Was bedeutet SSB?",
    "options": [
      "Single Side Band",
      "Signal Switching Base",
      "Synchronous Side Buffer",
      "Symmetric Signal Band"
    ],
    "correctIndex": 0,
    "correctAnswer": "Single Side Band"
  },
  {
    "nummer": "14.4",
    "chapter": 14,
    "chapterTitle": "Analoge und digitale Modulationsverfahren",
    "question": "Welchen Vorteil hat SSB gegenüber AM?",
    "options": [
      "grösserer Bandbreitenbedarf",
      "bessere Ausnutzung von Leistung und Bandbreite",
      "höherer Trägeranteil",
      "keine Abstimmung nötig"
    ],
    "correctIndex": 1,
    "correctAnswer": "bessere Ausnutzung von Leistung und Bandbreite"
  },
  {
    "nummer": "14.5",
    "chapter": 14,
    "chapterTitle": "Analoge und digitale Modulationsverfahren",
    "question": "Welche Betriebsart ist typisch für Morse?",
    "options": [
      "FM",
      "A1A / CW",
      "AM Rundfunk",
      "RTTY nur"
    ],
    "correctIndex": 1,
    "correctAnswer": "A1A / CW"
  },
  {
    "nummer": "14.6",
    "chapter": 14,
    "chapterTitle": "Analoge und digitale Modulationsverfahren",
    "question": "Welche digitale Betriebsart arbeitet klassisch mit Shift-Keying?",
    "options": [
      "RTTY / FSK",
      "AM",
      "SSB Sprache",
      "CW nur"
    ],
    "correctIndex": 0,
    "correctAnswer": "RTTY / FSK"
  },
  {
    "nummer": "15.1",
    "chapter": 15,
    "chapterTitle": "Software Defined Radio (SDR) - Grundlagen",
    "question": "Was bedeutet SDR?",
    "options": [
      "Software Defined Radio",
      "Signal Direct Relay",
      "Standard Digital Receiver",
      "Simple Dual Radio"
    ],
    "correctIndex": 0,
    "correctAnswer": "Software Defined Radio"
  },
  {
    "nummer": "15.2",
    "chapter": 15,
    "chapterTitle": "Software Defined Radio (SDR) - Grundlagen",
    "question": "Welche Baugruppe ist bei SDR besonders zentral?",
    "options": [
      "A/D-Wandler mit digitaler Signalverarbeitung",
      "nur mechanischer Drehkondensator",
      "nur Röhrenendstufe",
      "nur Lautsprecher"
    ],
    "correctIndex": 0,
    "correctAnswer": "A/D-Wandler mit digitaler Signalverarbeitung"
  },
  {
    "nummer": "15.3",
    "chapter": 15,
    "chapterTitle": "Software Defined Radio (SDR) - Grundlagen",
    "question": "Warum ist beim SDR vor dem A/D-Wandler oft ein Tiefpass nötig?",
    "options": [
      "zur Lautstärkeregelung",
      "zur Vermeidung von Aliasing",
      "zur Kühlung",
      "zur Gleichrichtung"
    ],
    "correctIndex": 1,
    "correctAnswer": "zur Vermeidung von Aliasing"
  }
];
