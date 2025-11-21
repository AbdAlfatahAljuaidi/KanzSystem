const Report = require('../controllers/reportControllers')
const express = require("express")
const router = express.Router()


router.post('/sendData',Report.addReport)
router.get('/getAllReports',Report.getAllReports)
router.delete('/deleteReport/:id',Report.deleteReport)
router.get('/getReport/:id' , Report.getReport)
router.put('/updateReport/:id',Report.updateReport)

module.exports = router