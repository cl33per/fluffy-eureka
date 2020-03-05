const router = require("express").Router();
const questionsRouter = require("./questions");

router.use("/questions",questionsRouter);

module.exports = router