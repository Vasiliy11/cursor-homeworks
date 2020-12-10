// Максимальна цифра в числі
const getMaxDigit = (number) =>
  Math.max(...Array.from(String(number)).map((item) => parseInt(item)));

// Ступінь числа
const powerOfNumber = (baseNumber, powerNumber) => {
  let result = 1;
  for (i = 1; i <= Math.abs(powerNumber); i++) {
    powerNumber < 0 ? (result = result / baseNumber) : (result *= baseNumber);
  }
  return result;
};

// Слово з великої літери
const formatName = (name) =>
  name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

// Зарплата без податку
const calculateSalary = (salary) => {
  const tax = 19.5;
  return +(salary * (1 - tax / 100)).toFixed(2);
};

// Рандомне число
const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

// Кількість повторень букви у реченні
const countLetter = (letter, str) => {
  let count = 0;
  str = str.toLowerCase();
  for (let item of str) {
    if (item === letter) {
      count++;
    }
  }
  return count;
};

// Конвертер валют
const exchangeCurrency = (amount) => {
  const exchangeRate = 28;
  const dollarSign = '$';
  const uahSign = 'uah';

  if (amount.includes(dollarSign)) {
    return amount.replace(dollarSign, '') * exchangeRate;
  } else if (amount.toLowerCase().includes(uahSign)) {
    return amount.replace(uahSign, '') / exchangeRate;
  } else throw new Error('Not supported currency');
};

// Генератор пароля
const getRandomPassword = (passLength) => {
  let password = '';
  if (!passLength) {
    passLength = 8;
  }
  for (let i = 1; i <= passLength; i++) {
    password += Math.floor(Math.random() * 10);
  }

  return password;
};

// Паліндром
const isPalindrom = (str) => {
  str = str.toLowerCase().replaceAll(' ', '');
  let strReverse = str.split('').reverse().join('');
  return strReverse === str;
};

document.writeln(`Функція №1: максимальна цифра: ${getMaxDigit(514952)} <br>
Функція №2: число пднесене до степеня: ${powerOfNumber(-2, 3)} <br>
Функція №3: правильно написане ім\'я: ${formatName('jOhN')} <br>
Функція №4: чиста зарплата: ${calculateSalary(1000)} <br>
Функція №5: рандомне число в заданому діапазоні: ${getRandomNumber(5, 15)} <br>
Функція №6: кількість літер у реченні: ${countLetter('t', 'Ten letters')} <br>
Функція №7: конвертована валюта: ${exchangeCurrency('$1000')} <br>
Функція №8: ваш пароль: ${getRandomPassword(10)} <br>
Функція №10: чи є фраза паліндромом?  - ${isPalindrom('avalava')}`);
