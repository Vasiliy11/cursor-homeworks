
let firstNumber;
let lastNumber;

do {
    firstNumber = +prompt('Введіть початкове значення');
} while (Number.isInteger(firstNumber) === false)
    
do{
    lastNumber = +prompt('Введіть кінцеве значення');
} while (lastNumber <= firstNumber || Number.isInteger(lastNumber) === false)

const passEvenNumbers = confirm("Пропускати парні числа?");

let sumOfNumbers = 0;
for (let i = firstNumber; i <= lastNumber; i++) {
    if ((i%2===1 || i%2===-1) && passEvenNumbers === true) {
        sumOfNumbers += i;
    } else if (passEvenNumbers === false){
        sumOfNumbers +=i;
    }
}

console.log(`Перше число: ${firstNumber}
Останнє число: ${lastNumber}
Пропускати парні числа?: ${passEvenNumbers}
Сума чисел: ${sumOfNumbers}`)

document.writeln(`Перше число: ${firstNumber} <br>
Останнє число: ${lastNumber} <br>
Пропускати парні числа?: ${passEvenNumbers} <br>
Сума чисел: ${sumOfNumbers}`)