async function helloWorld(){
    return await new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve('Hello World!');
        }, 5000);
    })
}
helloWorld().then(function(result){
    console.log(result);
    document.getElementById('header').innerHTML = result;
})