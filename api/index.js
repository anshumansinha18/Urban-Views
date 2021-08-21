const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv'); //used to import .env file
const authRoute = require("./routes/auth");

dotenv.config();

//We shouldn't give mongoDB uri here directly as it will be
//will be visible to all and anyone can access it.
//So create .env file to store it.
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(() => console.log("DB connection Successful!"))
    .catch((err) => console.log(err));


app.use(express.json());
app.use("/api/auth", authRoute);



app.listen(8800, () => {
    console.log("Server is up and running at port 8800");
})