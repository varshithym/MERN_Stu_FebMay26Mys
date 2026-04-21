const mongoose = require("mongoose");
const seatSchema = new mongoose.Schema({
    seatNumber:{
        type:String,
        required:true,
    },
    isBooked:{
        type:Boolean,
        default:false
    },
},{_id:false});

const showSchema = new mongoose.Schema({
    movieId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Movie",
        requried:true,
        index:true,
    },
    date:{
        type:Date,
        requried:true,
        index:true,
    },
    time:{
        type:String,
        requried:true,
    },
    totalSeats:{
        type:Number,
        requried:true,
    },
    availableSeats:{
        type:Number,
        requried:true,
    },
    seats:{
        type:[seatSchema],
        requried:true,
    },
    isActive:{
        type:Boolean,
        default:true,
    },
},
{
    timestamps:true,
});

//Compound index:
showSchema.index({movieId:1,date:1});

//Add validation
showSchema.pre("save",function(next){
    if(this.availableSeats>this.totalSeats){
        return next(new Error("Available seats cannot exceed total seats"));
    }
    next();
});
module.exports = mongoose.model("Show",showSchema)