const express = require('express'); 
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();


// connect to db
mongoose.connect(
    console.log("hello"),
   "mongodb+srv://demo1:demo1@cluster0.ekqweqa.mongodb.net/?retryWrites=true&w=majority",
//    {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
//   },
    () => console.log("connected to db")
);

// import routes 
const empdetailsRoutes = require("./routes/empdetails"); 

//Middlewares
app.use(express.json());
app.use(cors());

// route Middlewares
app.use("/api/empdetails", empdetailsRoutes); 
 

app.listen(3000, () =>console.log("server up and runing on port 3000!"));