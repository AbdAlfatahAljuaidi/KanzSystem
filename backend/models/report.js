const mongoose = require('mongoose')

const ReportSchema = new mongoose.Schema({
  
    companyName: {
        type: String
    },
    address: {
        type: String
    },
    date: {
        type: String
    },
    administrator: {
        type: String
    },
    administratorNumber: {
        type: String
    },
    care: {
        type: String
    },
    comment: {
        type: String
    }
})

const Report = mongoose.model("Report", ReportSchema)

module.exports = Report
