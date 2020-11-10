// Оголошення змінних
const apple = 15.678;
const avocado = 123.965;
const cherry = 90.2345;

// Найвища ціна товару
let maxPrice = Math.max(apple, avocado, cherry);
console.log(`Найвища ціна ${maxPrice}`);

//  Найнижча ціна товару
let minPrice = Math.min(apple, avocado, cherry);
console.log(`Найнижча ціна ${minPrice}`);

// Загальна ціна товарів
let totalPrice = apple + avocado + cherry;
console.log(`Сума ${totalPrice}`);

// Загальна ціна товарів без копійок
let intPrice = Math.floor(apple) + Math.floor(avocado) + Math.floor(cherry);
console.log(`Сума без копійок ${intPrice}`);

// Приблизна загальна ціна товарів
let approxPrice = Math.round((apple + avocado + cherry)/100)*100;
console.log(`Приблизна сума ${approxPrice}`);

// Парне чи непарне
let evenOrOddNumber = intPrice%2 == 0;
console.log(`${evenOrOddNumber}`);

// Решта з покупки трьох товарів
let balance = 500 - totalPrice;
console.log(`Решта ${balance}`);

// Середня ціна товару
let averagePrice = (apple + avocado + cherry)/3;
console.log(`Середня ціна ${averagePrice.toFixed(2)}`);

// Рандомна знижка на товар
let randomDiscount = Math.round(Math.random()*100);
let clientDiscount = apple - apple*randomDiscount/100;
console.log(`Знижка становить ${randomDiscount}%.`);
console.log(`Ціна яблук зі знижкою ${clientDiscount.toFixed(2)}`);
clientDiscount = avocado - avocado*randomDiscount/100;
console.log(`Ціна авокадо зі знижкою ${clientDiscount.toFixed(2)}`);
clientDiscount = cherry - cherry*randomDiscount/100;
console.log(`Ціна вишень зі знижкою ${clientDiscount.toFixed(2)}`);

// Прибуток від продажу товару при рандомній знижці на нього
let profit = apple/2 - apple*randomDiscount/100;
console.log(`Прибуток від продажу яблук ${profit.toFixed(2)}`);
profit = avocado/2 - avocado*randomDiscount/100;
console.log(`Прибуток від продажу авокадо ${profit.toFixed(2)}`);
profit = cherry/2 - cherry*randomDiscount/100;
console.log(`Прибуток від продажу вишень ${profit.toFixed(2)}`);

console.log(`Найвища ціна ${maxPrice},
Найнижча ціна ${minPrice},
Сума ${totalPrice},
Сума без копійок ${intPrice},
Приблизна сума ${approxPrice},
Число парне? - ${evenOrOddNumber},
Решта з 500 : ${balance},
Середня ціна ${averagePrice.toFixed(2)},
Знижка становить ${randomDiscount}%,
Ціна яблук зі знижкою ${clientDiscount.toFixed(2)},
Прибуток від продажу яблук ${profit.toFixed(2)}`)

