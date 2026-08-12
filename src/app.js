const express = require("express");
const userRouter = require("./routers/userRouter");

const app = express();
app.use(express.json());

// Use Routers
app.use(userRouter);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server running...");
});

