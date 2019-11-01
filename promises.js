const request = require('request');

exports.goodPromise = Promise.resolve('promise resolved!');

exports.badPromise = Promise.reject('promise rejected...');

exports.promiseGet = (uri = '') =>
  new Promise((resolve, reject) => {
    request.get(uri, (error, response) => {
      if (error) {
        return reject(error);
      }
      resolve(response);
    });
  });
