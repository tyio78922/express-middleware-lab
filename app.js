// app.js
const express = require('express');
const loggerMiddleware = require('./loggerMiddleware');

const app = express();
const PORT = 3000;

// Integrate the logger middleware
app.use(loggerMiddleware);

app.get('/', (req, res) => {
    res.send('Hello from Express server with Logger Middleware!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});