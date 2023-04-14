const express = require("express");
const router = express.Router();
const { Quote } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const allQuotes = await Quote.findAll();
    res.send(allQuotes);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const createdQuote = await Quote.create(req.body);
    res.status(201).send(createdQuote);
  } catch (error) {
    next(error);
  }
});

// router.get("/:campusId", async (req, res, next) => {
//   try {
//     const id = parseInt(req.params.campusId);
//     const fetchedCampus = await Campus.findByPk(id, { include: Student });
//     res.send(fetchedCampus);
//   } catch (error) {
//     next(error);
//   }
// });


// router.delete("/:campusId", async (req, res, next) => {
//   try {
//     const id = parseInt(req.params.campusId);
//     const deletedCampus = await Campus.findByPk(id);
//     await deletedCampus.destroy();
//     res.send(deletedCampus);
//   } catch (error) {
//     next(error);
//   }
// });

// router.put("/:campusId", async (req, res, next) => {
//   try {
//     const id = parseInt(req.params.campusId);
//     const editedCampus = await Campus.findByPk(id);
//     await editedCampus.update(req.body);
//     res.send(editedCampus);
//   } catch (error) {
//     next(error);
//   }
// });

// router.put("/:campusId/unenroll/:studentId", async (req, res, next) => {
//   try {
//     const editedCampus = await Campus.findByPk(parseInt(req.params.campusId));
//     const unenrolledStudent = await Student.findByPk(
//       parseInt(req.params.studentId),
//     );
//     await editedCampus.removeStudent(unenrolledStudent);
//     res.send(editedCampus);
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
