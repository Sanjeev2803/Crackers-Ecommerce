const cloudinary=require('cloudinary').v2
require('dotenv').config();
const multer=require('multer')
require('dotenv').config()
const fs=require('fs')

if(!fs.existsSync('./uploads')){
    fs.mkdirSync('./uploads')
}
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET 
})
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads')
    },
    filename:function(req,file,cb){
        const uniqueIdentifier = Date.now() + '_' + file.originalname;
        cb(null, uniqueIdentifier);
    }
})
const upload=multer({storage:storage})

module.exports={upload,cloudinary}