const { goodPromise, badPromise } = require('./promises');

const promises = [goodPromise(), goodPromise(), badPromise(), goodPromise()];

Promise.all(promises)
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => console.log('Promise all is done!'));
