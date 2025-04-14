const mongoose=require("mongoose")
const Collection = require("../Config/collection")

const blogSchema=new mongoose.Schema({
    blogTitle:{
        type:String
    },
    blogDescription:{
        type:String
    },
    blogImage:{
        type:String
    }
},{
    timestamps:true
})

const blogModel=mongoose.model(Collection.blog,blogSchema)

module.exports=blogModel