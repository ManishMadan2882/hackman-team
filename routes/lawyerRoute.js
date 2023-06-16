const express = require('express');
const router = express.Router();
const {registerLawyer, getAllLawyers, getLawyerDetails} = require("../controllers/lawyerController")

router.route("/lawyer/register").post(registerLawyer);

router.route("/lawyers").get(getAllLawyers);

router.route("/lawyer/:id").get(getLawyerDetails);

module.exports = router;