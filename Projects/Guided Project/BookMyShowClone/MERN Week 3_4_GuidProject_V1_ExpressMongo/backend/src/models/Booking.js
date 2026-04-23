
const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        requried:true,
        index:true,
    },
    showId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Show",
        requried:true,
        index:true
    },
    seats:{
        type:[String],
        requried:true
    },totalSeats:{
        type:Number,
        requried:true
    },
    status:{
        type:String,
        enum:["booked","cancelled"],
        default:"booked",
        index:true,
    },
    bookingTime:{
        type:Date,
        default:Date.now(),

    },

},{
    timestamps:true,
});

//add validation
bookingSchema.pre("save",function(){
    if(this.seats.length === 0){
        throw new Error ("At least one seat must be selected");
    }
    if(this.totalSeats!=this.seats.length){
        return (new Error("Seat count mismatch"));
    }
    
});

//compoundIndex
bookingSchema.index({userId:1,showId:1});

module.exports = mongoose.model("Booking",bookingSchema);