import Service from "../models/service.model.js";

export const getAllServices = async (req, res, next) => {
    try{
        const services = await Service.find();
        if(!services){
            const error = new Error('This database has no entries!');
        }
        res.status(200).json({
            success : true,
            data : services,
        });
    }
    catch(error){
        next(error);
    }
}

export const getService = async(req, res, next) => {
    try{
        const service = await Service.findById(req.params.id);
        if(!service){
            const error = new Error('Service not found!');
            error.statusCode = 404;
            throw error;
        }
        res.status(200).json(
            {
                success : true,
                data : service,
            }
        )
    }
    catch(error){
        next(error);
    }
}

export const addNewService = async(req, res, next) => {
    try{
        const service = await Service.create(
            {...req.body}
        );
        if(!service){
            const error = new Error('Failed to create service!');
        }
        res.status(200).send(
            {
                success : true,
                data : service,
            }
        )
    }
    catch(error){
        next(error);
    }
}

export const updateService = async (req, res, next) => {
    try{
        const service = await Service.findById(req.params.id);
        if(!service){
            const error = new Error('Service does not exist!');
            error.statusCode = 404;
            throw error;
        }
        if(req.body.service_name){
            service.service_name = req.body.service_name;
        }
        if(req.body.service_img_link){
            service.service_img_link = req.body.service_img_link;
        }
        if(req.body.service_description){
            service.service_description = req.body.service_description;
        }
        if(req.body.subservices){
            service.subservices = req.body.subservices;
        }
        await service.save();
        res.status(200).json(
            {
                success : true,
                updated_data : service,
            }
        )
    }
    catch(error){
        next(error);
    }
}

export const deleteService = async (req, res, next) => {
    try{
        const deletedService = await Service.findByIdAndDelete(req.params.id);
        res.status(200).json(
            {
                success : true,
                deleted_data : deletedService,
            }
        )
    }
    catch(error){
        next(error);
    }
}