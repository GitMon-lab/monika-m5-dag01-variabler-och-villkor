# Projektsteg dag för dag (Modul 5)

Det här är ditt eget projekt, **samma repo (`mitt-projekt`) som i modul 4**. Din webbplats blir levande med JavaScript. Du skapar inget nytt repo. Varje dag gör du ett steg *efter* dagens övning.

**Fokus:** bygg hellre två funktioner som är genomarbetade och testade än sex som är halvfärdiga. Välj funktioner som passar din egen tjänst: något som filtrerar eller sorterar, något som validerar, och något som hämtar data.

**Så använder du filen:** kopiera den till roten av `mitt-projekt` dag 1. Efter varje steg: `git add .`, `git commit -m "..."`, `git push`. Dag 9 och framåt arbetar du i grenar.

**Kraven du bedöms på** står i `KRAV.md` (du får den dag 13, men läs gärna igenom den redan nu i övningsrepot för dag 13).

## Dag 1 · Förbered JavaScript i ditt projekt

1. Kopiera `PROJEKTSTEG-MODUL5.md` från övningsrepot till roten i `mitt-projekt`, och `AI-REGLER-MODUL5.md` till `docs/`.
2. Skapa mappen `js/` och filen `js/main.js`. Lägg `<script src="js/main.js" defer></script>` i `<head>` i `index.html`.
3. Skriv `console.log("Projektet laddat")` i `main.js` och kontrollera i Console.
4. Skapa `docs/js-plan.md` och lista fem saker på din sida som borde vara dynamiska.
5. Lägg tre variabler i `main.js` som hör till ditt case (namn, pris, antal eller liknande).
6. Commit och push.

**Klart när:** Console visar "Projektet laddat" och `docs/js-plan.md` har fem punkter.

**AI-spår:** Lista fem saker på din sida som borde vara dynamiska. Lägg listan i docs/js-plan.md. (logga i `docs/ai-logg.md`)

## Dag 2 · Skriv två funktioner med tester för ditt case

1. Skapa `js/funktioner.js` och två funktioner som hör till ditt case, till exempel `formateraPris`, `beräknaRabatt` eller `ärGiltigtNamn`.
2. Skapa mappen `tests/`. Kopiera `test.js` och `tests.html` från övningsrepot dit. Ändra sökvägen i `tests.html` så att den pekar på `../js/funktioner.js`.
3. Skapa `tests/tests.js` med minst tre tester per funktion, inklusive ett hörnfall (tomt värde, noll, negativt).
4. Öppna `tests/tests.html` med Live Server. Alla tester ska vara gröna.
5. Commit och push.

**Klart när:** `tests/tests.html` visar minst sex gröna tester.

**AI-spår:** Skriv två funktioner för ditt case (till exempel formatera pris, validera inmatning) och ett test för varje. (logga i `docs/ai-logg.md`)

## Dag 3 · Lägg ditt innehåll som data och bygg moduler

1. Skapa `js/data.js` som exporterar en array med minst sex objekt från ditt case (till exempel produkter, uppgifter eller artiklar). Varje objekt ska ha minst fyra egenskaper.
2. Flytta funktionerna från igår till en modul: lägg `export` framför dem i `js/funktioner.js`.
3. Skapa en funktion med `filter` och en med `map` som arbetar med din data, i `js/data-funktioner.js`.
4. Ändra `<script>` i `index.html` till `type="module"` och importera din data i `js/main.js`. Skriv ut den i Console.
5. Uppdatera `tests/`: kopiera `testlib.js` från övningsrepot, byt `tests.html` till `type="module"` och skriv minst ett test för varje ny funktion.
6. Commit och push.

**Klart när:** `tests/tests.html` är grönt och `js/data.js` har minst sex objekt.

**AI-spår:** Lägg dina data i js/data.js som en array av minst sex objekt, och skriv ett filter med ett test. (logga i `docs/ai-logg.md`)

## Dag 4 · Rendera din egen data i sidan

1. Välj en lista i din sida som idag ligger som hårdkodad HTML (kort, produkter, uppgifter, steg).
2. Skapa `js/ui.js` med en funktion `skapaKort(objekt)` som returnerar ett element, byggt med `createElement` och `textContent`.
3. Skapa `visaLista(container, lista)` som tömmer och fyller containern, och visar ett meddelande när listan är tom.
4. Ersätt HTML-listan med en tom container och anropa `visaLista(...)` med din data från `js/data.js`.
5. Skriv minst tre tester för `skapaKort` och `visaLista` i `tests/tests.js`.
6. Commit och push.

**Klart när:** Din sida visar listan från `data.js`, och testerna är gröna.

**AI-spår:** Rendera minst en lista från din data i DOM:en med textContent. Logga att du kontrollerat risken. (logga i `docs/ai-logg.md`)

