
export const sumNumbers = (firstNumber, lastNumber) => {
  
  const passEvenNumbers = confirm('Пропускати парні числа?');
  
  let sumOfNumbers = 0;
  for (let i = firstNumber; i <= lastNumber; i++) {
    if (i % 2 === 0 && passEvenNumbers) {
      continue;
    }
    sumOfNumbers += i;
  }
  console.log(`HW_2:   
  Перше число: ${firstNumber}
  Останнє число: ${lastNumber} 
  Пропускати парні числа?: ${passEvenNumbers}
  Сума чисел: ${sumOfNumbers}`);
}
