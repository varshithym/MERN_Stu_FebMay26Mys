const bookingServices = require("../services/booking.service");

//Create booking
exports.createBooking = async(req,res,next)=>{
    try{
       const booking = await bookingServices.createBooking(
        req.user._id,
        req.body
       );
       res.status(201).json({
        success:true,
        message:"Booking confirmed.",
        data:booking,
       });
    }
    catch(error){
        next(error);
    }
};

//get bookings
exports.getMyBooking = async(req,res,next)=>{
    try{
        const bookings = await bookingServices.getUserBookings(req.user._id);
        res.status(200).json({
        success:true,
        message:"Bookings fetched.",
        data:bookings,
       });
    }
    catch(error){
        next(error);
    }
};
//cancel bookings
exports.cancelBooking = async(req,res,next)=>{
    try{
        const bookings = await bookingServices.cancelBooking(req.params.id,req.user._id);

        res.status(200).json({
            success:true,
            message:"Bookings Cancelled.",
            data:bookings,
        });
    }
    catch(error){
        next(error);
    }
};
