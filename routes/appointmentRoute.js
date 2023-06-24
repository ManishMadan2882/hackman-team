const express = require('express');

const router = express.Router();

const {createApt,requestApt,getAllRequests,getAcceptedRequests,getPendingRequests,changeRequestStatus} = require("../controllers/appointmentController")

router.route("/appointment/requests/create").post(createApt,requestApt);

router.route('/appointment/requests/all').get(getAllRequests)

router.route('/appointment/requests/pending').get(getPendingRequests)

router.route('/appointment/requests/accepted').get(getAcceptedRequests)

router.route('/appointment/requests/action').patch(changeRequestStatus)
//pass body key as status:accepted/cancelled to make update in user appointment


module.exports = router;