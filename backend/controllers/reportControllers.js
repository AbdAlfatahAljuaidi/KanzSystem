const Report = require('../models/report')

exports.addReport = async (req,res) => {
    try{
const {companyName,address,date,administrator,administratorNumber,care,comment}=req.body
if(!companyName || !address || !date || !administrator || !administratorNumber || !care || !comment){
   return res.status(400).json({error:true, message:"All fields are require"})
}

const report = await Report.create(
    req.body
)

return res.status(200).json({error:false, message:"Report has been created successfully"})


    }catch(error){
        console.log(error);
        return  res.status(500).json({error:true, message:"Internal server error"})
        
    }

}


exports.getAllReports = async (req,res) => {
try{
const reports = await Report.find()
console.log("reports",reports);

return res.status(200).json({error:false,message:"get all reports successfully",reports})

}catch(err){
    console.log(err);
    return   res.status(500).json({error:false,message:"Internal server error"})
}
}


exports.deleteReport = async (req,res) => {
    try{
        const {id} = req.params
const deleted=  await Report.deleteOne({_id:id})
if(deleted.deletedCount===0){
   return res.status(404).json({error:true,message:"report not found"})
}

return res.status(200).json({error:false,message:" report has been deleted successfully"})

    }
    catch(error){
        console.log(error);
        
        return res.status(500).json({error:false,message:"Internal server error"})
        
    }
}





exports.getReport = async (req,res) => {
    try{
        const {id} = req.params
        const checkReport = Report.findById(id)
        if(!checkReport){
            return res.status(404).json({error:true,message :"report not found"})
        }
        const report = await Report.findById(id)
        console.log("report",report);
        
        return res.status(200).json({error:false,message:"data report",report})
    }catch(error){
        console.log(error);
        return res.status(500).json({error:true,message:"Internal server error"})
        
    }
}


exports.updateReport = async (req,res) => {
    try{
        const {id} = req.params
        const checkReport = await Report.findById(id)
        if(!checkReport){
            return res.status(404).json({error:true,message :"report not found"})
        }

        const updateReport = await Report.findByIdAndUpdate(id,
            {$set: req.body},
            {new: true ,runValidators:true}
        ) 

        return res.status(200).json({error:false,message:"update has been successfully"})


    }catch(error){
        console.log(error);
        return res.status(500).json({error:true,message:"Internal server error"})
        
    }

}