/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) { // 7
    let temp = init; // 7
    return {
        increment() {
            return ++init;   // 5 --> 1= 6
        },
        decrement() {
            return --init;
        },
        reset() {
            init = temp;
            return init;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */