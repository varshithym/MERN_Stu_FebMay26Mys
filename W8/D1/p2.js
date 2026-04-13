//CURD operation in MongoDB using Mongoose
const mongoose = require("mongoose");
async function runCrudDemo() {
    try {
        await mongoose.connect("mongodb://localhost:27017/abcmern");//to connect with db
        console.log("MongoDB connected successfully");

        const studentSchema = new mongoose.Schema({
            name: String,
            age: Number,
            role: String
        });
        const Student = mongoose.models.Student || mongoose.model("Student", studentSchema);
        //Clearing the previous demo data
        await Student.deleteMany({ role: "demo-student" });

        //Create using save()
        const firstStudent = new Student({
            name: "varshith",
            age: 23,
            role: "student"
        });
        await firstStudent.save();
        // console.log("Created new student with save()", firstStudent);
        //Create using create()
        const secondStudent = await Student.create({
            name: "varshi",
            age: 23,
            role: "student"
        });
        // console.log("Created new student with create()", secondStudent);

        // read using find()
        const allDemoStudents = await Student.find({role:"student"});
        console.log("read with find():",allDemoStudents);
        // read using find one
        const singleDemo = await Student.findOne({name:"varshi"});
        // console.log("with single",singleDemo);
        // update usinfg findByIdAndUpdate
        const update = await Student.findByIdAndUpdate(
            secondStudent._id,
            {age:86},
            {new:true}
        );
        // console.log("updated with findByIdAndUpdate():",update);
        // Delete using findByIdandDelete()
        const deleteStudent = await Student.findByIdAndDelete(
            secondStudent._id
        );
        console.log("deleted with find by id",deleteStudent);
        
        
        
        
        await mongoose.connection.close();
        console.log("connection closed");

    }
    catch(error){
         console.log("Crud demo error :",error.message);
    }
}
runCrudDemo();