/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {

    let res1 = await promise1;
    let res2 = await promise2;
    return res1 + res2
};

/*

  const myPromise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation (e.g., API call)
  setTimeout(() => {
    const success = true; // or false
    if (success) {
      resolve("Operation successful!"); // Fulfills the promise
    } else {
      reject(new Error("Something went wrong")); // Rejects the promise
    }
  }, 1000);
});
  
 */

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */