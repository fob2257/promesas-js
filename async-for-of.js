const { goodPromise, badPromise } = require('./promises');

const promises = [goodPromise, goodPromise, badPromise, goodPromise];

const asyncFunc = async () => {
  try {
    for await (const p of promises) {
      console.log(p);
    }
  } catch (error) {
    console.log(error);
  }
  console.log('Async/await for of is done!');
}

asyncFunc();
