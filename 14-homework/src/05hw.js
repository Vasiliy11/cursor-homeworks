export const getAverage = (...numbers) => {
  const intNumbers = numbers.filter((number) => (number ^ 0) === number);
  let totalNum = intNumbers.reduce((total, number) => total + number, 0);
  return totalNum / intNumbers.length;
};

