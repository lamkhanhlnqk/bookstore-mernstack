const mongoose = require('mongoose');



const connectDB = async() => {
    try {
        await mongoose.connect('mongodb+srv://bookstore-user:testing123@bookstore-mernstack.atxeu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            useNewurLParser: true,
            useUnifiedTopology: true
        });
        console.log('Database connection success');
    } catch (err) {
        console.log(err);
    }
};

module.exports = connectDB;