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
      "42 x 103 A"
    ],
    "correctIndex": 2
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
    "correctIndex": 1
  },
  {
    "nummer": "1.3",
    "chapter": 1,
    "chapterTitle": "Allgemeine mathematische Grundkenntnisse und Grössen",
    "question": "100 mW entspricht",
    "options": [
      "0,01 W",
      "0,001 W",
      "10-2 W",
      "10-1 W"
    ],
    "correctIndex": 3
  },
  {
    "nummer": "1.4",
    "chapter": 1,
    "chapterTitle": "Allgemeine mathematische Grundkenntnisse und Grössen",
    "question": "4 200 000 Hz entspricht",
    "options": [
      "4,2 x 106 Hz",
      "4,2 x 105 Hz",
      "42 x 10-5 Hz",
      "42 x 106 Hz"
    ],
    "correctIndex": 0
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
    "correctIndex": 1
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
    "correctIndex": 3
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
    "correctIndex": 2
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
    "correctIndex": 1
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
    "correctIndex": 1
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
    "correctIndex": 0
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
    "correctIndex": 3
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
    "correctIndex": 1
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
    "correctIndex": 2
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
    "correctIndex": 2
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
    "correctIndex": 3
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
    "correctIndex": 2
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
    "correctIndex": 0
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
    "correctIndex": 2
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
    "correctIndex": 0
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
    "correctIndex": 1
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
    "correctIndex": 0
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
    "correctIndex": 0
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
    "correctIndex": 0
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
    "correctIndex": 3
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
    "correctIndex": 0
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
    "correctIndex": 0
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
    "correctIndex": 0
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
    "correctIndex": 0
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
    "correctIndex": 0
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
    "correctIndex": 0
  },
  {
    "nummer": "2.61",
    "chapter": 2,
    "chapterTitle": "Elektrizität, Magnetismus und Funktheorie",
    "question": "Welche Modulationsart stellt das KO-Bild dar?",
    "options": [
      "2-Ton SSB- Modulation (J3E)",
      "CW-Modulation (A1A)",
      "AM (A3E)",
      "FM (F3E)"
    ],
    "correctIndex": 0
  },
  {
    "nummer": "3.3",
    "chapter": 3,
    "chapterTitle": "Bauelemente",
    "question": "Wie verändert sich der Innenwiderstand R i eines Bleiakkus mit zunehmendem Alter?",
    "options": [
      "R i wird grösser.",
      "R i wird kleiner.",
      "R i verändert sich nicht.",
      "Die Klemmenspannung fehlt."
    ],
    "correctIndex": 0
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
    "correctIndex": 1
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
    "correctIndex": 0
  },
  {
    "nummer": "3.6",
    "chapter": 3,
    "chapterTitle": "Bauelemente",
    "question": "Bei welchen Kondensatortypen müssen Sie auf richtige Polarität achten?",
    "options": [
      "Ke ramik Kondensatoren",
      "Metall-Papier-Kondensatoren",
      "Luftkondensatoren (Drehkondensatoren)",
      "Elektrolyt- und Tantalkondensatoren"
    ],
    "correctIndex": 3
  },
  {
    "nummer": "3.7",
    "chapter": 3,
    "chapterTitle": "Bauelemente",
    "question": "Wie verhält sich die Kapazität eines Luftkondensators wenn der Plattenabstand verdoppelt wird?",
    "options": [
      "Die Kapazität wird halbiert.",
      "Die Kapazität wird verdoppelt.",
      "Die Kapazität wird um den Faktor 2  kleiner.",
      "Die Kapazität wird um den Faktor 2  grösser."
    ],
    "correctIndex": 0
  },
  {
    "nummer": "3.10",
    "chapter": 3,
    "chapterTitle": "Bauelemente",
    "question": "Durch Parallelschaltung von zwei gleichen Spulen - ohne gegenseitige Kopplung – wird die Induktivität...",
    "options": [
      "…halbiert.",
      "…verdoppelt.",
      "…um den Faktor 2  kleiner.",
      "…um den Faktor 2  grösser."
    ],
    "correctIndex": 0
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
      "I1/I2 = n2/n1"
    ],
    "correctIndex": 1
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
    "correctIndex": 3
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
    "correctIndex": 0
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
    "correctIndex": 0
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
    "correctIndex": 0
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
    "correctIndex": 0
  },
  {
    "nummer": "5.1",
    "chapter": 5,
    "chapterTitle": "Empfänger",
    "question": "Welcher Unterschied besteht im technischen Konzept zwischen einem Geradeaus- und einem Überlagerungs-Empfänger?",
    "options": [
      "Beim Geradeaus-Empfänger erfolgt die Demodulation auf der Empfangsfrequenz.",
      "Beim Geradeaus-Empfänger erfolgt die Demodulation auf der Zwischenfrequenz.",
      "Beim Überlagerungs-Empfänger ist die demodulierte NF- Spannung grösser.",
      "Beim Überlagerungs-Empfänger erfolgt die Demodulation auf der Empfangsfrequenz."
    ],
    "correctIndex": 0
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
    "correctIndex": 0
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
    "correctIndex": 0
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
    "correctIndex": 0
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
    "correctIndex": 1
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
    "correctIndex": 0
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
    "correctIndex": 0
  },
  {
    "nummer": "5.15",
    "chapter": 5,
    "chapterTitle": "Empfänger",
    "question": "Was bewirkt die unabhängige Empfängerverstimmung RIT (receiver incremental tuning), auch „Clarifier“ genannt?",
    "options": [
      "RIT erlaubt die Sendefrequenz unabhängig von der Empfangsfrequenz, um einen geringen Betrag (fTx  ca. ±10kHz) zu verschieben.",
      "RIT erlaubt die Empfangsfrequenz unabhängig von der Sendefrequenz, um einen geringen Betrag (fRx  ca. ±10kHz) zu verschieben.",
      "RIT erlaubt die Empfängerempfindlichkeit um einen geringen Betrag zu verändern.",
      "RIT erlaubt die Mittenfrequenz des ZF-Filters um einen geringen Betrag zu verändern (fZF  ca. ±10kHz)."
    ],
    "correctIndex": 1
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
    "correctIndex": 2
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
    "correctIndex": 3
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
    "correctIndex": 1
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
    "correctIndex": 1
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
    "correctIndex": 3
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
    "correctIndex": 1
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
    "correctIndex": 3
  },
  {
    "nummer": "6.3",
    "chapter": 6,
    "chapterTitle": "Sender",
    "question": "Was ist ein Frequenzvervielfacher?",
    "options": [
      "Eine Baugruppe mit linearer Kennlinie, deren Ausgangs- schwingkreis auf die Eingangsfrequenz abgestimmt ist.",
      "Eine Baugruppe mit linearer Kennlinie, deren Ausgangs- schwingkreis auf ein Vielfaches der Eingangsfrequenz abgestimmt ist.",
      "Eine Baugruppe mit nichtlinearer Kennlinie, deren Ausgangs- schwingkreis auf die Eingangsfrequenz abgestimmt ist.",
      "Eine Baugruppe mit nichtlinearer Kennlinie, deren Ausgangs- schwingkreis auf ein Vielfaches der Eingangsfrequenz abgestimmt ist."
    ],
    "correctIndex": 3
  },
  {
    "nummer": "6.5",
    "chapter": 6,
    "chapterTitle": "Sender",
    "question": "Welche Aufgabe hat eine Pufferstufe?",
    "options": [
      "Entkopplung von Oszillator- oder Mischstufen von vorangehenden oder nachfolgenden Baugruppen",
      "Verstärkung der vorangehenden Stufe",
      "Dämpfung der vorangehenden Stufe",
      "Rückkopplung des Signals zur vorangehenden Stufe"
    ],
    "correctIndex": 0
  },
  {
    "nummer": "6.7",
    "chapter": 6,
    "chapterTitle": "Sender",
    "question": "Welche Aufgabe hat die automatische Leistungsregelung ALC in einem Sender?",
    "options": [
      "Sie verbessert die Modulationstiefe bei SSB.",
      "Sie vermeidet die Überlastung der angeschlossenen Antenne.",
      "Sie hält den Mittelwert der Sendeleistung über einen bestimmten Bereich konstant.",
      "Sie verbessert die Anpassung zwischen Sender und Antenne."
    ],
    "correctIndex": 2
  },
  {
    "nummer": "6.10",
    "chapter": 6,
    "chapterTitle": "Sender",
    "question": "Wovon ist die belegte Bandbreite bei einem frequenzmodulierten Sender abhängig?",
    "options": [
      "von der Modulationsfrequenz und vom Frequenzhub",
      "von der Trägerleistung des Senders",
      "von der Trägerfrequenz des Senders",
      "von der Dauer der Übertragung"
    ],
    "correctIndex": 0
  },
  {
    "nummer": "6.11",
    "chapter": 6,
    "chapterTitle": "Sender",
    "question": "Wie wird bei Frequenzmodulation (F3E) die Lautstärke-Information übertragen?",
    "options": [
      "mit Hilfe der Preemphasis",
      "mit der Amplitude des HF-Signals",
      "mit der Geschwindigkeit der Frequenzauslenkung",
      "mit der Grösse der Frequenzauslenkung"
    ],
    "correctIndex": 3
  },
  {
    "nummer": "6.15",
    "chapter": 6,
    "chapterTitle": "Sender",
    "question": "Mit welcher der folgenden Betriebsarten wird im HF-Spektrum die kleinste Bandbreite belegt?",
    "options": [
      "J3E, höchste Modulationsfrequenz 3kHz",
      "A1A, Tempo max. 30 WPM",
      "F3E, höchste Modulationsfrequenz 3kHz, Modulationsindex 1",
      "A3E, höchste Modulationsfrequenz 3kHz"
    ],
    "correctIndex": 1
  },
  {
    "nummer": "6.20",
    "chapter": 6,
    "chapterTitle": "Sender",
    "question": "Zwei Amateurstationen führen auf 145.525MHz ein FM QSO. Während der Verbindung driftet einer der Sender aufgrund thermischer Effekte um minus 300Hz. Wie wirkt sich diese Frequenzverschiebung auf die Qualität der Verbindung aus?",
    "options": [
      "Die NF des demodulierten Signals wird in den Bereich höherer Frequenzen verschoben.",
      "Die NF des demodulierten Signals wird in den Bereich tieferer Frequenzen verschoben.",
      "Die Verbindung bricht ab.",
      "Die Frequenzabweichung hat auf die Qualität der Verbindung keine Auswirkungen."
    ],
    "correctIndex": 3
  },
  {
    "nummer": "6.23",
    "chapter": 6,
    "chapterTitle": "Sender",
    "question": "Welche Wirkung hat ein richtig eingestellter Sprachprozessor (auch speech processor, clipper oder compressor genannt) auf den Betrieb eines SSB-Senders unter anderem?",
    "options": [
      "Die Dynamik des Sprachsignalpegels wird erhöht.",
      "Die mittlere Ausgangsleistung des Senders wird erhöht.",
      "Die mittlere Ausgangsleistung des Senders wird verringert.",
      "Die belegte HF-Bandbreite wird kleiner."
    ],
    "correctIndex": 1
  },
  {
    "nummer": "6.28",
    "chapter": 6,
    "chapterTitle": "Sender",
    "question": "Bei welcher Bedingung ist die maximale Leistungsübertragung von einem Sender  zur Antenne  gegeben?",
    "options": [
      "Die Impedanzen des Senders, des Antennenkabels und der Antenne müssen aufeinander abgestimmt sein.",
      "Die Impedanz des Senders muss möglichst gross sein.",
      "Die Impedanz des Antennenkabels muss möglichst gross sein.",
      "Die Impedanz des Antennenkabels muss möglichst klein sein."
    ],
    "correctIndex": 0
  },
  {
    "nummer": "6.29",
    "chapter": 6,
    "chapterTitle": "Sender",
    "question": "Zwei Amateurstationen führen auf 144.310MHz ein SSB-QSO (J3E, USB). Während der Verbindung driftet bei einer Station die Sendefrequenz aufgrund thermischer Effekte um minus 300Hz. Wie wirkt sich diese Frequenzverschiebung auf die Qualität der Verbindung aus?",
    "options": [
      "Die NF des demodulierten Signals wird in den Bereich höherer Frequenzen verschoben.",
      "Die NF des demodulierten Signals wird in den Bereich tieferer Frequenzen verschoben.",
      "Die Verbindung bricht ab.",
      "Die Frequenzabweichung hat auf die Qualität der Verbindung keine Auswirkungen."
    ],
    "correctIndex": 1
  },
  {
    "nummer": "7.1",
    "chapter": 7,
    "chapterTitle": "Antennen und Antennenzuleitungen",
    "question": "Welcher elektrische Unterschied besteht zwischen einem offenen Dipol und einem Faltdipol der Länge λ/2?",
    "options": [
      "Der Faltdipol hat einen grösseren Fusspunktwiderstand.",
      "Der Faltdipol hat einen kleineren Fusspunktwiderstand.",
      "Der Faltdipol verträgt mehr Leistung.",
      "Der Faltdipol hat eine schmalere horizontale Abstrahlkeule."
    ],
    "correctIndex": 0
  },
  {
    "nummer": "7.4",
    "chapter": 7,
    "chapterTitle": "Antennen und Antennenzuleitungen",
    "question": "Welche Antennenformen werden im VHF- und UHF-Bereich nicht verwendet?",
    "options": [
      "W3DZZ",
      "Quad",
      "Helical",
      "Parabolspiegel"
    ],
    "correctIndex": 0
  },
  {
    "nummer": "7.5",
    "chapter": 7,
    "chapterTitle": "Antennen und Antennenzuleitungen",
    "question": "Welche Antennenformen werden im KW-Bereich nicht verwendet?",
    "options": [
      "W3DZZ",
      "Quad",
      "Helical",
      "Parabolspiegel"
    ],
    "correctIndex": 3
  },
  {
    "nummer": "7.6",
    "chapter": 7,
    "chapterTitle": "Antennen und Antennenzuleitungen",
    "question": "Kann eine λ/2 endgespiesene Antenne ausser auf ihrer Grundfrequenz auch auf anderen Frequenzen in Resonanz betrieben werden?",
    "options": [
      "ja, auf ganzzahligen (1, 2, 3, ...) Vielfachen ihrer Grundfrequenz",
      "nur auf gradzahligen (2, 4, 6, ...) Vielfachen ihrer Grundfrequenz",
      "nur auf ungradzahligen (3, 5, 7, ...) Vielfachen ihrer Grundfrequenz",
      "nein"
    ],
    "correctIndex": 0
  },
  {
    "nummer": "7.12",
    "chapter": 7,
    "chapterTitle": "Antennen und Antennenzuleitungen",
    "question": "An den äusseren Enden eines Halbwellen-Dipols befindet sich",
    "options": [
      "der Spannungsbauch (-maximum)",
      "der Strombauch (maximum)",
      "der kleinste Strahlungswiderstand",
      "die kleinste Feldstärke"
    ],
    "correctIndex": 0
  },
  {
    "nummer": "7.14",
    "chapter": 7,
    "chapterTitle": "Antennen und Antennenzuleitungen",
    "question": "Was verstehen Sie bei einer Richtantenne unter dem Begriff „Antennengewinn“?",
    "options": [
      "Der Antennengewinn G gibt das Verhältnis der Nutzleistung einer Richtantenne (Pv) zu einem Dipol (Pd) in der Hauptstrahlrichtung in dB an.",
      "Der Antennengewinn G gibt das Verhältnis der Nutzleistung einer Richtantenne (P v) zur Leistung in Rückwärtsrichtung (Pr) in dB an.",
      "Der Antennengewinn G gibt das Verhältnis der Nutzleistung einer Richtantenne in Vorwärtsrichtung (P v) zur seitlich im Winkel von 90° abgestrahlten Leistung (Ps) in dB an.",
      "Der Antennengewinn G errechnet sich mit der Wurzel aus dem Verhältnis der eingesetzten Elementzahl (Direktoren) zum normalen Dipol in dB."
    ],
    "correctIndex": 0
  },
  {
    "nummer": "7.15",
    "chapter": 7,
    "chapterTitle": "Antennen und Antennenzuleitungen",
    "question": "Was verstehen Sie bei einer Richtantenne unter dem Begriff „Vor / Rückverhältnis“?",
    "options": [
      "Das Verhältnis der im Zuleitungskabel vorlaufenden (zur Antenne) Energie zur rückfliessenden Leistung (von der Antenne zum Gerät) in dB.",
      "Das Verhältnis der in der Hauptstrahlrichtung abgestrahlten Leistung zur Leistung in Rückwärtsrichtung (180°) in dB.",
      "Das Verhältnis der Anzahl Elemente vor dem Dipol (Direktoren) zur Anzahl der Elemente hinter dem Dipol (Reflektoren) in dB.",
      "Das Verhältnis der in der Hauptstrahlrichtung (vorwärts) abgestrahlten Leistung (P v) zur seitlich im Winkel von 90° abgestrahlten Leistung (Ps) in dB."
    ],
    "correctIndex": 1
  },
  {
    "nummer": "7.21",
    "chapter": 7,
    "chapterTitle": "Antennen und Antennenzuleitungen",
    "question": "Welche Eigenschaft einer Antenne ist mit dem Begriff „Öffnungswinkel“ definiert?",
    "options": [
      "Der Öffnungswinkel gibt den Winkelabstand der beiden Punkte an, bei denen der Gewinn gegenüber dem maximalen Wert um 3dB abgefallen ist.",
      "Der Öffnungswinkel gibt den Winkelabstand der beiden Punkte an, bei denen der Gewinn gegenüber dem maximalen Wert auf 0dB abgefallen ist.",
      "Der Öffnungswinkel gibt den Winkel an, um den die Antenne gegenüber der Vertikalen geneigt sein muss (Steilstrahler).",
      "Der Öffnungswinkel gibt den Winkel an, um den die Antenne gegenüber der Horizontalen geneigt sein muss (Flachstrahler)."
    ],
    "correctIndex": 0
  },
  {
    "nummer": "7.23",
    "chapter": 7,
    "chapterTitle": "Antennen und Antennenzuleitungen",
    "question": "Welche Speiseleitungsart wird im Kurzwellenbereich nicht eingesetzt?",
    "options": [
      "symmetrische Speiseleitung",
      "asymmetrische Speiseleitung",
      "Koaxialkabel",
      "Hohlleiter"
    ],
    "correctIndex": 3
  },
  {
    "nummer": "7.24",
    "chapter": 7,
    "chapterTitle": "Antennen und Antennenzuleitungen",
    "question": "Der Wellenwiderstand eines Koaxialkabels ist hauptsächlich abhängig ...",
    "options": [
      "...vom Durchmesserverhältnis Aussenleiter zu Innenleiter.",
      "...vom Aussendurchmesser des Koaxialkabels.",
      "...vom verwendeten Isolationsmaterial.",
      "...vom verwendeten Leitermaterial."
    ],
    "correctIndex": 0
  },
  {
    "nummer": "7.26",
    "chapter": 7,
    "chapterTitle": "Antennen und Antennenzuleitungen",
    "question": "Bei einer HF-Leitung mit einem Wellenwiderstand ZL ist folgende Aussage richtig:",
    "options": [
      "ZL ist unabhängig von der Leitungslänge.",
      "ZL ist abhängig von der Leitungslänge und der Frequenz.",
      "ZL ist abhängig vom verwendeten Leitermaterial (Kupfer, Eisen, etc.) und der Frequenz.",
      "ZL ist abhängig vom verwendeten Isolationsmaterial (PVC, Teflon, etc.) und der Frequenz."
    ],
    "correctIndex": 0
  },
  {
    "nummer": "7.27",
    "chapter": 7,
    "chapterTitle": "Antennen und Antennenzuleitungen",
    "question": "Mit welcher Geschwindigkeit bewegt sich eine elektrische Schwingung in einem Kabel?",
    "options": [
      "kleiner als die Lichtgeschwindigkeit",
      "grösser als die Lichtgeschwindigkeit",
      "hängt vom Wellenwiderstand ab",
      "mit Lichtgeschwindigkeit"
    ],
    "correctIndex": 0
  },
  {
    "nummer": "7.32",
    "chapter": 7,
    "chapterTitle": "Antennen und Antennenzuleitungen",
    "question": "Wozu wird ein Antennentuner (Matchbox) eingesetzt?",
    "options": [
      "Anpassung der Antennenimpedanz an den Senderausgang",
      "Abstimmung der Antenne",
      "Leistungsanpassung des Senders an die Antenne",
      "Anpassung der Polarität der Antennenabstrahlung"
    ],
    "correctIndex": 0
  },
  {
    "nummer": "8.1",
    "chapter": 8,
    "chapterTitle": "Wellenausbreitung",
    "question": "Was versteht man unter dem Ausdruck „Short Skip“?",
    "options": [
      "Reflexion an sporadischen E-Schichten",
      "Überbrückung von kurzen Distanzen im 160m-Band",
      "Bodenwellenausbreitung",
      "Verbindungen von kurzer Dauer"
    ],
    "correctIndex": 0
  },
  {
    "nummer": "8.2",
    "chapter": 8,
    "chapterTitle": "Wellenausbreitung",
    "question": "Was versteht man im Kurzwellenbereich unter Bodenwellenausbreitung?",
    "options": [
      "die Ausbreitung entlang der Erdoberfläche",
      "den Teil der Ausbreitung der durch den Boden, Erde, Wasser etc. übertragen wird",
      "den Teil der Abstrahlung, der nach der Reflexion an der Ionosphäre durch den Erdboden absorbiert wird",
      "die Abstrahlung der Antenne"
    ],
    "correctIndex": 0
  },
  {
    "nummer": "8.3",
    "chapter": 8,
    "chapterTitle": "Wellenausbreitung",
    "question": "Was versteht man im Kurzwellenbereich unter Raumwellenausbreitung?",
    "options": [
      "die Ausbreitung entlang der Erdoberfläche",
      "die Ausbreitung durch Reflexion an der Ionosphäre",
      "den Teil der Abstrahlung, der sich im Weltraum verliert",
      "die Abstrahlung der Antenne"
    ],
    "correctIndex": 1
  },
  {
    "nummer": "8.4",
    "chapter": 8,
    "chapterTitle": "Wellenausbreitung",
    "question": "Wie äussert sich der so genannte Mögel-Dellinger-Effekt auch bekannt unter ’’Sudden Ionospheric Disturbance(SID)’’?",
    "options": [
      "hohe Feldstärken bei KW-Verbindungen",
      "starke Feldstärke-Schwankungen bei KW-Verbindungen",
      "zeitlich begrenzter Totalausfall von KW-Verbindungen",
      "stark erhöhtes Rauschen bei KW-Verbindungen"
    ],
    "correctIndex": 2
  },
  {
    "nummer": "8.5",
    "chapter": 8,
    "chapterTitle": "Wellenausbreitung",
    "question": "Was versteht man unter Auroraeffekt?",
    "options": [
      "Überreichweiten von VHF-Verbindungen durch Reflexionen an Inversionsschichten",
      "Überreichweiten von VHF-Verbindungen durch Reflexionen an Ionisationsfeldern",
      "Überreichweiten von VHF-Verbindungen durch Refraktion an Luftschichten mit unterschiedlicher Luftfeuchtigkeit",
      "Überreichweiten von VHF-Verbindungen durch Reflexionen im Gelände (Felsen, Berge, Gebäude etc.)"
    ],
    "correctIndex": 1
  },
  {
    "nummer": "8.6",
    "chapter": 8,
    "chapterTitle": "Wellenausbreitung",
    "question": "Wie verhält sich die Ausbreitung der Funkwellen im 2m- und 70cm- Bereich?",
    "options": [
      "Sie ist unter normalen Bedingungen quasioptisch.",
      "Sie ist vom Ionisationsgrad der E-Schicht abhängig.",
      "Sie ist von der Lufttemperatur abgängig.",
      "Sie ist vom Ionisationsgrad der D-Schicht abhängig."
    ],
    "correctIndex": 0
  },
  {
    "nummer": "8.7",
    "chapter": 8,
    "chapterTitle": "Wellenausbreitung",
    "question": "Wie beeinflusst der Sonnenfleckenzyklus die Wellenausbreitung?",
    "options": [
      "Bei hoher Sonnenaktivität werden die Ausbreitungsbedingungen für VHF/UHF schlechter.",
      "Bei hoher Sonnenaktivität werden die Ausbreitungsbedingungen für KW (HF) schlechter.",
      "Bei hoher Sonnenaktivität werden die Ausbreitungsbedingungen für KW (HF) besser.",
      "Bei hoher Sonnenaktivität werden die Ausbreitungsbedingungen für UHF/VHF besser."
    ],
    "correctIndex": 2
  },
  {
    "nummer": "8.8",
    "chapter": 8,
    "chapterTitle": "Wellenausbreitung",
    "question": "Was bedeutet der Begriff „MUF“ in der Radiotechnik?",
    "options": [
      "M aximum Usable Frequency, die höchste Frequenz, die für einen bestimmten Übertragungsweg benutzt werden kann.",
      "M i nimum Usable Frequency, die niedrigste Frequenz, die für einen bestimmten Übertragungsweg benutzt werden kann.",
      "Mit tlere U mgebungs Fläche, wegen der NIS-Verordnung abgesperrter Bereich um die Antenne.",
      "M a ximale Umschalt Frequenz, maximale Geschwindigkeit mit der zwischen Senden und Empfang umgeschaltet werden kann."
    ],
    "correctIndex": 0
  },
  {
    "nummer": "8.9",
    "chapter": 8,
    "chapterTitle": "Wellenausbreitung",
    "question": "Was bedeutet der Begriff „LUF“ in der Radiotechnik?",
    "options": [
      "Lowest Usable Frequency, die niedrigste Frequenz, die für einen bestimmten Übertragungsweg benutzt werden kann. Wird durch die F-Schicht bestimmt.",
      "L owest Usable Frequency, die niedrigste Frequenz, die für einen bestimmten Übertragungsweg benutzt werden kann. Wird durch die D-Schicht bestimmt.",
      "L owest Usable Frequency, die niedrigste Frequenz, die für einen bestimmten Übertragungsweg benutzt werden kann. Wird durch die Wetterlage bestimmt.",
      "L owest Usable Frequency, die niedrigste Frequenz, die für einen bestimmten Übertragungsweg benutzt werden kann. Wird durch den Luftdruck bestimmt."
    ],
    "correctIndex": 1
  },
  {
    "nummer": "8.10",
    "chapter": 8,
    "chapterTitle": "Wellenausbreitung",
    "question": "Welches sind reflektierenden Schichten für Kurzwelle ?",
    "options": [
      "E- und F-Schicht",
      "Inversionsschichten",
      "D-Schicht",
      "Polarlicht"
    ],
    "correctIndex": 0
  },
  {
    "nummer": "8.11",
    "chapter": 8,
    "chapterTitle": "Wellenausbreitung",
    "question": "In welchem Frequenzbereich arbeitet man vorwiegend mit Raumwellenausbreitung?",
    "options": [
      "1.8 – 30MHz",
      "144 – 470MHz",
      "100 – 500kHz",
      "2 – 6GHz"
    ],
    "correctIndex": 0
  },
  {
    "nummer": "8.12",
    "chapter": 8,
    "chapterTitle": "Wellenausbreitung",
    "question": "Wie sollte der Abstrahlwinkel einer KW-Antenne für Nahverbindungen (≈ 500 - 1000km) sein?",
    "options": [
      "senkrecht nach oben (90°)",
      "sehr flach (Bodenwelle)",
      "steil (über 30°)",
      "flach (15°)"
    ],
    "correctIndex": 2
  },
  {
    "nummer": "8.13",
    "chapter": 8,
    "chapterTitle": "Wellenausbreitung",
    "question": "Wie sollte der Abstrahlwinkel einer KW-Antenne für interkontinentale Verbindungen (DX) sein?",
    "options": [
      "flach (5 – 15°)",
      "sehr flach (Bodenwelle)",
      "steil (über 30°)",
      "senkrecht nach oben (90°)"
    ],
    "correctIndex": 0
  },
  {
    "nummer": "8.14",
    "chapter": 8,
    "chapterTitle": "Wellenausbreitung",
    "question": "Was versteht man unter Fading bzw. Schwund?",
    "options": [
      "Starke Feldstärkeschwankungen beim Zusammentreffen von Funkwellen mit unterschiedlicher Phasenlage",
      "Feldstärkeschwankungen beim Auftreten von Nordlichtern",
      "Feldstärkeschwankungen beim Auftreten einer Gewitterfront",
      "Feldstärkeschwankungen durch Änderung der Absorption des Erdbodens"
    ],
    "correctIndex": 0
  },
  {
    "nummer": "8.15",
    "chapter": 8,
    "chapterTitle": "Wellenausbreitung",
    "question": "Ist die MUF (Maximum Usable Frequency) leistungsabhängig?",
    "options": [
      "Nein, sie wird nur durch die Reflexionsfähigkeit des Bodens bestimmt.",
      "Ja, sie hängt von der Frequenz und der Leistung ab.",
      "Nein, sie wird nur durch die Reflexionsfähigkeit der entsprechenden ionosphärischen Schichten (E, F1, F2) bestimmt.",
      "Ja, sie ist von der Frequenz und der Temperatur abhängig."
    ],
    "correctIndex": 2
  },
  {
    "nummer": "8.17",
    "chapter": 8,
    "chapterTitle": "Wellenausbreitung",
    "question": "Ist die LUF (Lowest Usable Frequency) leistungsabhängig?",
    "options": [
      "Ja, sie kann durch erhöhen der Sendeleistung angehoben werden.",
      "Ja, sie kann durch erhöhen der Sendeleistung gesenkt werden.",
      "Nein, sie hängt nur von der Frequenz ab.",
      "Nein, sie hängt nur von der Reflexionsfähigkeit der ionisierten Schichten (E, F1, F2) ab."
    ],
    "correctIndex": 1
  },
  {
    "nummer": "8.18",
    "chapter": 8,
    "chapterTitle": "Wellenausbreitung",
    "question": "Welche der aufgeführten Medien ermöglichen keine Scatter – Verbindungen?",
    "options": [
      "Wolken",
      "Vakuum",
      "Meteoriten",
      "Staub"
    ],
    "correctIndex": 1
  },
  {
    "nummer": "8.19",
    "chapter": 8,
    "chapterTitle": "Wellenausbreitung",
    "question": "Im 2m-Bereich sind Überreichweiten (in Telefonie) aus meteorologischen Gründen möglich. Wie nennt sich die dafür verantwortliche Erscheinung?",
    "options": [
      "Inversion",
      "Reflexion am Boden",
      "Reflexion an der D-Schicht",
      "Statische Aufladung durch ein Gewitter"
    ],
    "correctIndex": 0
  },
  {
    "nummer": "8.21",
    "chapter": 8,
    "chapterTitle": "Wellenausbreitung",
    "question": "Station A in Fribourg arbeitet auf KW am Vormittag um 10 Uhr in Telegrafie mit einer Station B in Bern (Distanz ca. 28km). Beide stellen ein langsames, aber starkes Fading des Empfangssignals fest. Was ist der Grund?",
    "options": [
      "Das Zusammenwirken von Boden- und Raumwelle mit zunehmender Ionisation der D-Schicht.",
      "Starke Veränderungen der Bodenleitfähigkeit",
      "Reflexionsschwankungen an der E-Schicht",
      "Atmosphärische Störungen"
    ],
    "correctIndex": 0
  },
  {
    "nummer": "8.22",
    "chapter": 8,
    "chapterTitle": "Wellenausbreitung",
    "question": "Welche Eigenschaft wird mit „Skin-Effekt“ bezeichnet?",
    "options": [
      "Abstrahlung der HF in den Raum",
      "Das Bestreben eines HF-Stromes, an der Oberfläche eines Leiters zu fliessen.",
      "Widerstandsabnahme im Leiter durch HF",
      "Widerstandszunahme im Leiter durch HF"
    ],
    "correctIndex": 1
  },
  {
    "nummer": "9.3",
    "chapter": 9,
    "chapterTitle": "Messtechnik",
    "question": "Wie werden Ampèremeter angeschlossen und was ist dabei zu beachten?",
    "options": [
      "Das Ampèremeter ist seriell in den Stromkreis einzuschlaufen. Das Messgerät soll möglichst niederohmig sein.",
      "Das Ampèremeter ist parallel in den Stromkreis einzuschlaufen. Das Messgerät soll möglichst niederohmig sein.",
      "Das Ampèremeter ist seriell in den Stromkreis einzuschlaufen. Das Messgerät soll möglichst hochohmig sein.",
      "Das Ampèremeter ist parallel in den Stromkreis einzuschlaufen. Das Messgerät soll möglichst hochohmig sein."
    ],
    "correctIndex": 0
  },
  {
    "nummer": "9.7",
    "chapter": 9,
    "chapterTitle": "Messtechnik",
    "question": "Wie werden Voltmeter angeschlossen und was ist dabei zu beachten?",
    "options": [
      "Das Voltmeter ist parallel zum Messobjekt anzuschliessen. Das Messgerät soll möglichst hochohmig sein.",
      "Das Voltmeter ist seriel zum Messobjekt anzuschliessen. Das Messgerät soll möglichst hochohmig sein.",
      "Das Voltmeter ist parallel zum Messobjekt anzuschliessen. Das Messgerät soll möglichst niederohmig sein.",
      "Das Voltmeter ist seriel zum Messobjekt anzuschliessen. Das Messgerät soll möglichst niederohmig sein."
    ],
    "correctIndex": 0
  },
  {
    "nummer": "10.1",
    "chapter": 10,
    "chapterTitle": "Störungen und Störschutz",
    "question": "Ihr Nachbar hört die Aussendung Ihres SSB-Senders aus den Lautsprechern seiner Stereoanlage, gleichgültig auf welche Funktion er sein Gerät eingestellt hat. Welche Ursache kann das haben?",
    "options": [
      "Die HF-Energie gelangt über Zuleitungen oder direkt in den NF-Teil des Gerätes und wird dort gleichgerichtet.",
      "Der HF-Teil des Empfängers wird übersteuert.",
      "Ihr Sender ist übersteuert und produziert Oberwellen.",
      "Der Demodulator des Empfängers wird übersteuert."
    ],
    "correctIndex": 0
  },
  {
    "nummer": "10.2",
    "chapter": 10,
    "chapterTitle": "Störungen und Störschutz",
    "question": "Ein Empfänger arbeitet auf der Frequenz 436.575MHz. Seine erste Zwischenfrequenz liegt bei 10.7MHz. Er wird durch einen Sender der auf 145.525MHz läuft, gestört. Es handelt sich mit grosser Wahrscheinlichkeit um...",
    "options": [
      "...eine Störung durch zu hohe Feldstärke.",
      "…eine Störung durch Direkteinstrahlung.",
      "…eine Störung durch Oberwellen (3. Harmonische).",
      "…eine Störung durch Übersteuerung der Empfänger-ZF (10,7MHz)."
    ],
    "correctIndex": 2
  },
  {
    "nummer": "10.3",
    "chapter": 10,
    "chapterTitle": "Störungen und Störschutz",
    "question": "Im Modulationsbericht Ihrer Gegenstation heisst es, dass Sie „Splatter“ erzeugen. Was können Sie zur Abhilfe tun?",
    "options": [
      "die Antennenhöhe über Grund vergrössern",
      "dem QSO-Partner QSY vorschlagen",
      "den Mike-Gain verringern, die ALC prüfen (einstellen)",
      "ein Tiefpass -Filter in die Antennenzuleitung schalten"
    ],
    "correctIndex": 2
  },
  {
    "nummer": "10.5",
    "chapter": 10,
    "chapterTitle": "Störungen und Störschutz",
    "question": "Welche Ursache kann eine, durch eine Amateurfunkanlage verursachte, Störung in einer Empfangsanlage nicht haben?",
    "options": [
      "zu hohe Strahlungsleistung des Senders",
      "Einstrahlung ins Netz",
      "zu kleine Empfindlichkeit der Empfangsanlage",
      "strahlende Speiseleitung beim Sender"
    ],
    "correctIndex": 2
  },
  {
    "nummer": "10.9",
    "chapter": 10,
    "chapterTitle": "Störungen und Störschutz",
    "question": "Welche technischen Massnahmen können auf der Senderseite bei störender Beeinträchtigung des Rundfunkempfanges ergriffen werden?",
    "options": [
      "Verminderung der effektiven Strahlungsleistung (ERP)",
      "Vergrösserung der effektiven Strahlungsleistung (ERP)",
      "Änderung der Modulationsart (z.B. FM statt SSB)",
      "Auswechseln der Antennenzuleitung (Bandkabel statt Koax)"
    ],
    "correctIndex": 0
  },
  {
    "nummer": "10.10",
    "chapter": 10,
    "chapterTitle": "Störungen und Störschutz",
    "question": "Ein am 230-Volt-Netz betriebenes Audio-Wiedergabegerät wird beim Betrieb durch die SSB-Aussendungen eines benachbarten Amateurs gestört. Bei Batteriebetrieb des Geräts verschwinden die Störungen. Welche Entstörmassnahme ist zu empfehlen?",
    "options": [
      "Der Einsatz eines Tiefpassfilters in die Antennenleitung der Amateurfunkanlage.",
      "Der Einsatz eines Hochpassfilters in die Antennenleitung der Amateurfunkanlage.",
      "keine",
      "Der Einbau eines Netzfilters beim Audio-Wiedergabegerät."
    ],
    "correctIndex": 3
  },
  {
    "nummer": "10.12",
    "chapter": 10,
    "chapterTitle": "Störungen und Störschutz",
    "question": "Welche der nachfolgend angegebenen Massnahmen helfen nicht mit, Störungen im Radio- und Fernsehempfang zu vermindern oder zu verhindern?",
    "options": [
      "unangepasste offene Speiseleitung",
      "Tiefpassfilter im Senderausgang",
      "Mantelwellensperren im Koaxialkabel",
      "angepasste Antenne"
    ],
    "correctIndex": 0
  },
  {
    "nummer": "10.14",
    "chapter": 10,
    "chapterTitle": "Störungen und Störschutz",
    "question": "Mit Ihrem Kurzwellensender verursachen Sie Störungen in einem bestimmten Fernsehkanal (Direktempfang). Andere Kanäle sind nicht gestört. Welche Massnahme könnte hier Abhilfe schaffen?",
    "options": [
      "Hochpassfilter zwischen Sender und Antenne",
      "Tiefpassfilter zwischen Sender und Antenne",
      "Mantelwellensperre im Koaxialkabel",
      "Wechseln des Antennentyps (Magnetloop statt Dipol)"
    ],
    "correctIndex": 1
  },
  {
    "nummer": "10.15",
    "chapter": 10,
    "chapterTitle": "Störungen und Störschutz",
    "question": "Wie äussert sich Zustopfen bzw. Blockierung eines Empfängers?",
    "options": [
      "Durch Empfindlichkeitssteigerung.",
      "Durch den Rückgang der Empfindlichkeit und ggf. das Auftreten von Brodelgeräuschen.",
      "Durch das Auftreten von Pfeifstellen im gesamten Abstimmungs- bereich.",
      "Durch eine zeitweilige Blockierung der Frequenzeinstellung."
    ],
    "correctIndex": 1
  },
  {
    "nummer": "10.16",
    "chapter": 10,
    "chapterTitle": "Störungen und Störschutz",
    "question": "Welche Effekte werden durch Intermodulation hervorgerufen?",
    "options": [
      "Dem Empfangssignal ist ein pulsierendes Rauschen überlagert, das die Verständlichkeit beeinträchtigt.",
      "Es treten Pfeifstellen gleichen Abstands im gesamten  Empfangs- bereich auf.",
      "Es treten Phantomsignale auf, die bei Einschalten eines Ab- schwächers verschwinden.",
      "Das Nutzsignal wird mit einem anderen Signal moduliert und dadurch unverständlich."
    ],
    "correctIndex": 2
  },
  {
    "nummer": "10.17",
    "chapter": 10,
    "chapterTitle": "Störungen und Störschutz",
    "question": "Welche Reaktion ist angebracht, wenn Störungen im TV-Rundfunk beim Nachbarn nicht mit den zur Verfügung stehenden Mitteln beseitigt werden können?",
    "options": [
      "Sie benachrichtigen die Union Schweizerischer Kurzwellenama- teure (USKA).",
      "Der Nachbar sollte darauf hingewiesen werden, dass Sie hierfür nicht zuständig sind.",
      "Der Nachbar sollte höflich darauf hingewiesen werden, dass es an seiner eigenen Einrichtung liegt.",
      "Sie empfehlen dem Nachbarn höflich, sich an das BAKOM (Störungsmeldung) zwecks Prüfung der Störungsursache zu wenden."
    ],
    "correctIndex": 3
  },
  {
    "nummer": "10.18",
    "chapter": 10,
    "chapterTitle": "Störungen und Störschutz",
    "question": "Bei der Überprüfung des Ausgangssignal eines Senders sollte die Dämpfung der Oberwellen mindestens",
    "options": [
      "den geltenden Richtwerten entsprechen.",
      "20 dB betragen.",
      "30 dB betragen.",
      "100 dB betragen."
    ],
    "correctIndex": 0
  },
  {
    "nummer": "10.19",
    "chapter": 10,
    "chapterTitle": "Störungen und Störschutz",
    "question": "In welchem Fall spricht man von Einströmungen bei EMV? Einströmungen liegen dann vor, wenn die HF",
    "options": [
      "über das ungenügend abgeschirmte Gehäuse in die Elektronik gelangt.",
      "über Leitungen oder Kabel in das zu überprüfende Gerät gelangt.",
      "wegen eines schlechten Stehwellenverhältnisses wieder zum Sender zurückfliesst.",
      "über nicht genügend geschirmte Kabel zum Anpassgerät geführt wird."
    ],
    "correctIndex": 1
  },
  {
    "nummer": "10.20",
    "chapter": 10,
    "chapterTitle": "Störungen und Störschutz",
    "question": "In welchem Fall spricht man von Einstrahlungen bei EMV? Einstahlungen liegen dann vor, wenn die HF",
    "options": [
      "wegen eines schlechten Stehwellenverhältnisses wieder zum Sender zurückstrahlt.",
      "über Leitungen oder Kabel in das gestörte Gerät gelangt.",
      "über das ungenügend abgeschirmte Gehäuse in die Elektronik gelangt.",
      "über nicht genügend geschirmte Kabel zum gestörten Empfänger gelangt."
    ],
    "correctIndex": 2
  },
  {
    "nummer": "10.21",
    "chapter": 10,
    "chapterTitle": "Störungen und Störschutz",
    "question": "Wie nennt man die elektromagnetische Störung, die durch die Aussendung des reinen Nutzsignals beim Empfang anderer Frequenzen in benachbarten Empfängern auftreten kann?",
    "options": [
      "Hinzunehmende Störung",
      "Störungen durch Nebenaussendungen",
      "Störung durch unerwünschte Aussendungen.",
      "Blockierung oder störende Beeinflussung"
    ],
    "correctIndex": 3
  },
  {
    "nummer": "10.22",
    "chapter": 10,
    "chapterTitle": "Störungen und Störschutz",
    "question": "Wie kommen Geräusche aus den Lautsprechern einer abgeschalteten Stereoanlage möglicherweise zustande?",
    "options": [
      "Durch Gleichrichtung starker HF-Signale in der NF-Endstufe der Stereoanlage.",
      "Durch Gleichrichtung abgestrahlter HF-Signale an PN- Übergängen in der NF-Vorstufe.",
      "Durch Gleichrichtung der ins Stromnetz eingestrahlten HF- Signale an den Dioden des Netzteils.",
      "Durch eine Übersteuerung des Tuners mit dem über die Antennenzuleitung aufgenommenen HF-Signal."
    ],
    "correctIndex": 0
  },
  {
    "nummer": "10.23",
    "chapter": 10,
    "chapterTitle": "Störungen und Störschutz",
    "question": "Ein Fernsehgerät wird durch das Nutzsignal einer KW- Amateurfunkstelle gestört. Wie dringt das Signal mit grösster Wahrscheinlichkeit in das Fernsehgerät ein?",
    "options": [
      "Über die Stromversorgung des Senders und die Stromversorgung des Fernsehgeräts.",
      "Über die Fernsehantenne bzw. das Antennenkabel sowie über den Monitor.",
      "Über jeden beliebigen Leitungsanschluss und/oder über die ZF- Stufen.",
      "Über die Antennenleitung und über alle grösseren ungeschirmten Spulen im Fernsehgerät."
    ],
    "correctIndex": 2
  },
  {
    "nummer": "10.24",
    "chapter": 10,
    "chapterTitle": "Störungen und Störschutz",
    "question": "Die Übersteuerung eines Leistungsverstärkers führt zu",
    "options": [
      "einer Verringerung der Ausgangsleistung.",
      "einer besseren Verständlichkeit am Empfangsort.",
      "lediglich geringen Verzerrungen beim Empfang.",
      "einem hohen Nebenwellenanteil."
    ],
    "correctIndex": 3
  },
  {
    "nummer": "10.25",
    "chapter": 10,
    "chapterTitle": "Störungen und Störschutz",
    "question": "Die gesamte Bandbreite einer FM-Übertragung beträgt 15 kHz. Wie nah an der Bandgrenze kann ein Träger übertragen werden, ohne dass Ausserbandaussendungen erzeugt werden?",
    "options": [
      "7,5 kHz",
      "15 kHz",
      "0 kHz",
      "2,7 kHz"
    ],
    "correctIndex": 0
  },
  {
    "nummer": "10.26",
    "chapter": 10,
    "chapterTitle": "Störungen und Störschutz",
    "question": "Durch welche Massnahme kann die übermässige Bandbreite einer 2 m FM-Übertragung verringert werden? Sie kann verringert werden durch die Änderung der",
    "options": [
      "HF-Begrenzereigenschaften.",
      "Hubeinstellung.",
      "Trägerfrequenz.",
      "Vorspannungsreglereinstellung."
    ],
    "correctIndex": 1
  },
  {
    "nummer": "10.27",
    "chapter": 10,
    "chapterTitle": "Störungen und Störschutz",
    "question": "Ein Sender sollte so betrieben werden, dass",
    "options": [
      "die Oberwellenabschirmung minimiert wird.",
      "parasitäre Schwingungen vorhanden sind.",
      "die Selbsterregung maximiert wird.",
      "er keine unerwünschten Aussendungen hervorruft."
    ],
    "correctIndex": 3
  },
  {
    "nummer": "10.28",
    "chapter": 10,
    "chapterTitle": "Störungen und Störschutz",
    "question": "Durch eine Mantelwellendrossel in einem Fernseh- Antennenzuführungskabel",
    "options": [
      "werden alle Wechselstromsignale unterdrückt.",
      "werden niederfrequente Störsignale unterdrückt.",
      "werden Gleichtakt-HF-Störsignale unterdrückt.",
      "wird Netzbrummen unterdrückt."
    ],
    "correctIndex": 2
  },
  {
    "nummer": "10.29",
    "chapter": 10,
    "chapterTitle": "Störungen und Störschutz",
    "question": "Ein Funkamateur wohnt in einem Reihenhaus. An welcher Stelle sollte die KW-Drahtantenne angebracht werden, um störende Beeinflussungen auf ein Mindestmass zu begrenzen?",
    "options": [
      "Rechtwinklig zur Häuserzeile mit abgewandter Strahlungsrichtung",
      "Möglichst innerhalb des Dachbereichs",
      "Entlang der Häuserzeile auf der Höhe der Dachrinne",
      "Am gemeinsamen Schornstein"
    ],
    "correctIndex": 0
  },
  {
    "nummer": "10.30",
    "chapter": 10,
    "chapterTitle": "Störungen und Störschutz",
    "question": "Beim Betrieb Ihres 2 m-Senders wird bei einem Ihrer Nachbarn ein Rundfunkempfänger gestört, der mit einer Zimmerantenne betrieben wird. Zur Behebung des Problems schlagen Sie dem Nachbarn vor,",
    "options": [
      "die Antenne zu deplazieren - z. B. eine extern angebrachte Antenne zu installieren.",
      "ein doppelt geschirmtes Koaxialkabel für die Antennenleitung zu verwenden.",
      "einen Vorverstärker in die Antennenleitung einzuschleifen.",
      "den Radioempfänger auszutauschen."
    ],
    "correctIndex": 0
  },
  {
    "nummer": "10.32",
    "chapter": 10,
    "chapterTitle": "Störungen und Störschutz",
    "question": "Um die Störwahrscheinlichkeit zu verringern, sollte die benutzte Sendeleistung",
    "options": [
      "auf die für eine zufriedenstellende Kommunikation erforderlichen 100 W eingestellt werden.",
      "nur auf den zulässigen Pegel eingestellt werden.",
      "auf das für eine zufriedenstellende Kommunikation erforderliche Minimum eingestellt werden.",
      "die Hälfte des maximal zulässigen Pegels betragen."
    ],
    "correctIndex": 2
  },
  {
    "nummer": "10.33",
    "chapter": 10,
    "chapterTitle": "Störungen und Störschutz",
    "question": "Welches Filter sollte im Störungsfall für die Dämpfung von Kurzwellensignalen in ein Fernseh- oder Radioantennenkabel eingeschleift werden?",
    "options": [
      "Eine Bandsperre für die Fernseh- bzw. Rundfunkfrequenzbereiche",
      "Ein regelbares Dämpfungsglied",
      "Ein Tiefpassfilter",
      "Ein Hochpassfilter"
    ],
    "correctIndex": 3
  },
  {
    "nummer": "10.34",
    "chapter": 10,
    "chapterTitle": "Störungen und Störschutz",
    "question": "Nach welcher der Antworten kann die EIRP berechnet werden und worauf ist die EIRP bzw. der zu verwendete Antennengewinn bezogen?",
    "options": [
      "PEIRP = (PSender + PVerluste) x GAntenne bezogen auf einen Halbwellendipol",
      "PEIRP = PSender + PVerluste + GAntenne bezogen auf einen isotropen Kugelstrahler",
      "PEIRP = (PSender - PVerluste) x GAntenne bezogen auf einen isotropen Kugelstrahler",
      "PEIRP = (PSender x GAntenne) - PVerluste bezogen auf einen Halbwellendipol"
    ],
    "correctIndex": 2
  },
  {
    "nummer": "10.35",
    "chapter": 10,
    "chapterTitle": "Störungen und Störschutz",
    "question": "Welche Filter sollten im Störungsfall vor die einzelnen Leitungsanschlüsse eines Radio- oder Fernsehgeräts oder angeschlossener Geräte eingeschleift werden, um Kurzwellensignale zu dämpfen?",
    "options": [
      "Eine Bandsperre für die Rundfunkbereiche unmittelbar vor dem Antennenanschluss und ein Tiefpassfilter in das Netzkabel der gestörten Geräte.",
      "Ein Bandpassfilter bei 30 MHz unmittelbar vor dem Antennenanschluss und ein Tiefpassfilter in das Netzkabel der gestörten Geräte.",
      "Ein Hochpassfilter vor dem Antennenanschluss und zusätzlich je eine Ferritdrossel vor alle Leitungsanschlüsse der gestörten Geräte.",
      "Je ein Tiefpassfilter unmittelbar vor dem Antennenanschluss und in das Netzkabel der gestörten Geräte."
    ],
    "correctIndex": 2
  },
  {
    "nummer": "10.36",
    "chapter": 10,
    "chapterTitle": "Störungen und Störschutz",
    "question": "Die Signale eines 144 MHz-Senders werden in das Koax- Antennenkabel eines Rundfunkempfängers induziert und verursachen Störungen. Eine Möglichkeit zur Verringerung der Störungen besteht darin,",
    "options": [
      "eine Mantelwellendrossel einzubauen.",
      "die Erdverbindung des Sender abzuklemmen.",
      "das Abschirmgeflecht am Antennenstecker des Empfängers abzuklemmen.",
      "den 144 MHz-Sender mit einem Tiefpassfilter auszustatten."
    ],
    "correctIndex": 0
  },
  {
    "nummer": "10.37",
    "chapter": 10,
    "chapterTitle": "Störungen und Störschutz",
    "question": "Um die Störwahrscheinlichkeit im eigenen Haus zu verringern, empfiehlt es sich vorzugsweise",
    "options": [
      "Antennen auf dem Dachboden zu errichten.",
      "eine getrennte HF-Erdleitung zu verwenden.",
      "die Amateurfunkgeräte mittels des Schutzleiters zu erden.",
      "die Amateurfunkgeräte mit einem Wasserrohr zu verbinden."
    ],
    "correctIndex": 1
  },
  {
    "nummer": "10.38",
    "chapter": 10,
    "chapterTitle": "Störungen und Störschutz",
    "question": "Bei der Hi-Fi-Anlage des Nachbarn wird Einströmung in die NF- Endstufe festgestellt. Eine mögliche Abhilfe wäre",
    "options": [
      "einen Serienkondensator in die Lautsprecherleitung einzubauen.",
      "ein geschirmtes Netzkabel für den Receiver zu verwenden.",
      "geschirmte Lautsprecherkabel zu verwenden.",
      "ein NF-Filter in das Koaxialkabel einzuschleifen."
    ],
    "correctIndex": 2
  },
  {
    "nummer": "10.39",
    "chapter": 10,
    "chapterTitle": "Störungen und Störschutz",
    "question": "Eine KW-Amateurfunkstelle verursacht im Sendebetrieb in einem in der Nähe betriebenen Fernsehempfänger Störungen. Welches Filter schleifen Sie in das Fernsehantennenkabel ein, um die Störwahrscheinlichkeit zu verringern?",
    "options": [
      "",
      "",
      "",
      ""
    ],
    "correctIndex": 0
  },
  {
    "nummer": "10.40",
    "chapter": 10,
    "chapterTitle": "Störungen und Störschutz",
    "question": "Welche der Antworten A bis D enthält die heutzutage normgerechten Adern-Kennfarben von 3-adrigen, isolierten Energieleitungen und -kabeln in der Abfolge: Schutzleiter (Erdung), Aussenleiter (Phase), Neutralleiter (Nullleiter)?",
    "options": [
      "grau, schwarz, rot",
      "grüngelb, blau, braun oder schwarz",
      "braun, grüngelb, blau",
      "grüngelb, braun, blau"
    ],
    "correctIndex": 3
  },
  {
    "nummer": "10.41",
    "chapter": 10,
    "chapterTitle": "Störungen und Störschutz",
    "question": "Falls sich eine Antenne in der Nähe und parallel zu einer 230 V- Wechselstrom-Freileitung befindet,",
    "options": [
      "können harmonische Schwingungen erzeugt werden.",
      "können Hochfrequenzströme eingekoppelt werden.",
      "kann 50 Hz-Modulation aller Signale auftreten.",
      "könnte erhebliche Überspannung im Netz erzeugt werden."
    ],
    "correctIndex": 1
  },
  {
    "nummer": "10.42",
    "chapter": 10,
    "chapterTitle": "Störungen und Störschutz",
    "question": "Um eine Amateurfunkstelle in Bezug auf EMV zu optimieren,",
    "options": [
      "sollten alle schlechten Erdverbindungen entfernt werden.",
      "sollte der Sender mit der Wasserleitung im Haus verbunden werden.",
      "sollten alle Einrichtungen mit einer guten HF-Erdung versehen werden.",
      "sollten Wasserleitungsanschlüsse aus Polyethylen zur Isolation vorgesehen werden."
    ],
    "correctIndex": 2
  },
  {
    "nummer": "10.43",
    "chapter": 10,
    "chapterTitle": "Störungen und Störschutz",
    "question": "Im Mittelwellenbereich ergeben sich häufig Spiegelfrequenz- störungen durch",
    "options": [
      "Sender im 160 m-Band.",
      "VHF-Sender.",
      "UHF-Sender.",
      "Sender im 10 m-Band."
    ],
    "correctIndex": 0
  },
  {
    "nummer": "10.44",
    "chapter": 10,
    "chapterTitle": "Störungen und Störschutz",
    "question": "Ein korrodierter Anschluss an einem Stecker des Fernseh- antennenkabels des Nachbarn",
    "options": [
      "kann in Verbindung mit dem Oszillatorsignal des Fernsehempfängers unerwünschte Mischprodukte erzeugen, die den Fernsehempfang stören.",
      "kann in Verbindung mit Einstreuungen aus dem Stromnetz durch Intermodulation Bild- und Tonstörungen hervorrufen.",
      "kann in Verbindung mit dem Signal naher Sender parametrische Schwingungen erzeugen, die einen überhöhten Nutzsignalpegel hervorrufen.",
      "kann in Verbindung mit dem Signal naher Sender unerwünschte Mischprodukte erzeugen, die den Fernsehempfang stören."
    ],
    "correctIndex": 3
  },
  {
    "nummer": "10.45",
    "chapter": 10,
    "chapterTitle": "Störungen und Störschutz",
    "question": "Was versteht man unter dem Begriff «EIRP»?",
    "options": [
      "Es ist das Produkt aus der zugeführten Leistung und dem Antennengewinnfaktor und stellt die durchschnittliche isotrope Spitzenleistung am Senderausgang der Amateurfunkstelle dar, wie sie in der NISV-Selbsterklärung anzugeben ist.",
      "Es ist die Eingangsleistung des verwendeten Senders, wie sie in der NISV-Selbsterklärung anzugeben ist.",
      "Es ist das Produkt aus der zugeführten Leistung und dem Gewinnfaktor der Antenne und stellt die Leistung dar, die man einem isotropen Strahler zuführen müsste, damit dieser im Fernfeld dieselbe elektrische Feldstärke erzeugt wie die Antenne.",
      "Es handelt sich um die Leistung, die man im Maximum der Strahlungskeule einer Dipolantenne vorfindet."
    ],
    "correctIndex": 2
  },
  {
    "nummer": "10.46",
    "chapter": 10,
    "chapterTitle": "Störungen und Störschutz",
    "question": "Ein Sender mit 0,6 Watt Ausgangsleistung ist über eine Antennenleitung, die 1 dB Kabelverluste hat, an eine Richtantenne mit 11 dB Gewinn (auf Dipol bezogen) angeschlossen. Welche EIRP wird von der Antenne maximal abgestrahlt?",
    "options": [
      "6,0 Watt",
      "7,8 Watt",
      "9,8 Watt",
      "12,7 Watt"
    ],
    "correctIndex": 2
  },
  {
    "nummer": "10.47",
    "chapter": 10,
    "chapterTitle": "Störungen und Störschutz",
    "question": "Ein Sender mit 5 Watt Ausgangsleistung ist über eine Antennenleitung, die 2 dB Kabelverluste hat, an eine Antenne mit 5 dB Gewinn (auf Dipol bezogen) ange-schlossen. Welche EIRP wird von der Antenne maximal abgestrahlt?",
    "options": [
      "32,8 Watt",
      "16,4 Watt",
      "10,0 Watt",
      "6,1 Watt"
    ],
    "correctIndex": 1
  },
  {
    "nummer": "10.48",
    "chapter": 10,
    "chapterTitle": "Störungen und Störschutz",
    "question": "Ein Sender mit 75 Watt Ausgangsleistung ist über eine Antennenleitung, die 2,15 dB (Faktor 1,64) Kabelverluste hat, an eine Dipol-Antenne angeschlossen. Welche EIRP wird von der Antenne maximal abgestrahlt?",
    "options": [
      "45,7 Watt",
      "60,6 Watt",
      "123 Watt",
      "75 Watt"
    ],
    "correctIndex": 3
  },
  {
    "nummer": "11.1",
    "chapter": 11,
    "chapterTitle": "Schutz gegen elektrische Spannungen, Personenschutz",
    "question": "Bietet ein Fehlerstromschutzschalter (FI-Schalter) absoluten Personenschutz?",
    "options": [
      "nein",
      "ja",
      "nur wenn der Ansprechstrom grösser 100mA ist",
      "nur wenn Sie gleichzeitig die Phase und den Neutralleiter berühren"
    ],
    "correctIndex": 0
  },
  {
    "nummer": "11.2",
    "chapter": 11,
    "chapterTitle": "Schutz gegen elektrische Spannungen, Personenschutz",
    "question": "Wie hoch ist in der Schweiz die Netzspannung (Nennspannung) und welche Frequenz hat sie?",
    "options": [
      "230/400V, 50Hz",
      "230/400V, 60Hz",
      "110/190V, 50Hz",
      "110/190V, 60Hz"
    ],
    "correctIndex": 0
  },
  {
    "nummer": "11.3",
    "chapter": 11,
    "chapterTitle": "Schutz gegen elektrische Spannungen, Personenschutz",
    "question": "Welche Funktion hat der mit „?“ bezeichnete Anschluss einer Netzsteckdose?",
    "options": [
      "Anschluss der Phase",
      "Anschluss des Neutralleiters",
      "Führungsstift",
      "Anschluss des Schutzleiters"
    ],
    "correctIndex": 3
  },
  {
    "nummer": "11.4",
    "chapter": 11,
    "chapterTitle": "Schutz gegen elektrische Spannungen, Personenschutz",
    "question": "Sie möchten Ihre Amateurfunkanlage welche mit einem 3-poligen Netzstecker versehen ist, am Netz anschliessen. Leider steht Ihnen nur eine alte, 2-polige Steckdose zur Verfügung. Dürfen Sie den Erdstift am Stecker Ihrer Amateurfunkanlage einfach absägen?",
    "options": [
      "nein",
      "ja",
      "ja, wenn Sie auf Holz oder Teppichboden stehen",
      "ja, wenn das Gehäuse aus Metall ist"
    ],
    "correctIndex": 0
  },
  {
    "nummer": "11.5",
    "chapter": 11,
    "chapterTitle": "Schutz gegen elektrische Spannungen, Personenschutz",
    "question": "Welche Geräte dürfen über einen 2-poligen Stecker am 230V-Netz angeschlossen werden?",
    "options": [
      "Geräte mit Metallgehäuse",
      "Handlampen ohne isolierten Griff",
      "schutzisolierte Geräte mit  -Zeichen",
      "alle Geräte mit weniger als 10W Leistung"
    ],
    "correctIndex": 2
  },
  {
    "nummer": "11.6",
    "chapter": 11,
    "chapterTitle": "Schutz gegen elektrische Spannungen, Personenschutz",
    "question": "Welcher Leiter eines Netzkabels muss mit dem Metallgehäuse eines netzbetriebenen Gerätes verbunden werden?",
    "options": [
      "der  Neutralleiter",
      "die Phase",
      "der Schutzleiter",
      "die Abschirmung"
    ],
    "correctIndex": 2
  },
  {
    "nummer": "11.7",
    "chapter": 11,
    "chapterTitle": "Schutz gegen elektrische Spannungen, Personenschutz",
    "question": "Welche Farbe hat der Schutzleiter eines 3-adrigen Netzkabels in der Schweiz?",
    "options": [
      "grüngelb",
      "rot",
      "gelb",
      "weiss"
    ],
    "correctIndex": 0
  },
  {
    "nummer": "11.8",
    "chapter": 11,
    "chapterTitle": "Schutz gegen elektrische Spannungen, Personenschutz",
    "question": "Darf der Neutralleiter mit dem Metallgehäuse eines Gerätes verbunden werden?",
    "options": [
      "ja",
      "nein",
      "nur bei Steckern mit 3 Stiften",
      "nur bei Verwendung in Wohnräumen"
    ],
    "correctIndex": 1
  },
  {
    "nummer": "11.9",
    "chapter": 11,
    "chapterTitle": "Schutz gegen elektrische Spannungen, Personenschutz",
    "question": "Wie hoch darf die maximal zulässige Berührungsspannung sein?",
    "options": [
      "230V",
      "325V",
      "75V",
      "50V"
    ],
    "correctIndex": 3
  },
  {
    "nummer": "11.10",
    "chapter": 11,
    "chapterTitle": "Schutz gegen elektrische Spannungen, Personenschutz",
    "question": "Welche Vorschriften sind massgebend für Elektroinstallationen in einem Wohnbereich (Shack)?",
    "options": [
      "Die Niederspannungs-Installationsverordnung (NIV) und die Niederspannungs-Installationsvorschriften (NIN)",
      "Die Verordnung über den Schutz vor nichtionisierender Strahlung (NISV)",
      "Das Fernmeldegesetz (FMG)",
      "Die Prüfungsvorschriften für den Amateurfunk"
    ],
    "correctIndex": 0
  },
  {
    "nummer": "12.1",
    "chapter": 12,
    "chapterTitle": "Schutz vor nichtionisierender Strahlung, NIS",
    "question": "Ab welcher abgestrahlten Leistung muss beim Bau einer Antenne eine Immissionsprognose im Sinne der NISV erstellt werden?",
    "options": [
      "3W",
      "6W",
      "10W",
      "50W"
    ],
    "correctIndex": 1
  },
  {
    "nummer": "12.2",
    "chapter": 12,
    "chapterTitle": "Schutz vor nichtionisierender Strahlung, NIS",
    "question": "Wo ist der Grenzwert für die zulässige nichtionisierende Strahlung einer Antenne festgelegt?",
    "options": [
      "im Fernmeldegesetz (FMG)",
      "in der Verordnung über den Schutz vor nichtionisierender Strahlung (NISV), Anhang 2",
      "in den Niederspannungs-Installationsvorschriften (NIN)",
      "in der Niederspannungs-Installationsverordnung (NIV)"
    ],
    "correctIndex": 1
  },
  {
    "nummer": "12.3",
    "chapter": 12,
    "chapterTitle": "Schutz vor nichtionisierender Strahlung, NIS",
    "question": "Wann muss für eine Station mit 100 Watt Ausgangsleistung die nur mit einer Dipolantenne arbeitet auch eine NIS-Immissionsberechnung erstellt werden?",
    "options": [
      "in jedem Fall",
      "wenn die Sendedauer mehr als 800 Stunden pro Jahr beträgt",
      "wenn der Abstand der Antenne zum Nachbargrundstück weniger als 20m beträgt",
      "w enn der Nachbar eine solche Analyse verlangt"
    ],
    "correctIndex": 0
  },
  {
    "nummer": "12.4",
    "chapter": 12,
    "chapterTitle": "Schutz vor nichtionisierender Strahlung, NIS",
    "question": "Wer ist für den Vollzug der NIS-Verordnung zuständig?",
    "options": [
      "die Kantone",
      "die Gemeinden",
      "das Bundesamt für Kommunikation",
      "Amateurfunkanlagen sind von der NIS-Verordnung ausgenommen."
    ],
    "correctIndex": 0
  },
  {
    "nummer": "13.1",
    "chapter": 13,
    "chapterTitle": "Blitzschutz",
    "question": "Was ist mit einer Antenne auf einem Gebäude das bereits mit einer Blitzschutzanlage ausgerüstet ist zu beachten?",
    "options": [
      "nichts",
      "D ie Antennenanlage (Mast) ist auf kürzestem Wege mit der Blitzschutzanlage zu verbinden.",
      "Die Antennenanlage ist an einer separaten Erdelektrode zu erden.",
      "Die Antenne ist über eine Funkenstrecke mit der Blitzschutzanlage zu verbinden."
    ],
    "correctIndex": 1
  },
  {
    "nummer": "13.2",
    "chapter": 13,
    "chapterTitle": "Blitzschutz",
    "question": "Was ist bei der Hauseinführung von Steuer- und HF-Leitungen zu beachten?",
    "options": [
      "Sie müssen mit einem Überspannungsschutz ausgerüstet sein.",
      "Es ist eine Feinsicherung einzubauen.",
      "Die Leitungen dürfen nur über keramische, nichtbrennbare Rohre eingeführt werden.",
      "Spezielle Massnahmen sind nur bei KW-Antennen mit grossen Abmessungen notwendig."
    ],
    "correctIndex": 0
  },
  {
    "nummer": "13.3",
    "chapter": 13,
    "chapterTitle": "Blitzschutz",
    "question": "Muss eine Antenne auf einem Gebäude ohne Blitzschutzanlage speziell geerdet werden?",
    "options": [
      "Nein, es sind keine speziellen Massnahmen erforderlich.",
      "Ja, die Antenne ist mit der am nächsten gelegenen Wasserleitung zu verbinden.",
      "Ja, es ist eine Verbindung zur Gebäudeerdung oder zu einem separaten Stab- oder Banderder zu erstellen.",
      "Nein, denn auf einem Haus ohne Blitzschutz darf keine Antenne erstellt werden."
    ],
    "correctIndex": 2
  },
  {
    "nummer": "13.4",
    "chapter": 13,
    "chapterTitle": "Blitzschutz",
    "question": "Dürfen Antennenleitungen durch feuer- und explosionsgefährdete Räume geführt werden?",
    "options": [
      "ja, wenn die HF-Leitung nicht blank, also isoliert ist",
      "nein, nie",
      "ja, wenn die zu überbrückende Länge kleiner als 1 m ist",
      "ja, wenn Koaxialkabel verwendet werden"
    ],
    "correctIndex": 1
  },
  {
    "nummer": "13.5",
    "chapter": 13,
    "chapterTitle": "Blitzschutz",
    "question": "Eine Blitzschutzanlage (Fangleitung + Ableitung) wird aus blankem Kupfer erstellt. Welcher minimale Leiter-Durchmesser ist vorgeschrieben?",
    "options": [
      "4mm",
      "6mm",
      "2.5mm",
      "10mm"
    ],
    "correctIndex": 1
  },
  {
    "nummer": "13.6",
    "chapter": 13,
    "chapterTitle": "Blitzschutz",
    "question": "Dürfen Aluminium, Alu-Legierungen, Stahl oder Chromstahl als Ableiter für Blitzschutzanlagen verwendet werden?",
    "options": [
      "nein, nur Kupfer",
      "Stahlableiter dürfen nur verwendet werden wenn sie isoliert sind.",
      "ja, bei Wahl der richtigen Querschnitte",
      "Es dürfen nur nichtrostende Materialien verwendet werden."
    ],
    "correctIndex": 2
  },
  {
    "nummer": "14.1",
    "chapter": 14,
    "chapterTitle": "Analoge und digitale Modulationsverfahren",
    "question": "Wie unterscheidet sich SSB (J3E) von AM (A3E) in Bezug auf die Bandbreite?",
    "options": [
      "Die Sendeart J3E beansprucht etwas mehr als die halbe Bandbreite der Sendeart A3E.",
      "Die unterschiedlichen Modulationsarten lassen keinen Vergleich zu, da sie grundverschieden erzeugt werden.",
      "Die Sendeart J3E beansprucht etwa ¼ Bandbreite der Sendeart A3E.",
      "Die Sendeart J3E beansprucht weniger als die halbe Bandbreite der Sendeart A3E."
    ],
    "correctIndex": 3
  },
  {
    "nummer": "14.2",
    "chapter": 14,
    "chapterTitle": "Analoge und digitale Modulationsverfahren",
    "question": "Welches der nachfolgenden Modulationsverfahren hat die geringste Störanfälligkeit bei Funkanlagen in Kraftfahrzeugen?",
    "options": [
      "AM",
      "SSB",
      "FM",
      "DSB"
    ],
    "correctIndex": 2
  },
  {
    "nummer": "14.3",
    "chapter": 14,
    "chapterTitle": "Analoge und digitale Modulationsverfahren",
    "question": "Das folgende Oszillogramm zeigt ein AM-Signal. Der Modulationsgrad beträgt hier zirka",
    "options": [
      "33 %",
      "50 %",
      "67 %",
      "75 %"
    ],
    "correctIndex": 1
  },
  {
    "nummer": "14.4",
    "chapter": 14,
    "chapterTitle": "Analoge und digitale Modulationsverfahren",
    "question": "Das folgende Oszillogramm zeigt ein AM-Signal. Der Modulationsgrad beträgt hier zirka",
    "options": [
      "30 %",
      "45 %",
      "55 %",
      "75 %"
    ],
    "correctIndex": 1
  },
  {
    "nummer": "14.5",
    "chapter": 14,
    "chapterTitle": "Analoge und digitale Modulationsverfahren",
    "question": "Das folgende Oszillogramm zeigt",
    "options": [
      "ein typisches Zweiton-SSB-Testsignal.",
      "ein typisches Einton-FM-Testsignal.",
      "ein typisches 100%-AM-Signal.",
      "ein typisches CW-Signal."
    ],
    "correctIndex": 0
  },
  {
    "nummer": "14.6",
    "chapter": 14,
    "chapterTitle": "Analoge und digitale Modulationsverfahren",
    "question": "Das folgende Oszillogramm zeigt ein typisches Zweiton-SSB-Testsignal. Bestimmen Sie den Modulationsgrad!",
    "options": [
      "Er beträgt 100 %.",
      "Man kann keinen Modulationsgrad bestimmen, da es keinen Träger gibt.",
      "Er beträgt 0 %.",
      "Er beträgt ca. 50 %."
    ],
    "correctIndex": 1
  },
  {
    "nummer": "14.7",
    "chapter": 14,
    "chapterTitle": "Analoge und digitale Modulationsverfahren",
    "question": "Wodurch wird bei Frequenzmodulation die Lautstärke-Information übertragen?",
    "options": [
      "Durch die Grösse der Amplitude des HF-Signals.",
      "Durch die Änderung der Geschwindigkeit des Frequenzhubes.",
      "Durch die Geschwindigkeit der Trägerfrequenzänderung.",
      "Durch die Grösse der Trägerfrequenzauslenkung."
    ],
    "correctIndex": 3
  },
  {
    "nummer": "14.8",
    "chapter": 14,
    "chapterTitle": "Analoge und digitale Modulationsverfahren",
    "question": "Wodurch wird bei Amplitudenmodulation die Lautstärke- Information übertragen?",
    "options": [
      "Durch die Grösse der Amplitude des HF-Signals.",
      "Durch die Ânderung der Geschwindigkeit des Frequenzhubes.",
      "Durch die Geschwindigkeit der Trägerfrequenzänderung.",
      "Durch die Grösse der Trägerfrequenzauslenkung."
    ],
    "correctIndex": 0
  },
  {
    "nummer": "14.9",
    "chapter": 14,
    "chapterTitle": "Analoge und digitale Modulationsverfahren",
    "question": "FM hat gegenüber SSB den Vorteil der",
    "options": [
      "geringeren Beeinflussung durch Störquellen.",
      "besseren Kreisgüte.",
      "grösseren Entfernungsüberbrückung.",
      "geringen Anforderungen an die Bandbreite."
    ],
    "correctIndex": 0
  },
  {
    "nummer": "14.10",
    "chapter": 14,
    "chapterTitle": "Analoge und digitale Modulationsverfahren",
    "question": "Ein zu grosser Hub eines FM-Senders führt dazu,",
    "options": [
      "dass die Senderendstufe übersteuert wird.",
      "dass Verzerrungen aufgrund gegenseitiger Auslöschung der Seitenbänder auftreten.",
      "dass die HF-Bandbreite zu gross wird.",
      "dass Verzerrungen aufgrund unerwünschter Unterdrückung der Trägerfrequenz auftreten."
    ],
    "correctIndex": 2
  },
  {
    "nummer": "14.11",
    "chapter": 14,
    "chapterTitle": "Analoge und digitale Modulationsverfahren",
    "question": "Grösserer Frequenzhub führt bei einem FM-Sender zu",
    "options": [
      "einer Reduktion der Amplituden der Seitenbänder.",
      "einer Erhöhung der Amplitude der Trägerfrequenz.",
      "einer Erhöhung der Senderausgangsleistung.",
      "einer grösseren HF-Bandbreite."
    ],
    "correctIndex": 3
  },
  {
    "nummer": "14.12",
    "chapter": 14,
    "chapterTitle": "Analoge und digitale Modulationsverfahren",
    "question": "Was bedeutet im Prinzip «Packet Radio»? Die Daten werden",
    "options": [
      "paketweise (stossweise) gesendet.",
      "in der Mailbox in Paketen aufbewahrt.",
      "8-Bit-weise parallel gepackt gesendet.",
      "zu 8 Bit gepackt und dann gesendet."
    ],
    "correctIndex": 0
  },
  {
    "nummer": "14.13",
    "chapter": 14,
    "chapterTitle": "Analoge und digitale Modulationsverfahren",
    "question": "Was versteht man unter 9k6-Packet-Radio?",
    "options": [
      "Die Daten werden in Paketen von 9600 Bits übertragen.",
      "Die Übertragung erfolgt mit 9600 Baud.",
      "Man arbeitet mit einem einzelnen Ton von 9600 Hz.",
      "Die Frequenz am Packet-Radio-Eingang beträgt 9600 Hertz."
    ],
    "correctIndex": 1
  },
  {
    "nummer": "14.14",
    "chapter": 14,
    "chapterTitle": "Analoge und digitale Modulationsverfahren",
    "question": "Welches ist eine gängige Übertragungsrate in Packet Radio?",
    "options": [
      "2700 Baud",
      "6400 Baud",
      "9600 Baud",
      "12000 Baud"
    ],
    "correctIndex": 2
  },
  {
    "nummer": "14.15",
    "chapter": 14,
    "chapterTitle": "Analoge und digitale Modulationsverfahren",
    "question": "Eine Packet-Radio-Mailbox ist",
    "options": [
      "eine Zusatzeinrichtung, die E-Mails umwandelt und anschliessend zwischenspeichert.",
      "eine fernbedient oder automatisch arbeitende Funkstelle, die Internetnachrichten zwischenspeichert.",
      "die Softwaresteuerung einer automatischen Funkstelle.",
      "ein Rechnersystem, bei dem Texte und Daten über Funk eingespeichert und abgerufen werden können."
    ],
    "correctIndex": 3
  },
  {
    "nummer": "14.16",
    "chapter": 14,
    "chapterTitle": "Analoge und digitale Modulationsverfahren",
    "question": "Um RTTY-Betrieb durchzuführen benötigt man ausser einem Transceiver beispielsweise",
    "options": [
      "eine Zusatzeinrichtung, die RTTY-Signale umwandelt und anschliessend zwischenspeichert.",
      "einen PC mit Soundkarte und entsprechender Software.",
      "einen RTTY-Microcontroller.",
      "einen Fernschreiber."
    ],
    "correctIndex": 1
  },
  {
    "nummer": "14.17",
    "chapter": 14,
    "chapterTitle": "Analoge und digitale Modulationsverfahren",
    "question": "Welcher Unterschied zwischen den Betriebsarten ATV und SSTV ist richtig?",
    "options": [
      "SSTV belegt eine grössere Bandbreite als ATV.",
      "SSTV wird nur auf Kurzwelle, ATV auf UKW verwendet.",
      "SSTV überträgt Standbilder, ATV bewegte Bilder.",
      "SSTV ist schwarzweiss, ATV in Farbe."
    ],
    "correctIndex": 2
  },
  {
    "nummer": "14.18",
    "chapter": 14,
    "chapterTitle": "Analoge und digitale Modulationsverfahren",
    "question": "Welches der folgenden digitalen Übertragungsverfahren hat die geringste Bandbreite?",
    "options": [
      "PSK31",
      "Pactor",
      "Packet Radio",
      "RTTY"
    ],
    "correctIndex": 0
  },
  {
    "nummer": "14.19",
    "chapter": 14,
    "chapterTitle": "Analoge und digitale Modulationsverfahren",
    "question": "Wie heisst die Übertragungsart mit zwei Übertragungskanälen, bei der durch Umschaltung abwechselnd in beide Richtungen gesendet werden kann?",
    "options": [
      "Simplex",
      "Duplex",
      "Semiduplex oder Halbduplex",
      "Vollduplex"
    ],
    "correctIndex": 2
  }
];
