
let firstNumber;
let lastNumber;

do {
    firstNumber = +prompt('Введіть початкове значення');
} while (!Number.isInteger(firstNumber))
    
do{
    lastNumber = +prompt('Введіть кінцеве значення');
} while (lastNumber <= firstNumber || !Number.isInteger(lastNumber))

const passEvenNumbers = confirm("Пропускати парні числа?");

let sumOfNumbers = 0;
for (let i = firstNumber; i <= lastNumber; i++) {
    if (i%2===0 && passEvenNumbers) {
        continue;
    }
    sumOfNumbers += i;
}

document.writeln(`Перше число: ${firstNumber} <br>
Останнє число: ${lastNumber} <br>
Пропускати парні числа?: ${passEvenNumbers} <br>
Сума чисел: ${sumOfNumbers}`)