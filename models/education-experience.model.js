import mongoose from "mongoose";

const experienceSchema = mongoose.Schema(
    {
        institution : {
            type : String,
            required : true,
            minLength : 2,
            maxLength : 40,            
        },
        program : {
            type : String,
            required : true,
            minLength : 2,
            maxLength : 60,
        },
        entryType : {
            type : String,
            enum : ['Experience', 'Education'],
            required : true,
            trim : true,
            default : 'Experience',
        },
        startYear : {
            type : Number,
            required : true,
            validate : {
                validator : function(value) {
                    return value >= 2018
                },
                message : 'Start year must not be before 2018!',
            }
        },
        endYear : {
            type : mongoose.Schema.Types.Mixed,
            required : true,
            validate : {
                validator : function(value){
                    if(typeof value === 'number')
                        return value > this.startYear;
                },
                message : 'End Year must either be \'Present\' or not before the Start Year!'
            }
        }
    }
)

const Experience = mongoose.model('Experience', experienceSchema);
export default Experience;