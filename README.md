# Dag 1 · Variabler, typer och villkor

*Modul 5, UI/UX & Frontendutveckling (JavaScript), Lexicon IT-Proffs*

## Vad du ska göra idag

Du skriver dina första rader JavaScript: variabler, datatyper, uträkningar och villkor. Allt är ett kassasystem för **Kafé Kardemumma** som skriver ut ett kvitto i Console. Det finns ingen design idag. Det du ser är bara text i Console.

## Bakgrund

I modul 4 byggde du sidans struktur och utseende. JavaScript gör sidan **levande**: den kan räkna, välja och reagera. Idag lär du dig byggstenarna: att spara värden i **variabler**, att veta vilken **typ** ett värde har, och att låta koden **välja väg** med villkor. Allt körs i webbläsaren och du ser resultatet i *Console* (tryck F12). Du behöver inte installera något nytt: samma VS Code och Live Server som i modul 4.

## Så arbetar du (varje dag)

Du använder Git och GitHub varje dag, precis som i modul 4. Den här modulen fördjupar det: på dag 9 lär du dig grenar och att lösa konflikter,.

### Engångsinställning (bara om du inte gjorde den i modul 4)

Öppna terminalen i VS Code (Ctrl+ö) och kör, med ditt eget namn och din e-post från GitHub:

```
git config --global user.name "Ditt Namn"
git config --global user.email "din@epost.se"
```

### Flödet

1. **Forka repot.** Klicka på *Fork* uppe till höger på GitHub, sedan *Create fork*. Du får en egen kopia under ditt användarnamn.
2. **Klona din fork.** Klicka på den gröna knappen *Code*, fliken *HTTPS*, och kopiera adressen. I terminalen: gå till den mapp där du vill ha dina projekt (till exempel `cd Documents`) och skriv `git clone ` följt av adressen.
3. **Öppna den nya mappen i VS Code** (*File → Open Folder*). Starta *Live Server* (högerklicka på `index.html` → *Open with Live Server*).
4. **Gör uppgiften.** Spara ofta. Titta i Console (F12) efter varje steg.
5. **Spara i Git och skicka upp.** Gör en commit efter varje avslutat steg:
   ```
   git add .
   git commit -m "Dag 1: skriver ut första raden"
   git push
   ```
   Meddelandet mellan citattecknen ska beskriva vad du gjorde.
6. **Kontrollera på GitHub.** Ladda om din fork. Dina commits syns under *Commits*.
7. **Lämna in i Microsoft Forms** (länk finns i kanalen). Du klistrar in länkar, inget annat.

Fastnar du: skriv ner exakt var och vad du försökt (och vilket felmeddelande du fick), och ta det först i nästa handledda pass.

## Uppgiften steg för steg

### Steg 1. Kalibrering (15 minuter, ingen bedömning)

Läs `KALIBRERING.md` och gör den i en egen fil, `kalibrering.js`. Det är för att jag ska se var vi står, inte för att bedöma dig. Skriv "vet inte" som kommentar om du fastnar. Vi går igenom grunderna riktigt oavsett hur det går.

### Steg 2. Skriv ut din första rad

Öppna `index.html` med Live Server och tryck F12, fliken *Console*. I `script.js`, under STEG 1, skriv `console.log("Hej från Kafé Kardemumma");` och spara. Ladda om sidan. Raden ska synas i Console. Gör en commit: `git add .` och `git commit -m "Dag 1: första console.log"`.

### Steg 3. Variabler

Under STEG 2: skapa `const kafeNamn`, `const prisBulle` (35), `const prisKaffe` (32), samt `let antalBullar` (2) och `let antalKaffe` (1). Skriv ut `kafeNamn`. Prova sedan att ändra `prisBulle` på en rad längre ned och se felet i Console: *Assignment to constant variable*. Läs felet högt. Ta bort raden igen.

### Steg 4. Datatyper

