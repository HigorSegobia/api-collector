var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.status(200).json({});
});

router.post("/login", (req, res, next) => {
  const body = req.body;

  if (!body.user || !body.pass) {
    return res
      .status(403)
      .json({ message: "Invalid request body", code: "invalid_request_body" });
  }

  if (body.user === "admin" && body.pass === "admin") {
    return res.status(200).json({ user: body.user, accessToken: "fake_token" });
  }

  res
    .status(401)
    .json({ message: "Unauthorized access", code: "unauthorized_access" });
});

router.get("/orders", (req, res, next) => {
  res.status(200).json({
    page: 1,
    pageSize: 20,
    items: [
      {
        id: 0,
        title: "Custom title",
        description: "lorem ipsum",
      },
      {
        id: 1,
        title: "Custom title",
        description: "lorem ipsum",
      },
      {
        id: 2,
        title: "Custom title",
        description: "lorem ipsum",
      },
    ],
  });
});

module.exports = router;
