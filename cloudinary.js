// // backend/config/cloudinary.js

// // import { v2 as cloudinary } from 'cloudinary';
// import uploadOnCloudinary from "../config/cloudinary.js"; // ✅ Required in ESM

// import dotenv from 'dotenv';
// import fs from 'fs';

// dotenv.config();

// // Configure Cloudinary once (outside the function)
// cloudinary.config({ 
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
//   api_key: process.env.CLOUDINARY_API_KEY, 
//   api_secret: process.env.CLOUDINARY_SECRET 
// });

// const uploadOnCloudinary = async (filepath) => {
//   try {
//     if (!filepath) return null;

//     const uploadResult = await cloudinary.uploader.upload(filepath);
    
//     // Delete the file after upload
//     fs.unlinkSync(filepath);

//     return uploadResult.secure_url;
//   } catch (error) {
//     if (fs.existsSync(filepath)) fs.unlinkSync(filepath);
//     console.error("Cloudinary Upload Error:", error);
//     return null;
//   }
// };

// export default uploadOnCloudinary;



// import uploadOnCloudinary from "../config/cloudinary.js";
// //import { v2 as cloudinary } from '../config/cloudinary.js';
// import fs from "fs"

// const uploadOnCloudinary = async (filepath) => {
//     cloudinary.config({ 
//         cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
//         api_key: process.env.CLOUDINARY_API_KEY, 
//         api_secret: process.env.CLOUDINARY_SECRET // Click 'View API Keys' above to copy your API secret
//     });
//     try{
//         if(!filepath){
//             return null

//         }
//         const uploadResult = await cloudinary.uploader.upload(filepath)
//         fs.unlinkSync(filepath)
//         return uploadResult.secure_url

//     }catch(error){
//         fs.unlinkSync(filepath)
//         console.log(error)
//     }
// }

// export default uploadOnCloudinary




// backend/config/cloudinary.js

import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

// ✅ Cloudinary config - only run once
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_SECRET
});

// ✅ Define the function ONCE
const uploadOnCloudinary = async (filepath) => {
  try {
    if (!filepath) return null;

    const uploadResult = await cloudinary.uploader.upload(filepath);
    fs.unlinkSync(filepath); // remove file after upload

    return uploadResult.secure_url;
  } catch (error) {
    if (fs.existsSync(filepath)) fs.unlinkSync(filepath); // clean up if error
    console.error("Cloudinary Upload Error:", error);
    return null;
  }
};

export default uploadOnCloudinary;
