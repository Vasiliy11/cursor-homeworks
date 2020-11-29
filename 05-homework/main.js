// Фкнкція 1
const getRandomArray = (length, min, max) => {
  const randomArr = [];
  for (let i = 0; i < length; i++) {
    randomArr.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return randomArr;
};

// Фкнкція 3
const getAverage = (...numbers) => {
  const intNumbers = numbers.filter((number) => (number ^ 0) === number);
  let totalNum = intNumbers.reduce((total, number) => total + number, 0);
  return totalNum / intNumbers.length;
};

// Функція 5
const filterEvenNumbers = (...numbers) => {
  return numbers.filter((number) => number % 2 !== 0);
};

// Функція 6
const countPositiveNumbers = (...numbers) => {
  return numbers.filter((number) => number > 0).length;
};

// Функція 7
const getDividedByFive = (...numbers) => {
  return numbers.filter((number) => number % 5 === 0);
};

// Функція 8
const replaceBadWords = (string) => {
  const badWords = ['fuck', 'shit'];
  badWords.forEach((badWord) => {
    const regex = new RegExp(badWord, 'gi');
    string = string.replace(regex, '*');
  });
  return string;
};

document.writeln(`Функція 1 : масив рандомних чисел >> ${getRandomArray(
  10,
  5,
  35
)} </br>
Фкнкція 3 : середнє арифметичне всіх аргументів >> ${getAverage(
  1,
  2,
  3,
  2.2
)} </br>
Функція 5 : відфільтровані числа >> ${filterEvenNumbers(
  1,
  -3,
  4,
  5,
  7,
  8
)} </br>
Функція 6 : кількість чисел більше нуля >> ${countPositiveNumbers(
  -2,
  5,
  7,
  0,
  -4
)} </br>
Функція 7 : числа, які діляться на 5 >> ${getDividedByFive(
  0,
  -5,
  4,
  25,
  6,
  -12
)} </br>
Функція 8 : заміна поганих слів >> ${replaceBadWords(
  "Are you fucking kidding?, Holy shit!, It's bullshit!"
)}`);
