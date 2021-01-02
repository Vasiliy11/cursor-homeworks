 export const getRandomArray = (length, max, min) => [...new Array(length)]
    .map(() => Math.round(Math.random()* (max + 1 - min) + min));






