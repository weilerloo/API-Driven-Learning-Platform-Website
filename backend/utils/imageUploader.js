const cloudinary = require('cloudinary').v2;

exports.uploadImageToCloudinary = async (file, folder, height, quality) => {
  try {
    const options = { folder };
    if (height) options.height = height;
    if (quality) options.quality = quality;

    options.resource_type = "auto";

    return await cloudinary.uploader.upload(file.tempFilePath, options);
  } catch (error) {
    console.error("Cloudinary Upload Error:", error.message);
    throw error; // ✅ rethrow so caller knows it failed
  }
};




// Function to delete a resource by public ID
exports.deleteResourceFromCloudinary = async (url) => {
    if (!url) return;

    try {
        const result = await cloudinary.uploader.destroy(url);
        console.log(`Deleted resource with public ID: ${url}`);
        console.log('Delete Resourse result = ', result)
        return result;
    } catch (error) {
        console.error(`Error deleting resource with public ID ${url}:`, error);
        throw error;
    }
};