const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const contactRoute = require("./routes/contact");
const authRoute = require("./routes/auth");
const careerRoute = require("./routes/career");
const meetingRoute = require("./routes/meeting");
const foodRoute = require("./routes/food");
const foodFeaturesRoute = require("./routes/foodFeatures");
const minibarRoute = require("./routes/minibar");
const minibarFeaturesRoute = require("./routes/minibarFeatures");
const cors = require("cors");

app.use(cors({ origin: "localhost:3000" }));
dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("MongoDB Ayağa Kalktı."))
  .catch((e) => console.log(e));

app.use("/api/contact", contactRoute);
app.use("/api/meeting", meetingRoute);
app.use("/api/career", careerRoute);
app.use("/api/auth", authRoute);
app.use("/api/food", foodRoute);
app.use("/api/foodFeatures", foodFeaturesRoute);
app.use("/api/minibar", minibarRoute);
app.use("/api/minibarFeatures", minibarFeaturesRoute);

app.listen("3080", () => console.log("> Server is up and running on port : "));
