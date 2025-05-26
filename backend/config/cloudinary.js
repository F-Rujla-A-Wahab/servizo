import { v2 as cloudinary } from 'cloudinary'

const connectCloudinary = async () => {

    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME = 'dznbyxbpo',
        api_key: process.env.CLOUDINARY_API_KEY = '142478199777561',
        api_secret: process.env.CLOUDINARY_SECRET_KEY = '7cawnYa2Xd2gH3W8-jvYD98WPdM'
    })


}
export default connectCloudinary