## Dag 5 · Interaktion och validering i ditt projekt

1. Skapa `js/events.js` och koppla minst två olika sorters interaktion i din sida (till exempel ett filter, en sökning eller en knapp som visar och döljer något), med event delegation där det passar.
2. Skriv en ren funktion för din filtrering eller sökning, och minst tre tester.
3. Skapa `js/validering.js` med minst två valideringsfunktioner för ditt formulär från modul 4, och minst fyra tester.
4. Koppla formuläret: felmeddelanden vid `blur` och `submit`, `aria-invalid`, `aria-describedby`, och fokus till första felet.
5. Testa allt med bara tangentbordet.
6. Commit och push.

**Klart när:** Minst tre olika interaktiva element fungerar, och formuläret validerar med tillgängliga felmeddelanden.

**AI-spår:** Skriv en specifikation och tester för ett filter i ditt projekt, låt AI föreslå koden och logga hur många försök det tog. (logga i `docs/ai-logg.md`)

## Dag 6 · Planera väntan i ditt projekt (ingen kod idag)

1. Skapa `docs/async-anteckningar.md`.
2. Lista tre ställen i ditt case där programmet måste vänta (till exempel hämta data, skicka ett formulär, spara något).
3. För varje ställe: skriv vad användaren ska se medan det väntar (laddar), om det går fel (fel) och om det inte finns något (tomt). Använd dina designade tillstånd från modul 3, dag 8.
4. Hitta ett öppet API utan nyckel som passar ditt case, eller skriv att du istället använder en egen JSON-fil. Lägg in två kandidater med länk till dokumentationen och en exempel-URL. Öppna URL:en i webbläsaren och kontrollera att den ger JSON.
5. Kontrollera villkoren för API:et (får det användas, kräver det källhänvisning?) och skriv en rad om det.
6. Commit och push.

**Klart när:** `docs/async-anteckningar.md` har tre ställen, tre tillstånd per ställe och ett valt API (eller en JSON-fil).

**AI-spår:** Skriv docs/async-anteckningar.md: tre ställen i ditt case där programmet måste vänta, och vad användaren ska se medan det väntar. (logga i `docs/ai-logg.md`)

## Dag 7 · Skriv din första async-funktion i ditt projekt

1. Skapa `js/api.js` i ditt projekt (samma repo som tidigare).
2. Skriv en `async function` som hämtar data för ditt case från din egen JSON-fil eller en låtsasserver (riktiga anrop kommer imorgon). Använd `await`.
3. Lägg in `try/catch` så att funktionen inte kraschar när något går fel, och skriv ett meddelande användaren kan förstå.
4. Skriv en funktion i stil med `laddaMeny` för ditt case: den ska anropa en callback med `laddar`, `klar`, `tomt` eller `fel`.
5. Skriv minst tre tester för tillstånden (klar, tomt, fel) i din testfil.
6. Commit och push.

**Klart när:** `js/api.js` har en async funktion med try/catch och en tillståndsfunktion, och minst tre tester är gröna.

**AI-spår:** Skriv js/api.js med en async funktion som hämtar din data. Testa att den klarar ett fel. (logga i `docs/ai-logg.md`)

## Dag 8 · Hämta riktig data i ditt projekt

1. Utöka `js/api.js` med `hamtaJson(url, fetchFn)` enligt övningen (kolla `ok`, hantera fel).
2. Hämta data för ditt case: antingen från ditt valda öppna API (se `docs/async-anteckningar.md`) eller från en egen JSON-fil i `data/`.
3. Visa tre tillstånd i ditt gränssnitt: laddar, fel (med *Försök igen*) och tomt. Använd `textContent`, aldrig `innerHTML`, för data du inte kontrollerar.
4. Skriv minst tre tester för `api.js` med en falsk fetch (ok, 404, nätfel).
5. Lägg in en kort anteckning i `docs/async-anteckningar.md`: vad såg du i DevTools Network med Offline och Slow 3G?
6. Commit och push.

**Klart när:** Ditt projekt hämtar riktig data, visar de tre tillstånden och minst tre tester med falsk fetch är gröna.

**AI-spår:** Hämta data till din sida med fetch och visa laddar, fel och tomt. Prova varje tillstånd. (logga i `docs/ai-logg.md`)

## Dag 9 · Arbeta i en gren i ditt projekt och lös en konflikt

