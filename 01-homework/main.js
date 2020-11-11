const applePrice = 15.678;
const avocadoPrice = 123.965;
const cherryPrice = 90.2345;

const customersPay = 500;
let priceWithDiscount;
let profit;

const maxPrice = Math.max(applePrice, avocadoPrice, cherryPrice);
const minPrice = Math.min(applePrice, avocadoPrice, cherryPrice);
const totalPrice = applePrice + avocadoPrice + cherryPrice;
const intPrice = Math.floor(applePrice) + Math.floor(avocadoPrice) + Math.floor(cherryPrice);
const approxPrice = Math.round(totalPrice/100)*100;
const priceIsEven = intPrice%2 == 0;
const balance = customersPay - totalPrice;
const averagePrice = totalPrice/3;
const randomDiscount = Math.floor(Math.random()*101);

console.log(`Найвища ціна ${maxPrice}`);
console.log(`Найнижча ціна ${minPrice}`);
console.log(`Сума ${totalPrice}`);
console.log(`Сума без копійок ${intPrice}`);
console.log(`Приблизна сума ${approxPrice}`);
console.log(`${priceIsEven}`);
console.log(`Решта з 500 грн : ${+balance.toFixed(2)} грн`);
console.log(`Середня ціна ${averagePrice.toFixed(2)}`);

console.log(`Знижка становить ${randomDiscount}%.`);
priceWithDiscount = applePrice - applePrice*randomDiscount/100;
console.log(`Ціна яблук зі знижкою ${priceWithDiscount.toFixed(2)}`);
priceWithDiscount = avocadoPrice - avocadoPrice*randomDiscount/100;
console.log(`Ціна авокадо зі знижкою ${priceWithDiscount.toFixed(2)}`);
priceWithDiscount = cherryPrice - cherryPrice*randomDiscount/100;
console.log(`Ціна вишень зі знижкою ${+priceWithDiscount.toFixed(2)}`);
priceWithDiscount = totalPrice - totalPrice*randomDiscount/100;
console.log(`Ціна всіх товарів зі знижкою ${priceWithDiscount.toFixed(2)}`);

profit = applePrice/2 - applePrice*randomDiscount/100;
console.log(`Прибуток від продажу яблук ${+profit.toFixed(2)}`);
profit = avocadoPrice/2 - avocadoPrice*randomDiscount/100;
console.log(`Прибуток від продажу авокадо ${+profit.toFixed(2)}`);
profit = cherryPrice/2 - cherryPrice*randomDiscount/100;
console.log(`Прибуток від продажу вишень ${+profit.toFixed(2)}`);
profit = totalPrice/2 - totalPrice*randomDiscount/100;
console.log(`Прибуток від продажу всіх товарів ${+profit.toFixed(2)}`);


console.log(`Найвища ціна ${maxPrice} грн,
Найнижча ціна ${minPrice} грн,
Сума ${totalPrice} грн,
Сума без копійок ${intPrice} грн,
Приблизна сума ${approxPrice} грн,
Число парне? - ${priceIsEven},
Решта з 500 грн: ${+balance.toFixed(2)} грн,
Середня ціна ${+averagePrice.toFixed(2)} грн,
Знижка становить ${randomDiscount}%,
Ціна всіх товарів зі знижкою ${+priceWithDiscount.toFixed(2)} грн,
Прибуток від продажу всіх товарів ${+profit.toFixed(2)} грн`)
