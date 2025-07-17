import express from "express";
const app = express();
import dotenv from "dotenv";
import restaurantRouter from "./routers/restaurant.router.js";
import cors from "cors"


dotenv.config();
const PORT = process.env.PORT || 3000;
app.use(
  cors({
    orign: ["http://localhost:5173/","127.0.0.1:5173"],
    methods:["GET","POST","PUT","DELETE"],
    allowedHeaders:["Content-Type","Authirization"]
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Restaurant Restful API");
});

//use router
app.use("/api/v1/restaurants", restaurantRouter);
app.listen(PORT, () => {
  console.log("Listening to http://localhost:" + PORT);
});
