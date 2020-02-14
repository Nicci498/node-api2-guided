const express = require('express');
const hubsRouter = require('./hubs/hubs-router.js');
const server = express();

server.use(express.json());

server.use('/api/hubs', hubsRouter);

server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});







const port = process.env.PORT || 4000
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
