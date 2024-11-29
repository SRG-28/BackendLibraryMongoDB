const cors = require('cors');

const corsOptions = {
  origin: '*',
  methods: 'GET, POST, PUT, DELETE, OPTIONS',
};

module.exports = cors(corsOptions);