1. Se till att `main` i ditt projekt fungerar och är pushad. `git status` ska vara rent.
2. Skapa en gren `feature/ny-funktion` (välj ett eget namn som beskriver vad den gör). Gör minst två commits där.
3. Skapa en medveten, ofarlig konflikt i `docs/git-logg.md` i projektet: ändra samma rad på `main` och på grenen. Slå ihop och lös den.
4. Pusha grenen och öppna en pull request till `main` på ditt eget repo (kontrollera *base repository*). Mergea den.
5. Lägg till `.gitignore` om du saknar en (`.env`, `*.log`, `node_modules/`).
6. Dokumentera i `docs/git-logg.md` i projektet: grafen, konflikten och hur du löste den.
7. Commit och push.

**Klart när:** Projektet har en mergad pull request, en löst konflikt, en `.gitignore` och en ifylld `docs/git-logg.md`.

**AI-spår:** Arbeta i en feature-branch i mitt-projekt, öppna en pull request till din egen main och lös en konflikt. Dokumentera i docs/git-logg.md. (logga i `docs/ai-logg.md`)

## Dag 10 · Integrera delarna i ditt projekt

1. Skriv en plan i tre steg (händelse, hämtning, uppdatering) för en integrationsfunktion i ditt projekt i `docs/plan-integration.md`.
2. Skriv en ren funktion för den logik som beror på hämtad data (som `rekommendera`), med minst fem tester inklusive gränsfall.
3. Koppla ihop i din `main.js`: användarens val, hämtning med tre tillstånd, den rena funktionen och uppdatering av sidan.
4. Hantera svar i fel ordning, till exempel med en egen version av `senasteVinner`.
5. Gör i en feature-gren och en pull request till din egen main (Git från dag 9).
6. Commit och push.

**Klart när:** Projektet har en integrationsfunktion som kopplar ihop användarens val, hämtad data och en ren, testad funktion, och hanterar fel och svar i fel ordning.

**AI-spår:** Bygg en integrationsfunktion i ditt eget case (händelse → hämtning → uppdaterat gränssnitt) och logga din AI-användning. (logga i `docs/ai-logg.md`)

## Dag 11 · Refaktorera din egen kod

1. Kör alla tester i ditt projekt. De ska vara gröna innan du börjar.
2. Läs `js/main.js` och dina andra filer. Skriv i `docs/refaktorering.md` i projektet minst fem kodlukter du hittar i din egen kod.
3. Dela upp den största eller rörigaste funktionen i mindre delar, eller flytta ut en modul. Kör testerna efter varje steg.
4. Saknar koden tester? Skriv först tester som beskriver beteendet (karakteriseringstester), och bygg sedan om.
5. Gör i en feature-gren och en pull request till din egen main.
6. Commit och push.

**Klart när:** Projektets kod är uppdelad i tydligare moduler, testerna är gröna, och `docs/refaktorering.md` beskriver fem kodlukter och vad du gjort.

**AI-spår:** Dela upp ditt projekts JavaScript i moduler. Kör dina tester efter varje steg och committa efter varje steg. (logga i `docs/ai-logg.md`)

## Dag 12 · Kvalitetssäkra ditt projekt

1. Kopiera `docs/KVALITETSLISTA.md` från övningen till ditt eget projekt och gå igenom varje punkt.
2. Kör Lighthouse (Mobile) på din sida. Notera poängen före, åtgärda det som är billigt och notera poängen efter.
3. Leta efter minst tre egna buggar eller brister (prova tom data, trasig data, Offline, tangentbord) och skriv ett test för varje du kan.
4. Rätta dem, en commit per rättning.
5. Se till att alla tester är gröna och att README förklarar hur man startar projektet och kör testerna.
6. Commit och push.

**Klart när:** Projektet har en ifylld kvalitetslista, Lighthouse-poäng före och efter, minst tre dokumenterade buggar eller brister med tester, och gröna tester.

**AI-spår:** Gå igenom kvalitetslistan på ditt projekt. Be AI granska säkerhet och tillgänglighet i dynamiskt innehåll, och verifiera. (logga i `docs/ai-logg.md`)

## Dag 13 · Slutredovisning av ditt projekt

1. Fyll i bevisraderna i `docs/KRAV.md` för alla nio krav.
2. Åtgärda de brister du hittar som går att åtgärda före din tur. Dokumentera de du lämnar.
3. Skriv `README.md` och manus i `docs/REDOVISNING.md`.
4. Kör `AI-FORHOR.md` och öva med timer.
5. Redovisa (8 minuter plus 2 minuter frågor).
6. Fyll i `docs/SJALVBEDOMNING.md`.
7. Commit och push.

**Klart när:** Projektet är redovisat. `docs/KRAV.md` har bevis, `docs/REDOVISNING.md` har ett manus och `docs/SJALVBEDOMNING.md` är ifylld.

**AI-spår:** Fyll i redovisningsmallen, inklusive AI-delen, och öva 8 minuter med klocka. (logga i `docs/ai-logg.md`)

