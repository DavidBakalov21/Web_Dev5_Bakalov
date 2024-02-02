const mongoose = require('mongoose');
const mongoConnection='mongodb+srv://davidbakalov33:david1178@cluster0.g73wh8t.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(mongoConnection);
const dbConnection = mongoose.connection;

dbConnection.on('error', () => console.error('MongoDB connection error:'));

dbConnection.once('open', () => console.log('Connected to MongoDB'));

module.exports = mongoose;