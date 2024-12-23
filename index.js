import express from "express";
import userRoutes from "./routes/user.routes.js";
import { configDotenv } from "dotenv";
import connectToDB  from "./config/db.js";



const app = express();
configDotenv()
connectToDB()



// Middwares
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Routes
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.render("index");
});




// Live Server
app.listen(3000, () => {
  console.log("app is running on localhost:3000");
});
