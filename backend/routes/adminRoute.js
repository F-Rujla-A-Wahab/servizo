import express from 'express'
import upload from '../middlewares/multer.js'
import { addWorker, getWorkers ,loginAdmin} from "../controllers/adminController.js";
import authAdmin from '../middlewares/authAdmin.js';


const adminRouter = express.Router()

adminRouter.post('/add-worker',authAdmin,upload.single('image'),addWorker)
adminRouter.get('/add-worker',getWorkers)
adminRouter.post('/login',loginAdmin)


export default adminRouter;
