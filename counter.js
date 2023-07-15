var createCounter = function(n) {
    console.log(n)
    return ()=> n++
};

console.log(createCounter(10))