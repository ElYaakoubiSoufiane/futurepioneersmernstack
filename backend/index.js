require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

const mongoose=require("mongoose")


const mongoose = require("mongoose");

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
try {
  mongoose.connect(process.env.MongoDbUrl, {}).then(() => {
    app.listen(
      process.env.PORT || 5000,
      console.log(`Listening on port ${process.env.PORT}...`)
    );
  });

  app.get("/",(req,res)=>{
    res.json("hzllo");})
  console.log("Connected to database successfully");
} catch (error) {
  console.log(error);
  console.log("Could not connect database!");
}
// middlewares
app.use(express.json());
app.use(cors({ origin: "*" }));



app.use(cors());
// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);



app.use(
  cors({
    origin: [process.env.frontUrl],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

