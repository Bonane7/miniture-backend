import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
export const accessToken = (payload) => {

    payload = {
        id: payload._id,
        email: payload.email,
        userRole: payload.userRole,
        FirstName: payload.FirstName,
        LastName: payload.LastName,
    };  

    const secretKey = process.env.JWT_SECRET;
    return jwt.sign(payload, secretKey, { expiresIn: '1d' });
}
