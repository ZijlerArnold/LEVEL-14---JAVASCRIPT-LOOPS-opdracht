// Schrijf een for-loop dit "iterate" van 60 tot 100. Dit is de "score" (grade)  van de student.
// Voor elke loop, roep de bovenstaande functie aan met de i (grade) als argument. 
// Console.log vervolgens: "Voor 91 punten, krijg je een A". 
// De uitkomst is 40 regels lang. 

//  "Voor 60 punten, krijg je een F". 
// ....
// "Voor 66 punten, krijg je een D".
// ....
// "Voor 85 punten, krijg je een B"
// etc etc. 
// ========================================================================
console.log('');
console.log('                     The Grade Assigner ');
console.log('                   ======================');
console.log('')

const assignGrade = score => {
    if (score >= 90) {
        return `Voor punten: ${score}, krijg je een A`;
    } else if (score > 80) {
        return `Voor punten: ${score}, krijg je een B`;
    } else if (score > 70) {
        return `Voor punten: ${score}, krijg je een C`;
    } else if (score > 65) {
        return `Voor punten: ${score}, krijg je een D`;
    } else {
        return `Voor punten: ${score}, krijg je een F`;
    }
}
for (score = 60; score <= 90; score++) {
    console.log(assignGrade(score));
}
console.log('');
console.log('               udo, udo, udo, thats all folks :-)');
console.log('')