const router = require("express").Router();
const questionsController = require("../../controllers/questionsController");

router.route("/")
    .get(questionsController.findAll)
    .post(questionsController.create);

// Matches with "/api/groups/:id"
router
    .route("/:id")
    .get(questionsController.findById)
    .put(questionsController.update)
    .delete(questionsController.remove);

module.exports = router;