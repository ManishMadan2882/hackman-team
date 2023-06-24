const Appointments = require("../database/models/appointmentModel");
//raise a request
exports.createApt = async  (req,res,next) =>{
const{lawyer} = req.body
    const appointment = await  Appointments.findOne({lawyer})
    if(appointment == null)
    {
       await Appointments.create({lawyer})
    }
    next()
}
exports.requestApt = async (req,res,next)=>{
    const {user,desc,lawyer} = req.body;
    
     await Appointments.updateOne({
        lawyer
    },{
        $push:{
            requests:{
                user,desc
            }
        }
    })
    
    res.status(200).json({
        success:true,
        message:"Request added to queue"
    })
};
//get all user requests
exports.getAllRequests = async(req,res,nex)=>{
    const {lawyer} = req.body;
    const allApts =await  Appointments.findOne({
        lawyer
    }).populate('requests.user','name email')
    res.status(200).json({
        success:true,
        requests:allApts?allApts.requests:null
    })
 }
 //get all user pending requests
 exports.getPendingRequests = async(req,res,nex)=>{
    const {lawyer} = req.body;
    const pendingApts = await Appointments.findOne({
        lawyer
    }).populate('requests.user','name email')
    const result = pendingApts.requests.filter(elem => elem.status === 'pending')
    res.status(200).json({
        success:true,
        requests:result
    })
 }

//get all user accepted requests
 exports.getAcceptedRequests = async(req,res,nex)=>{
    const {lawyer} = req.body;
    const acceptedApts = await Appointments.findOne({
        lawyer,
        "requests.status":"accepted"
    }).populate('requests.user','name email')
    res.status(200).json({
        success:true,
        requests:acceptedApts?acceptedApts.request:null
    })
 }

 exports.changeRequestStatus = async(req,res,nex)=>{
    //set status as accpeted/cancelled
    const {lawyer,request,status} = req.body;
    let appointment = await Appointments.findOne({lawyer:lawyer});
    
        appointment.requests.forEach((reqs)=>{
            console.log(reqs.desc);
            if(request == reqs._id){
                  console.log(reqs.desc);
                  reqs.status = status
            }
        })
        await appointment.save()
    
    res.status(200).json({
        success:true,
        message: status=='accepted'?"request accepted":"request cancelled"
    })
 }
exports.bookAppointment = async (req,res,nex)=>{
    const {request,time,email} = req.body
}