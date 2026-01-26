export const getAllServices = (req, res, next) => {
    res.status(200).send(
        {
            message : "Successfully fetched services!",
        }
    )
}

export const addNewService = (req, res, next) => {
    res.status(200).send(
        {
            message : "Successfully added service.",
        }
    )
}

export const updateService = (req, res, next) => {
    res.status(200).send(
        {
            message : ("Successfully edited service." + req.params.id),
        }
    )
}

export const deleteService = (req, res, next) => {
    res.status(200).send(
        {
            message : "Successfully deleted service.",
        }
    )
}