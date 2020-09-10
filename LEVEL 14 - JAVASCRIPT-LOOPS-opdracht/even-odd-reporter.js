// 1. Even Odd Reporter
// Schrijf een loop die "iterate" van 0 tot 20.
// Voor elke loop, check of het huidige nummer even is of oneven(odd).
//     Console.log het nummer.
//         Tip: gebruik de modulo functionaliteit .
// Resultaat in de console:
// 1 is oneven
// 2 is even
// 3 is oneven
// 4 is even
// etc.... s
// ========================================================================
console.log('');
console.log('                    Even Odd Reporter');
console.log('                   =====================');
console.log('')

let i = 1;

while (i <= 20) {
    if (i % 2 == 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
    i++;
}
console.log('');
console.log('dat was het dames en heren');
console.log('');
