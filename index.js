// Asosiy packegelardan obj olamiz...
const express = require('express');
const path = require('path');
require('dotenv').config({ path: './environment/.env' });
const app = express();

require('./midllewares/startup')(app);

// portga ulanamiz va tekshirib ko'ramiz...
const port = process.env.PORT || 5000;
app.listen(port, () => {
 console.log(`${port} - portga uladik...`);
});