Under STEG 3: skapa en sträng, ett tal, en boolean, en variabel utan värde (`let x;`) och en `null`. Skriv ut `typeof` för alla fem på en rad. Vilken typ tror du att `null` har? Skriv din gissning som kommentar *innan* du kör.

### Steg 5. Räkna ut kvittot

Under STEG 4: räkna ut `summa` (antal gånger pris, för bullar och kaffe) och `momsDel` (12 % ingår i priset, alltså `summa * 0.12 / 1.12`). Skriv ut med mallsträngar (backticks och `${...}`). Moms ska ha två decimaler: `momsDel.toFixed(2)`. Momssatsen är fiktiv och används bara för att räkna.

### Steg 6. Villkor: studentrabatt

Under STEG 5: skapa `const ärStudent = true`. Med en `if`-sats ger du 10 % rabatt när `ärStudent === true`. Skriv ut `Att betala`. Byt till `false` och kontrollera att rabatten försvinner. Använd alltid `===`, aldrig `==`.

### Steg 7. Villkor: öppet eller stängt?

Under STEG 6: kaféet har öppet vardagar 7–18 och helger 9–16. Med `veckodag` och `klockslag` ska du räkna ut `öppet` (true eller false) med `if`, `else`, `&&` och `||`. Skriv ut `Öppet just nu: ja` eller `nej`. Testa fyra kombinationer genom att ändra värdena: lördag 8, lördag 15, måndag 6, måndag 17.

### Steg 8. Förutsäg, kör, jämför

Öppna `forutsagelser.md`. Skriv din gissning på vad varje rad ger **innan** du kör den. Kör sedan raderna i Console (eller i STEG 7) och fyll i vad som hände. Skriv en regel med egna ord för varje rad du gissade fel på.

## Så kan utskriften se ut när du är klar

Din text och dina tal kan skilja sig lite, men formen ska likna det här i Console:

```
Hej från Kafé Kardemumma
Kafé Kardemumma
string number boolean undefined object
Summa: 102 kr
Varav moms (12 %): 10.93 kr
Att betala: 91.80 kr
Öppet just nu: ja
53 2 2 0.30000000000000004 false true
```

## Kontrollista: så vet du att du är klar

- [ ] `script.js` skriver ut kvittot i Console utan röda felmeddelanden.
- [ ] Du använder `const` för värden som inte ändras och `let` för värden som ändras.
- [ ] Mallsträngar används i utskrifterna (backticks och `${...}`).
- [ ] Villkoren för rabatt och öppettider fungerar för alla fyra testfallen.
- [ ] Du har fyllt i `forutsagelser.md` med gissning *före* resultat.
- [ ] Du har gjort minst fyra commits, med meddelanden som beskriver vad du gjorde.

## Tips om du fastnar

- Rött felmeddelande i Console? Läs det. Det står vilken fil och rad det gäller: `script.js:12`.
- `ReferenceError: x is not defined` betyder oftast stavfel eller att variabeln skapas längre ned.
- `SyntaxError` betyder att du glömt en parentes, ett citattecken eller en klammer. Titta på raden *ovanför* den som anges.
- Inget händer? Spara filen och ladda om sidan (Ctrl+Shift+R). Kontrollera att `<script src="script.js" defer>` finns i `index.html`.
- JavaScript är känsligt för stora och små bokstäver: `prisBulle` och `prisbulle` är olika saker.

## Inlämning

**Deadline: imorgon klockan 09.00.** Allt lämnas in i Microsoft Forms. Du behöver inte redovisa något muntligt.

I formuläret fyller du i:

1. Länk till din fork av det här repot.
2. Reflektion: Vilken skillnad mellan `const` och `let` kan du förklara nu, och vilken av gissningarna i `forutsagelser.md` överraskade dig mest?

## Vill du mer? (frivilligt)

- Lägg till en tredje produkt och räkna in den i kvittot.
- Skriv en `switch`-sats som skriver ut veckodagens öppettider (läs om `switch` på MDN).
- Skriv ut kvittot som en snygg textlåda med `console.log` på flera rader.
