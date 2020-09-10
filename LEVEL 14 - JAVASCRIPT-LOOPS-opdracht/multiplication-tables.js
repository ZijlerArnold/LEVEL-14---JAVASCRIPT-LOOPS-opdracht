// 2. Multiplication tables
// Iedereen kent ze nog wel: de tafel tabellen van de basischool. We gaan nu een script schrijven dat de tafel tabellen voor je print in de console. 
// Schrijf een loop die "iterate" van 0 tot 10. 
// Gebruik voor het eerste voorbeeld de tafel van 9. 
// Console.log elke keer de uitkomst van de tafel van 9 naar de console. 
// Resultaat: 
// 1 x 9 = 9 
// 2 x 9 = 18 
// 3 x 9 = 27 
// etc.....
// Bonus: gebruik een geneste for-loop, om alle tafels van 1 t/m 10 te printen naar de console. 
// Het resultaat bestaat uit 100 regels code in je console. 
// ========================================================================
console.log('');
console.log('                   Multiplication tables');
console.log('                   =====================');
console.log('')

let i = 1;
let number = 9;
while (i <= 10) {
    let som = i * number;
    console.log(`${i} x ${number} = ${som}`);
    i++;
}
console.log('')
console.log(`test is klaar`);
console.log('')