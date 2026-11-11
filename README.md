# Dag 1 · Variabler, typer och villkor

*Modul 5, UI/UX & Frontendutveckling (TypeScript), Lexicon IT-Proffs*

## Vad du ska göra idag

Du skriver dina första rader TypeScript: variabler, datatyper, uträkningar och villkor. Allt är ett kassasystem för **Kafé Kardemumma** som skriver ut ett kvitto i Console. Det finns ingen design idag. Det du ser är bara text i Console.

## Bakgrund

I modul 4 byggde du sidans struktur och utseende. Kod gör sidan **levande**: den kan räkna, välja och reagera. Webbläsaren förstår JavaScript. **TypeScript** är JavaScript med **typer** ovanpå: du skriver vilken sorts värde något ska vara (text, tal, sant eller falskt), och editorn varnar dig *innan* du kör koden om du blandar ihop dem. När sidan körs har typerna tagits bort, och det som körs är vanlig JavaScript. All JavaScript är giltig TypeScript.

Idag lär du dig byggstenarna: att spara värden i **variabler**, att veta vilken **typ** ett värde har, och att låta koden **välja väg** med villkor. Resultatet ser du i *Console* (tryck F12).

## Så arbetar du (varje dag)

Du använder Git och GitHub varje dag, precis som i modul 4. På dag 9 lär du dig grenar och att lösa konflikter.

### Engångsinställning (bara om du inte gjorde den i modul 4)

Öppna terminalen i VS Code (Ctrl+ö) och kör, med ditt eget namn och din e-post från GitHub:

```
git config --global user.name "Ditt Namn"
git config --global user.email "din@epost.se"
```

### Kolla att Node.js finns

TypeScript och Vite körs med Node.js, som du installerade i början av utbildningen. Skriv i terminalen:

```
node --version
```

Du ska se `v20.19` eller högre, eller `v22.12` eller högre. Ser du ett lägre nummer eller ett felmeddelande: säg till direkt.

### Flödet

1. **Forka repot.** Klicka på *Fork* uppe till höger på GitHub, sedan *Create fork*. Du får en egen kopia under ditt användarnamn.
2. **Klona din fork.** Klicka på den gröna knappen *Code*, fliken *HTTPS*, och kopiera adressen. I terminalen: gå till den mapp där du vill ha dina projekt (till exempel `cd Documents`) och skriv `git clone ` följt av adressen.
3. **Öppna den nya mappen i VS Code** (*File → Open Folder*).
4. **Installera projektets verktyg, en gång.** Öppna terminalen i VS Code och skriv:
   ```
   npm install
   ```
   Det tar en stund. Då hämtas Vite och TypeScript till en mapp som heter `node_modules`. Den mappen ska aldrig läggas upp på GitHub, och `.gitignore` ser till att den inte följer med.
5. **Starta utvecklingsservern:**
   ```
   npm run dev
   ```
   Terminalen skriver en adress, till exempel `http://localhost:5173/`. Håll Ctrl nedtryckt och klicka på den. Tryck F12 i webbläsaren och välj fliken *Console*. Sidan laddas om av sig själv varje gång du sparar. Stoppa servern med Ctrl+C.
6. **Gör uppgiften** i `src/main.ts`. Spara ofta. Titta i Console efter varje steg.
7. **Kolla typerna.** Röda understrykningar i VS Code är TypeScript som varnar. Du kan också köra alla kontroller på en gång i en andra terminal:
   ```
   npm run typecheck
   ```
   Ingen utskrift betyder att allt är rätt.
8. **Spara i Git och skicka upp.** Gör en commit efter varje avslutat steg:
   ```
   git add .
   git commit -m "Dag 1: skriver ut första raden"
   git push
   ```
   Meddelandet mellan citattecknen ska beskriva vad du gjorde.
9. **Kontrollera på GitHub.** Ladda om din fork. Dina commits syns under *Commits*.
10. **Lämna in i Microsoft Forms** (länk finns i kanalen). Du klistrar in länkar, inget annat.

Fastnar du: skriv ner exakt var och vad du försökt (och vilket felmeddelande du fick), och ta det först i nästa handledda pass.

> **Viktigt att förstå:** Vite tar bara bort typerna och kör koden. Den **kontrollerar** dem inte. Därför kan sidan köras trots röda understrykningar. Det är editorn och `npm run typecheck` som säger till om typfel.

## Uppgiften steg för steg

### Steg 1. Kalibrering (15 minuter, ingen bedömning)

Läs `KALIBRERING.md` och gör den i en egen fil, `src/kalibrering.ts`. Det är för att jag ska se var vi står, inte för att bedöma dig. Skriv "vet inte" som kommentar om du fastnar. Vi går igenom grunderna riktigt oavsett hur det går.

### Steg 2. Skriv ut din första rad

Öppna `src/main.ts`. Under STEG 1, skriv `console.log("Hej från Kafé Kardemumma");` och spara. Raden ska synas i Console. Gör en commit: `git add .` och `git commit -m "Dag 1: första console.log"`.

### Steg 3. Variabler med typer

