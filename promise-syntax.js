const { promiseGet } = require('./promises');

const uri = 'https://randomuser.me/api/?results=5';

const pendingPromise = promiseGet(uri);
console.log(pendingPromise);

pendingPromise
    .then(({ body }) => console.log(JSON.parse(body)))
    .catch(error => console.log(error));
