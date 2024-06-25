const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/api/endpoint1', (req, res) => {
  res.json({ message: 'Endpoint 1' });
});

app.get('/api/endpoint2', (req, res) => {
  res.json({ message: 'Endpoint 2' });
});

app.get('/api/endpoint3', (req, res) => {
  res.json({ message: 'Endpoint 3' });
});

app.get('/api/endpoint4', (req, res) => {
  res.json({ message: 'Endpoint 4' });
});

app.get('/api/endpoint5', (req, res) => {
  res.json({ message: 'Endpoint 5' });
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
