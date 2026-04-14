// pre save and post save hooks
const mongoose = require("mongoose");
const { log } = require("node:console");
async function runsaveHookDemo() {
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/hooks");

        const articelSchema = new mongoose.Schema({
            title:String,
            catagory:String,
            tag:String
        });
        articelSchema.pre("save",function(){
            this.title = this.title.trim().replace(/\s+/g,"");
            console.log("pre-save hook: title normalized before save");
        });
        articelSchema.post("save", function(doc){
            console.log("post-save hook: document save with title",doc.title);
            
        });
        const Article = mongoose.models.HookArticle || mongoose.model("HookArticle",articelSchema);

        const article = new Article({
            title: "        understanding     hook   in mongoose",
            catagory: "database",
            tag: "save-hook-demo"
        });
        await article.save();
        await mongoose.connection.close();
        console.log("connection closed");
        
    }
    catch(error){
        console.log("save hook demo error",error.message);
        
    }
}
runsaveHookDemo();