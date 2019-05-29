
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/testdb', { useNewUrlParser: true });
mongoose.connection.once('open', function(){
    console.log("Connection was made to MongoDB");
}).on('error', (error) => {
    console.log("Error connecting to MongoDB", error);
});
