import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.json({
    application: "Be the Hero",
    event: "RocketSeat - Semana Omnistack 11",
    message: "Hello World"
  });
});

app.listen(3333);
