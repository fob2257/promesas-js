const { goodPromise, badPromise } = require('./promises');

const asyncFunc = async () => {
    try {
        const result = await goodPromise();

        console.log(result);
    } catch (error) {
        console.log(error);
    }
    console.log('Async/await is done!');
};

asyncFunc();
