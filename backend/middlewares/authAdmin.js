import jwt from 'jsonwebtoken';

// Admin authentication middleware
const authAdmin = async (req, res, next) => {
    try {
        const { atoken } = req.headers;
        if (!atoken) {
            return res.status(401).json({ success: false, message: "Not Authorized. Please log in again." });
        }

        const token_decode = jwt.verify(atoken, process.env.JWT_SECRET);

        // Assuming token_decode contains an 'email' field
        if (token_decode !== process.env.ADMIN_EMAIL +process.env.ADMIN_PASSWORD) {
            return res.status(403).json({ success: false, message: "Access denied." });
        }

        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ success: false, message: "Invalid token." });
    }
};

export default authAdmin;



