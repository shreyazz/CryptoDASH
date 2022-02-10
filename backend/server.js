const express = require("express");
const app = express();
const PORT = 5000;
const connectToDB = require("./db/connection");

// setting up the connection with the database
connectToDB();

// middleware
app.use(express.json());

// using routes
app.use("/register", require("./routes/register"));
app.use("/login", require("./routes/login"));
app.use("/getFavCryptos", require("./routes/favCryptos"));

// server listening on PORT
app.listen(PORT, () => {
  console.log(`Server is up and running on http://localhost:${PORT} 🟢`);
});
