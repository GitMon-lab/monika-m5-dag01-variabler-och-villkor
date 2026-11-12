# Förutsägelser (steg 8)

Skriv din gissning FÖRST. Skriv sedan raden i STEG 7 i `src/main.ts`, kör den och fyll i vad som hände. Skriv också vad TypeScript sa (ofta understryker den raden).

| Uttryck             | Min gissning | Det som hände | Vad sa TypeScript? | Hade jag rätt?               |
| ------------------- | ------------ | ------------- | ------------------ | ---------------------------- |
| `"5" + 3`           | 53           |               |                    |                              |
| `"5" - 3`           | 2            |               |                    | minus tolkas som number i js |
| `true + 1`          | 01           |               |                    |                              |
| `0.1 + 0.2`         | 0.3          |               |                    |                              |
| `"" === 0`          | false        |               |                    |                              |
| `null == undefined` | true         |               |                    |                              |

## Min regel för det jag missade

53
2 minus ger nummer
01
0.3
0 === 0 false eftersin tre====
true för att det är 2 ==, hade det varit striktare jämförelse med både type och värde dvs 3 === hade det blivit false. null är ett object och undefined så två olika typer

Skriv en mening med egna ord för varje uttryck du hade fel på.

## Tänk efter

Tre av raderna ger ett typfel i TypeScript, men JavaScript kör dem ändå. Vilka tre, och vad säger det om vad TypeScript kan och inte kan göra?
