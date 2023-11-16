const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  return res.status(200).json({
    title: "Express Testing",
    message: "The app is working properly!",
  });
});

router.get("/", async (req, res, next) => {
  const headers = req.headers;
  return res.status(200).json(headers);
});

module.exports = router;
