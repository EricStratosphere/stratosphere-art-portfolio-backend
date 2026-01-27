import mongoose from "mongoose";

const socialsSchema = mongoose.Schema(
    {
        icon_url : {
            type : String,
            required : [true, 'Must contain Image url!']
        },
        social_name :{
            type : String,
            required : [true, 'Must contain name!'],
            minLength : 2,
            maxLength : 25,
        },
        social_link : {
            type : String,
            required : [true, 'Must contain link to the social itself!']
        }
    }
)