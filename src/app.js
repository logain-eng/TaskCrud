const express = require("express");
const userRouter = require("./routers/userRouter");

const app = express();
app.use(express.json());

// Use Routers
app.use(userRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
