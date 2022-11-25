//external imports
const mongoose = require("mongoose");
require('dotenv').config();

//create and export a function to house the connection

async function dbConnect() {

//use mongoose to connet this app to our databse on mongoDB
//using the DB_URL (connection string)

mongoose
.connect(
    process.env.DB_URL,
    {
        //these are options to ensure that the connection is done properly
        useNewUrlParser: true,
        useUnifiedTopology: true,
        //useCreateIndex: true,
    }
)

//show if the connection was successful or not
.then(() => {
    console.log("Successfully connected to MongoDB Atlas!");
})
.catch((error) => {
    console.log("Unable to connect to MongoDB Atlas!");
    console.error(error);
});

}

module.exports = dbConnect;