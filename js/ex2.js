let promise1 = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve('I am Promise1');
        console.log('I am Promise1');
        document.getElementById('header').innerHTML = '1';
    }, 1000);
})
let promise2 = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve('Hello Promise2');
        console.log('I am Promise2');
        document.getElementById('header').innerHTML = '2';
    }, 2000);
})
let promise3 = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve('Hello Promise3');
        console.log('I am Promise3');
        document.getElementById('header').innerHTML = '3';
    }, 3000);
})
let promise4 = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve('Hello Promise4');
        console.log('I am Promise4');
        document.getElementById('header').innerHTML = '4';
    }, 4000);
})
let promise5 = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve('Hello Promise5');
        console.log('I am Promise5');
    }, 5000);
})

Promise.all([promise1,promise2,promise3,promise4,promise5]).then((result) => {
    console.log('All  tasks  are  ready!');
    document.getElementById('header').innerHTML = 'All  tasks  are  ready!';
})