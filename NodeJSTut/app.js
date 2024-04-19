// // __dirname Global Variable https://www.freecodecamp.org/news/get-started-with-nodejs/
// console.log(__dirname);

// // __filename Global Variable
// console.log(__filename);

// // Define a global variable in NodeJS
// global.myVariable = 'Hello World';

// // Access the global variable
// console.log(myVariable); // Output: Hello World

// const sayHello = require('./hello.js');

// sayHello('John');
// sayHello('Peter');
// sayHello('Rohit');

// // app.js

// const myFunction = require('./myModule');

// myFunction(); // logs 'Hello from myFunction!'


// OS Provides Info about Operating System
const os = require('os')

// os.uptime()
const systemUptime = os.uptime();

// os.userInfo()
const userInfo = os.userInfo();

// We will store some other information about my WindowsOS in this object:
const otherInfo = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

// Let's Check The Results:
console.log(systemUptime);
console.log(userInfo);
console.log(otherInfo);