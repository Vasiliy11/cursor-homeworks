
export const powerOfNumber = (baseNumber, powerNumber) => {
  let result = 1;
  for (let i = 1; i <= Math.abs(powerNumber); i++) {
    powerNumber < 0 ? (result = result / baseNumber) : (result *= baseNumber);
  }
  return result;
};



