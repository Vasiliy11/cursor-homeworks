const getMaxDigit = function (number) {
  number = number.toString();
  let maxItem = 0;
  for (num of number) {
    if (num > maxItem) {
      maxItem = num;
    }
  }
  return maxItem;
};

document.writeln(
  `Функція №1: максимальна цифра ${getMaxDigit(547564534389010.25564)}`
);

// const powerNumber = function(baseOfPower, result) {
//   let exponent = 0;
//   while (exponent !== result) {
//     exponent = baseOfPower
//   }
//   return exponent = Math.pow(result, 1/baseOfPower)
// }

// console.log(powerNumber(2, 16))

const formatName = function (name) {
  // name.toString();
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

document.writeln(`Функція №3: ${formatName('nAmE')}`);

const calculateSalary = function (salary) {
  const tax = 19.5;
  return +(salary * (1 - tax / 100)).toFixed(2);
};

document.writeln(`Функція №4: ${calculateSalary(1002)}`);

const getRandomNumber = function (min, max) {
  return +(Math.random() * (max - min + 1) + min).toFixed();
};

document.writeln(`Функція №5: ${getRandomNumber(10, 20)}`);


const isPalindrom = function (str) {
  str = str.toLowerCase().replaceAll(' ', '');
  let strReverse = str.split('').reverse().join('');
  if (strReverse === str) {
    return true;
  } else {
    return false;
  }
};

document.writeln(`Функція №6: ${isPalindrom('Я несу гусеня')}`);
