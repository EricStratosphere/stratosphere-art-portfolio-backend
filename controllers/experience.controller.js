export const addExperience = (req, res, next)=>{
    res.status(200).send(
        {
            message : "Experience added!",
        }
    )
}

export const editExperience = (req, res, next)=>{
    res.status(200).send(
        {
            message : "Experience edited!",
        }
    )
}

export const getAllExperiences = (req, res, next)=>{
    res.status(200).send(
        {
            message : "All experiences fetched!",
        }
    )
}

export const deleteExperience = (req, res, next)=>{
    res.status(200).send(
        {
            message : "Experience deleted!",
        }
    )
}