const { promiseGet } = require('../promises');

const uri = 'https://randomuser.me/api/?results=5';

const asyncFunc = async () => {
  try {
    const pendingPromise = promiseGet(uri);
    console.log(pendingPromise);

    const { body } = await pendingPromise;
    console.log(JSON.parse(body));
  } catch (error) {
    console.log(error);
  }
};

asyncFunc();
