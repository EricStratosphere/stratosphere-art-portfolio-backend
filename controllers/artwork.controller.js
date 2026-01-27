export const getAllArtworks = async (req, res) => {
    return res.status(200).send(
        {
            success : true,
            message : 'All artworks fetched successfully',
            data : {
                artwork : 'artwork-name',
            }
        }
    )
}

export const getArtwork = async(req, res, next) => {
    try{
        res.send({
            success : true,
            message : "Your artwork's ID is " + req.params.id,
        });
    }
    catch(error){
        next(error);
    }
}

export const addNewArtwork = async(req, res, next) => {
    res.status(200).send({
        success : true,
    })
}

export const updateArtwork = async(req, res, next) => {
    res.status(200).send(
        {
            success:true,
        }
    )
}

export const deleteArtwork = async(req, res, next) => {
    res.status(200).send("Artwork deleted!");
}