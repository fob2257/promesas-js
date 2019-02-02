const request = require('request');

exports.goodPromise = () => new Promise((resolve, reject) => { resolve('promise resolved!'); });

exports.badPromise = () => new Promise((resolve, reject) => { reject('promise rejected...'); });

exports.promiseGet = (uri = '') =>
    new Promise((resolve, reject) => {
        request.get(uri, (error, response) => {
            if (error) {
                return reject(error);
            }
            resolve(response);
        });
    });