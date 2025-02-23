const express = require('express');
const app = express();
app.use(express.json());
app.get('/tasks', (req, res) => res.json([{ id: 1, task: 'Demo task' }]));
app.listen(3000, () => console.log('Backend running on 3000'));