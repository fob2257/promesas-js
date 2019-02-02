const { goodPromise, badPromise } = require('./promises');

goodPromise().then(result => console.log(result));
