const arr = [];

arr.push.apply(arr, [1,2,3,4,5])

const logger = (a) => console.log(`I am ${a}`);

logger.apply(null, arr);
