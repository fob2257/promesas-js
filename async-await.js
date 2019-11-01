const { goodPromise, badPromise } = require('./promises');

const fn = () => goodPromise;

const asyncFunc = async () => {
  try {
    const result = await fn();

    console.log(result);
  } catch (error) {
    console.log(error);
  }
  console.log('Async/await is done!');
};

asyncFunc();
