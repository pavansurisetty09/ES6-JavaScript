"use strict"

// // var a = 'Test1';
// // var b = 'Test2';

// // console.log(a);

// // console.log(b);

// function testvar(){
//     var a = 30;
//     if(true){
//         var a = 50;
//     console.log(a);
//     }
//     console.log(a);
// }

// function testlet() {
//     let a = 30;
//     if(true){
//         let a = 50;
//     console.log(a);
        
//     }
//     console.log(a);
// }

// for(let i = 0; i < 10; i++){
//     console.log(i);
// }

// console.log(i);

// const colors = []

// colors.push('red');
// colors.push('blue');

// colors = 'green';

// console.log(colors);

// class user{
//     constructor(username,email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }


//     static countUsers(){
//         console.log('There are 50 users');
//     }


//     register(){
//         console.log(this.username+' is now registered');
//     }
// } 

// // let bob = new user('bob', 'bob@gmail.com', '12345');

// // bob.register();

// // user.countUsers();

// class Member extends user{
//     constructor(username,email, password, memberPackage){

//         super(username,email, password);
//         this.package = memberPackage;
//     }
    
//     getPackage(){
//         console.log(this.username+' is subscribed to the '+this.package+' package');
//     }
// }

// let mike = new Member('mike', 'mike@gmail.com', '12345', 'standard');

// mike.register();

// let name = 'John';


// function makeUppercase(word){
//     return word.toUpperCase();
// }



//     let template = `<h1>${makeUppercase('hello')}, ${name}</h1>
//     <p>This is a simple template in JavaScript</p>`;

//     document.getElementById('template').innerHTML = template;

// let theString = 'Hello, my name is Rishi and I love JavaScript';

//startsWith()
//endsWith()
//includes()

// console.log(theString.startsWith('Hello'));
// console.log(theString.endsWith('JavaScript'));
//console.log(theString.includes('love'));

// Hex
// console.log(0xFF);

// Binary
// console.log(0b101011);

// Octal
// console.log(0o543);

//console.log(Number.isNaN('string'));
// console.log(Number.isInteger('infinity'));



// function greet($greeting = 'Hello World'){
//     console.log($greeting);
// }

// greet('Hello');

// let args1 = [1,2,3];
// let args2 = [4,5,6];
// let args = [7,8,9];


// function test(){
//     console.log(args1+','+args2);
// }

// // test.apply(null, args);

// test(...args1,...args2);

// var myArray = [11,22,34,65,34];

// let mySet = new Set(myArray);

// mySet.add('100');

// mySet.add({a: 1, b: 2});

// mySet.delete(22);

// mySet.add('100');
// mySet.add('200');


// console.log(mySet.size);

// mySet.forEach(function(val){
//     console.log(val);
// });

// let myMap = new Map([['a1','Hello'], ['b2', 'Goodbye']]);

// myMap.set('c3', 'Foo');
// myMap.delete('c3', 'Foo');
// myMap.clear();
// myMap.set('a1', 'Hello Rishi');

// console.log(myMap);


// let carWeakSet = new WeakSet();

// let car1 = {
//     make: 'Honda',
//     model: 'Civic'
// }
// carWeakSet.add(car1);


// let car2 = {
//     make: 'Honda',
//     model: 'Reno'
// }
// carWeakSet.add(car2);


// carWeakSet.delete(car2);

// console.log(carWeakSet);


// let carWeakMap = new WeakMap();


// let key1 = {
//     id : 1
// }

// let car1 = {
//     make: 'Honda',
//     model:'Civic'
// }

// let key2 = {
//     id : 2
// }

// let car2 = {
//     make: 'Toyato',
//     model:'Camry'
// }

// carWeakMap.set(key1, car1);
// carWeakMap.set(key2, car2);

// carWeakMap.delete(key1);
// console.log(carWeakMap);


// function Prefixer(prefix){

//     this.prefix = prefix;
// }

// Prefixer.prototype.prefixArray = function(arr){

//     return arr.map((x) => {
//         console.log(this.prefix + x);
//     });
// }

// let pre = new Prefixer('Hello ');
// pre.prefixArray(['Brad', 'Jeff']);

// let add = function(a,b){
//     let sum = a+b;
//     console.log(sum);
//     return false;
// }


// let add = (a,b) => {
//     let sum = a+b;
//     console.log(sum);
//     return false;
// }


// add(10,2)


// function getData(method, url){

//     return new Promise(function(resolve, reject){
//         var xhr = new XMLHttpRequest();
//         xhr.open(method, url);
//         xhr.onload = function(){
//             if(this.status >= 200 && this.status < 300){
//                 resolve(xhr.response);
//             }else {
//                 reject({
//                     status: this.status,
//                     statusText: xhr.statusText
//                 })
//             }
//         };
//         xhr.onerror = function(){
//             reject({
//                 status: this.status,
//                 statusText: xhr.statusText
//             });
//         };
//         xhr.send();
//     });
// }



// getData('GET', 'https://jsonplaceholder.typicode.com/todos').then(function(data){
//    let todos = JSON.parse(data);
//    let output = '';
//    for(let todo of todos){
//     output += `
    
//     <li>
//     <h3>${todo.title}</h3>
//     <p>Completed: ${todo.completed}</p>
//     </li>
    
//     `;
//    }
//    document.getElementById('template').innerHTML = output;
// }).catch(function(err){
//     console.log(err);
// });


// function *g1(){
    //     console.log('Hello');
    //     yield 'Yield 1 Ran..';
    //     console.log('World');
    //     yield 'Yeild 2 Ran..';
    //     return 'Returned..';
    // }
    
    // var g = g1();
    
    // // console.log(g.next().value);
    // // console.log(g.next().value);
    // // console.log(g.next().value);
    
    // for(let val of g){
    //     console.log(val);
    // }
    
    
    //Immediately Resolved
    
    // var myPromise = Promise.resolve('Foo');
    
    // myPromise.then((res) => console.log(res));
    
    // var myPromise = new Promise(function(resolve, reject){
    
    //     setTimeout(() => resolve(4), 2000);
    
    // });
    
    // myPromise.then((res) => {
    //     res +=3;
    //     console.log(res);
    // });
    