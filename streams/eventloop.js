
const fs =require('fs');
const crypto =require('crypto')

const start = Date.now();
setTimeout(() =>console.log("timer"),0);
setImmediate(()=> console.log("Immediate"));

fs.readFile('test-file.txt', ()=>{
    console.log('I/O finished');
    console.log("----------------------");
    setTimeout(() =>console.log("timer 1"),0);
    setTimeout(()=>console.log("Timer 2"),)
    setImmediate(()=> console.log("Immediate 1"));
    
    process.nextTick(() =>console.log("Process.nextTick"))
    crypto.pbkdf2('password' , 'salt',100000 ,1024,'sha512',() =>{
        console.log(Date.now() -start,"password encrypted")
    });
})
console.log(" hello from top level code");