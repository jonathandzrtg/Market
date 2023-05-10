const uploadImage = async (req, res) => {
    try {                

        const { image } = req.files;
        if (!image) return res.status(400).json({ message: "Archivo Requerido" })        

        await image.mv('./src/upload/' + image.name);

        res.status(200).json({ message: "Imagen Cargada Exitosamente", imageName: image.name })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error Interno del servidor", detail: error })
    }

}

export {uploadImage}