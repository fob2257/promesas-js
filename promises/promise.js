const goodPromise = new Promise((resolve, reject) => {
  resolve('promise resolved!');
});

goodPromise.then(result => console.log(result));
