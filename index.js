const express = require('express'); 
const app = express();              // Initialize express app
const PORT = process.env.PORT || 3000;  

// Create a route to respond with 'Hello, World!'
app.get('/', (req, res) => {
  res.send('Hello World! How are you? What is your name?');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
