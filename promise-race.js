const { goodPromise, badPromise } = require('./promises');

const promises = [goodPromise(), goodPromise(), badPromise(), goodPromise()];

Promise.race(promises)
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => console.log('Promise race is done!'));
