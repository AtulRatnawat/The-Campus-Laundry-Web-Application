const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://AtulRatnawat:mongodb@cluster0.fhtvk2m.mongodb.net/BTP";

const connectToMongo = () => {
    mongoose.connect(mongoURI).then(
        console.log('Connected!')
    )

    console.log('Connected !....');
}

module.exports = connectToMongo;