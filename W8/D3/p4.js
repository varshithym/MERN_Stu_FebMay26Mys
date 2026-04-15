// Basics of embedding and referencing
const mongoose = require("mongoose");

async function main() {
    try { await mongoose.connect("mongodb://127.0.0.1:27017/embrel");
       
        console.log("connected to mongodb");
        const orderSchema = new mongoose.Schema({
            product: String,
            price: Number
        });
        const userSchema = new mongoose.Schema({
            name: String,
            orders: [orderSchema] // Embedded document
        });
        const user = mongoose.model("user", userSchema);
        const embeddedUser = await user.create({
            name: "varshith",
            orders: [
                { product: "laptop", price: 50000 },
                { product: "printer", price: 25000 },
                { product: "phone", price: 60000 },


            ]

        });
        // console.log("the ordered items are",embeddedUser);
        const users = await user.find().lean();
        console.log(JSON.stringify(users,null,2));

        // referencing
        const userRefSchema = new mongoose.Schema({
            name: String,

        })
        const orderRefSchema = new mongoose.Schema({
            product: String,
            price: Number,
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'userRef'
            }
        });
        const userRef = mongoose.model('userRef', userRefSchema);
        const orderRef = mongoose.model('orderRef', orderRefSchema);
        const refUser = userRef.create({ name: "varshith" });
        await orderRef.create([
            { product: "laptop", price: 65000, user: refUser._id },
            { product: "watch", price: 5000, user: refUser._id },
            { product: "earbuds", price: 5000, user: refUser._id }

        ]);
        console.log("referenced order");
        console.log(await orderRef.find().populate('user'));



    } catch (error) {
        console.log("error", error.message);

    }
    finally {
        await mongoose.disconnect();
        console.log("disconected");

    }
}
main();