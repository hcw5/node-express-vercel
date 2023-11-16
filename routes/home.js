const express = require("express");
const router = express.Router();

router.get("/home", async (req, res, next) => {
  // First handler for "/"
  return res.status(200).json({
    title: "Express Testing",
    message: "The app is working properly!",
  });
});

router.get("/head", async (req, res, next) => {
  // Second handler for "/head"
  const headers = req.headers;
  return res.status(200).json(headers["x-real-ip"]);
});


module.exports = router;
