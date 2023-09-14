// NOTE: step by step for nodejs express

// npm init

// 0. install express
// npm install express --save

// gitignore node_modules

// 1. import express
const express = require('express');

// 2. create an express app
const app = express();

// 3. create a route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// 4. listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000');
});

// 5. run the app
// node app.js

// 6. open browser and go to http://localhost:3000

// 7. install nodemon
// npm install -g nodemon

// 8. write a script in package.json
// "scripts": {
//     "start": "nodemon app.js"
// },

// 9. run the app
// npm start

// 10. open browser and go to http://localhost:3000
