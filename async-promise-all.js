const { goodPromise, badPromise } = require('./promises');

const promises = [goodPromise, goodPromise, badPromise, goodPromise];

const asyncFunc = async () => {
  try {
    const result = await Promise.all(promises);

    console.log(result);
  } catch (error) {
    console.log(error);
  }
  console.log('Async/await is done!');
};

asyncFunc();
