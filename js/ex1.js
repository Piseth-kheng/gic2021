let promise = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve('Hello World!');
    }, 5000);
})

promise.then(function(result){
    console.log(result);
    document.getElementById('header').innerHTML = result;
})