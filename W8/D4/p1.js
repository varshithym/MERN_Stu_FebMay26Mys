// Date fundamentals
const mongoose = require("mongoose");
const { type } = require("node:os");
async function main() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/dateDB");
        console.log("connected sucessfully");
        const schema = new mongoose.Schema({
            name: String,
            created_at: {
                type: Date,
                default: Date.now
            }
        });
        const Model = mongoose.model("DateFund", schema);
        const doc = await Model.create({
            name: "test",
        });
        console.log(doc);


    } catch (error) {
        console.log("error", error.message);


    }
    finally {
        await mongoose.disconnect();
        console.log("disconected");

    }

}
main();