import validator from "validator"
import bcrypt from 'bcrypt'
import { v2 as cloudinary } from "cloudinary"
import workerModel from "../models/workerModel.js"
import jwt from 'jsonwebtoken'


//API for adding worker
// adminController.js
const addWorker = async (req, res) => {
    try {

        const { name, email, password, services, experience, fees, address } = req.body;
        const imageFile = req.file;

        //checking for all data to add worker
        if (!name || !email || !password || !services || !experience || !fees || !address) {
            return res.json({ success: false, message: "Missing Details" })
        }

        //validating email format
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" })
        }
        //validating strong password
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" })
        }

        //hashing worker password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        //upload image to cloundinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" })
        const imageUrl = imageUpload.secure_url
        const workerData = {
            name,
            email,
            image: imageUrl,
            password: hashedPassword,
            services,
            experience,
            fees,
            address: JSON.parse(address),
            date: Date.now(),
            available: true,
        }
        const newWorker = new workerModel(workerData)
        await newWorker.save()

        res.status(200).json({ newWorker, success: true, message: "Worker Added" })
        console.log(newWorker)


    } catch (error) {

        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

const getWorkers = async (req, res) => {
    try {
        const tasks = await workerModel.find();
        res.status(200).json(tasks)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
//API for the admin login
const loginAdmin = async (req, res) => {
    try {

        const { email, password } = req.body

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
           const token = jwt.sign(email + password, process.env.JWT_SECRET)
            res.json({ success: true, token })
        } else {
            res.json({ success: false, message: "Invalid credentials" })
        }

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })

    }
}


export { getWorkers }

export { addWorker, loginAdmin }

