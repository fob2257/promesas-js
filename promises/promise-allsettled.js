const { goodPromise, badPromise } = require('../promises');

const promises = [goodPromise, goodPromise, badPromise, goodPromise];

Promise.allSettled(promises)
  .then(result => console.log(result))
  .catch(error => console.error(error)) // does not reach this promise
  .finally(() => console.log('Promise allSettled is done!'));
