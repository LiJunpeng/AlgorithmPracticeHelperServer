var express = require("express");
var router = express.Router();

router.post("/urls", function (req, res) {
  var shortUrl = getShortUrl();
  res.json(shortUrl);
});

module.exports = router;

