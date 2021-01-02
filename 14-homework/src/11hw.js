export const getChineseChar = () => {
  const sign = Date.now().toString().slice(-5);
  return String.fromCharCode(sign);
};

