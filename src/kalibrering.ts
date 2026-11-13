let fornamn: string = 'Monika'
let efternamn: string = 'Lythell'
console.log(fornamn + ' ' + efternamn)

let tal1: number = 10
let tal2: number = 20
console.log('Summa av tal: ' + tal1 + tal2)

if (tal1 || tal2 > 20) {
    console.log('Större')
} else {
    console.log('Litet')
}

for (let i = 1; i <= 5; i++) {
    console.log(i)
}

for (let i = 2; i <= 5; i += 2) {
    console.log('heltal ' + i)
}

for (let i = 1; i <= 5; i += 2) {
    console.log('udda ' + i)
}

for (let i = 1; i < 5; i++) {
    if (i % 2 === 0) {
        console.log(i + ' är jämnt')
    } else {
        console.log(i + ' är udda')
    }
}

let counter: number

counter = 0
while (counter <= 5) {
    console.log(counter)
    counter += 2
}
counter = 1
while (counter <= 5) {
    console.log('while ' + counter)
    counter += 2
}

counter = 0
while (counter <= 5) {
    console.log(
        counter % 2 ? 'while udda ' + counter : 'while jämnt ' + counter
    )
    counter++
}
counter = 0
do {
    console.log(
        counter % 2 ? 'do while udda ' + counter : 'do while jämnt ' + counter
    )
    counter++
} while (counter <= 5)

counter = 5
switch (counter % 2) {
    case 0:
        console.log(counter + ' är jämnt')
        break
    case 1:
        console.log(counter + ' är udda')
        break
    default:
        console.log('Ogiltigt nummer')
        break
}

//4. Skriv en loop som skriver ut talen 1 till 5. (Vet du inte hur? Skriv "vet inte".)
//5. Skriv en funktion som tar emot ett tal och returnerar talet gånger två. (Vet du inte hur? Skriv "vet inte".)

//5. Hann inte, måste också kika på den, tittar på det i nästa uppgift
