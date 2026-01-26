export const addNewSocial = (req, res, next) => {
    return res.status(200).json(
        {
            message : "new social added"
        }
    )
    next();
}

export const getAllSocials = (req, res, next) => {
    return res.status(200).json(
        {
            message : "all socials fetched!"
        }
    )
    next();
}

export const editSocial = (req, res, next) => {
    return res.status(200).json(
        {
            message : "social edited!" + req.params.socialsName,
        }
    )
    next();
}

export const deleteSocials = (req, res, next) =>{
    return res.status(200).json(
        {
            message : "Socials deleted!"
        }
    )
    next();
}