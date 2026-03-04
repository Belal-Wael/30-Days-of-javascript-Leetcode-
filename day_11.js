/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let map = new Map();
    return function (...args) {
        let key = JSON.stringify(args);
        if (map.has(key)) {
            return map.get(key);
        }
        const res = fn(...args);
        map.set(key, res);
        return res;
    }
}




/******************************************
const memoizedFn = memoize(fn);

if (action === "call") {
   memoizedFn(...values[i]);
}

if (action === "getCallCount") {
   return callCount;
}
******************************************/


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */