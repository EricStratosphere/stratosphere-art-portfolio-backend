export const editBriefIntroduction = (req, res, next) => {
    res.status(200).json({
        success : true,
        message : "Edited brief introduction!",
    })
}

export const editLongIntroduction = (req, res, next) => {
    res.status(200).json(
        {
            success : true,
            message : "Edited long introduction",
        }
    )
}