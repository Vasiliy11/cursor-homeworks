const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// Функція 1
const getMyTaxes = function (salary) {
  return salary * this.tax;
};

// Функція 2
const getMiddleTaxes = function () {
  return this.tax * this.middleSalary;
};

// Функція 3
const getTotalTaxes = function () {
  return getMiddleTaxes.call(this) * this.vacancies;
};

// Функція 4
const getMySalary = function () {
  setInterval(() => {
    const minSalary = 1500;
    const maxSalary = 2000;
    const salary = Math.floor(
      Math.random() * (maxSalary - minSalary + 1) + minSalary
    );
    const taxes = +getMyTaxes.call(this, salary).toFixed(2);
    const profit = +(salary - taxes).toFixed(2);
    const randomSalary = {
      salary,
      taxes,
      profit,
    };
    console.log(randomSalary);
  }, 10000);
};

console.log(`Податок в Україні: ${getMyTaxes.call(ukraine, 10000)}`);
console.log(`Середній податок в Україні: ${getMiddleTaxes.call(ukraine)}`);
console.log(`Сума податків в Україні: ${getTotalTaxes.call(ukraine)}`);
getMySalary.call(ukraine);
