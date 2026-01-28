import mongoose from "mongoose";

const serviceArtworkSchema = mongoose.Schema(
    {
        artwork_id : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Artwork',
            required : true,
            index : true,
        },
        service_id : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Service',
            required : true,
            index : true,
        },
    }
)

const ServiceArtwork = mongoose.model('ServiceArtwork', serviceArtworkSchema);

export default ServiceArtwork;