Under STEG 2: skapa `const kafeNamn: string`, `const prisBulle: number` (35), `const prisKaffe: number` (32), samt `let antalBullar: number` (2) och `let antalKaffe: number` (1). Skriv ut `kafeNamn`. Delen efter kolonet är **typen**. Prova sedan att ändra `prisBulle` på en rad längre ned: TypeScript understryker raden direkt, med texten *Cannot assign to 'prisBulle' because it is a constant*. Läs felet högt. I vanlig JavaScript hade du fått felet först när koden kördes. Ta bort raden igen.

### Steg 4. Datatyper

Under STEG 3: skapa en `string`, ett `number`, en `boolean`, en variabel av typen `undefined` (`let x: undefined;`) och en `null`. Skriv ut `typeof` för alla fem på en rad. Vilken typ tror du att `null` har? Skriv din gissning som kommentar *innan* du kör.

Prova sedan att ge din `number`-variabel en text, till exempel `tal = "text";`. Läs felet. Det är det TypeScript är till för.

### Steg 5. Räkna ut kvittot

Under STEG 4: räkna ut `summa` (antal gånger pris, för bullar och kaffe) och `momsDel` (12 % ingår i priset, alltså `summa * 0.12 / 1.12`). Skriv ut med mallsträngar (backticks och `${...}`). Moms ska ha två decimaler: `momsDel.toFixed(2)`. Håll musen över `toFixed(2)`: vilken typ ger den tillbaka? Momssatsen är fiktiv och används bara för att räkna.

Du behöver inte skriva typen på `summa` och `momsDel`. TypeScript ser att det blir ett `number` av uträkningen. Det kallas **inferens**. Håll musen över namnet och kolla.

### Steg 6. Villkor: studentrabatt

Under STEG 5: skapa `const ärStudent: boolean = true`. Med en `if`-sats ger du 10 % rabatt när `ärStudent === true`. Skriv ut `Att betala`. Byt till `false` och kontrollera att rabatten försvinner. Använd alltid `===`, aldrig `==`.

### Steg 7. Villkor: öppet eller stängt?

Under STEG 6: kaféet har öppet vardagar 7–18 och helger 9–16. Med `veckodag` (string) och `klockslag` (number) ska du räkna ut `öppet` (boolean) med `if`, `else`, `&&` och `||`. Skriv ut `Öppet just nu: ja` eller `nej`. Testa fyra kombinationer genom att ändra värdena: lördag 8, lördag 15, måndag 6, måndag 17.

### Steg 8. Förutsäg, kör, jämför

Öppna `forutsagelser.md`. Skriv din gissning på vad varje rad ger **innan** du kör den. Skriv dem sedan i STEG 7 i `main.ts`. TypeScript kommer att understryka några av dem. Läs felen och skriv i tabellen vad TypeScript sa. För att ändå köra en understruken rad skriver du `// @ts-expect-error` på raden ovanför. Det betyder: "jag vet att TypeScript klagar, kör ändå". Skriv en regel med egna ord för varje rad du gissade fel på.

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

- [ ] `src/main.ts` skriver ut kvittot i Console utan röda felmeddelanden.
- [ ] `npm run typecheck` ger ingen utskrift (inga typfel).
- [ ] Du använder `const` för värden som inte ändras och `let` för värden som ändras.
- [ ] Variablerna har typer där du skrev dem: `string`, `number`, `boolean`.
- [ ] Mallsträngar används i utskrifterna (backticks och `${...}`).
- [ ] Villkoren för rabatt och öppettider fungerar för alla fyra testfallen.
- [ ] Du har fyllt i `forutsagelser.md` med gissning *före* resultat.
- [ ] Du har gjort minst fyra commits, med meddelanden som beskriver vad du gjorde.

## Tips om du fastnar

- **Typfel i editorn** (röd understrykning): håll musen över och läs. *Type 'string' is not assignable to type 'number'* betyder att du försöker lägga text i en variabel som ska vara ett tal.
- **Fel i Console** (rött i webbläsaren): det står vilken fil och rad det gäller. `ReferenceError: x is not defined` betyder oftast stavfel. TypeScript fångar ofta samma sak i editorn, som *Cannot find name 'x'*.
- `npm: command not found` eller `node: command not found`: starta om VS Code. Hjälper inte det, säg till.
- **Windows: "running scripts is disabled on this system"** när du kör `npm`? Kör `npm.cmd install` och `npm.cmd run dev` i stället, eller byt terminal till *Command Prompt* (pilen intill + i terminalfönstret).
- Servern svarar inte? Kontrollera att `npm run dev` fortfarande körs i terminalen och att du öppnar adressen den skriver ut.
- JavaScript och TypeScript är känsliga för stora och små bokstäver: `prisBulle` och `prisbulle` är olika saker.

## Inlämning

**Deadline: imorgon klockan 09.00.** Allt lämnas in i Microsoft Forms. Du behöver inte redovisa något muntligt.

I formuläret fyller du i:

1. Länk till din fork av det här repot.
2. Reflektion: Vilken skillnad mellan `const` och `let` kan du förklara nu, och vilket typfel från TypeScript var mest användbart?

## Vill du mer? (frivilligt)

- Lägg till en tredje produkt och räkna in den i kvittot.
- Gör `veckodag` till en **unionstyp**: `let veckodag: "vardag" | "helg" = "helg";` Prova sedan att skriva `"lördag"` och läs felet.
- Skriv en `switch`-sats som skriver ut veckodagens öppettider (läs om `switch` på MDN).
