// require express
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// initiate express app
const app = express();

const PORT = process.env.PORT || 3001;

// middleware for css and js static files
app.use(express.static('Develop/public'))
app.use('assets/css', express.static(__dirname + 'public/assets/css'))
app.use('assets/js', express.static(__dirname + 'public/assets/js'))
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// server listener
app.listen(PORT, () => {
    console.log(`PROJECT NOW ON PORT ${PORT}`);
});