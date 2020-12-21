const getChineseChar = () => {
  const sign = Date.now().toString().slice(-5);
  return String.fromCharCode(sign);
};
const getRandomChar = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      return resolve(getChineseChar());
    }, 50)
  );
async function getRandomChinese(length) {
  let chineseChars = '';
  while (length > 0) {
    chineseChars += await getRandomChar();
    length--;
  }
  return chineseChars;
}
getRandomChinese(4).then((result) => console.log(result));
