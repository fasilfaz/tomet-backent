import { cloudinaryInstance } from "../config/cloudinary.config.js";


const uploadCloudinary = async (localFilePath, publicId) => {
    try {
        if(!localFilePath) {
            throw new Error('Cannot get the local file path');
        }
        const response = await cloudinaryInstance.uploader.upload(localFilePath, {resource_type: 'image', public_id: publicId} );
        return response
    } catch (error) {
       throw new Error(error.message)
    }
}

export default uploadCloudinary