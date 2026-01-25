export const editMainPageDescription = (req, res, next)=>{
    req.status(200).json({
        message : 'successfully edited main page description.'
    })
    next();
}


export const editMainPageIntroduction = (req, res, next) => {
    req.status(200).json(
        {
            message : "Successfully edited main page introduction!",
        }
    )
    next();
}
export const editProfilePicture = (req, res, next) => {
    req.status(200).json(
        {
            message : "Successfully changed profile picture!",
        }
    )
}