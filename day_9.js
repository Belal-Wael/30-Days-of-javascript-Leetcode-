/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function (...args) { // ([1,2,3]) ---> (1,2,3)
    return args.length;
};


/**
 * argumentsLength(1, 2, 3); // 3
 */