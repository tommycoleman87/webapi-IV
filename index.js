const server = require('./api/server.js');
require('dotenv').config();
const port = 4000;
console.log('environment', process.env.NODE_ENV)
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
