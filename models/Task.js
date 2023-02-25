const mongoose =require("mongoose");

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"何かを入力してください"],
        trim: true,
        maxlength:[20, "文字数は20文字以内"],
    },
    completed:{
        type:Boolean,
        default: false,
    },

    });

    module.exports=mongoose.model("Task",TaskSchema);
    
