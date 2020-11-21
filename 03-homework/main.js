// Максимальна цифра в числі
const getMaxDigit = function (number) {
  do {
    number = +prompt('Введіть число');
  } while (isNaN(number));
  number = number.toString();
  let maxItem = +number[0];
  for (num of number) {
    if (+num > maxItem) {
      maxItem = +num;
    }
  }
  return maxItem;
};

// Ступінь числа
const powerOfNumber = function(baseNumber, powerNumber) {
  do {
   baseNumber = +prompt('Введіть число, яке потрібно піднести до степеня');
   powerNumber = +prompt('Введіть степінь, до якого потрібно піднести попереднє число');
  } while (isNaN(baseNumber) && isNaN(powerNumber));
  let result = 1;
  for( i = 1; i <= Math.abs(powerNumber); i++) {
    if( powerNumber < 0) {
      result = result/baseNumber
    } else {
      result *= baseNumber
    }
  }
  return result  
}


// Слово з великої літери
const formatName = function (name) {
  name = prompt("Введіть ім'я");
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};


// Зарплата без податку
const calculateSalary = function (salary) {
  do {
    salary = +prompt('Введіть зарплату');
  } while (isNaN(salary));
  const tax = 19.5;
  return +(salary * (1 - tax / 100)).toFixed(2);
};


// Рандомне число
const getRandomNumber = function (min, max) {
  do {
    min = +prompt('Введіть мінімальне значення');
  } while (isNaN(min));

  do {
    max = +prompt('Введіть максимальне значення');
  } while (max <= min || isNaN(max));
  return Math.floor(Math.random() * (max - min + 1) + min);
};


// Кількість повторень букви у реченні
const countLetter = function (letter, str) {
  letter = prompt('Введіть букву, чию кількість треба порахувати');
  str = prompt('Введіть речення');
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  return count;
};

// Конвертер валют
const exchangeCurrency =  function (param) {
  const uahTo$ = 1/28;
  const $toUAH = 28;
  result = null;
  do {
      param = prompt('Введіть валюту для конвертації');
  } while ((param.indexOf('uah') === -1) && (param.indexOf('$') === -1) || isNaN(parseFloat(param)))
  if(param.includes('uah')) {
      result = parseFloat(param)*uahTo$; 
  } else if (param.includes('$')) {
      result = parseFloat(param)*$toUAH
  }
  return result
}

// Генератор пароля

const getRandomPassword = function (num) {
  do {
    num = +prompt('Введіть число для генерації пароля', 8);
  } while (!Number.isInteger(num));
	let password = '';
	if (num === 0) {
    num = 8;
  }
	for (let i = 1; i <= num; i++){
		password += Math.floor(Math.random()*10);
	}
	return password;
}

// Паліндром
const isPalindrom = function (str) {
  str = prompt('Введіть фразу, яку потрібно перевірити, чи вона паліндром');
  str = str.toLowerCase().replaceAll(' ', '');
  let strReverse = str.split('').reverse().join('');
  return strReverse === str;
};



document.writeln(`Функція №1: максимальна цифра: ${getMaxDigit()} <br>
Функція №2: число пднесене до степеня: ${powerOfNumber()} <br>
Функція №3: правильно написане ім\'я: ${formatName()} <br>
Функція №4: чиста зарплата: ${calculateSalary()} <br>
Функція №5: рандомне число в заданому діапазоні: ${getRandomNumber()} <br>
Функція №6: кількість літер у реченні: ${countLetter()} <br>
Функція №7: конвертована валюта: ${exchangeCurrency()} <br>
Функція №8: ваш пароль: ${getRandomPassword()} <br>
Функція №10: чи є фраза паліндромом?  - ${isPalindrom()}`);
