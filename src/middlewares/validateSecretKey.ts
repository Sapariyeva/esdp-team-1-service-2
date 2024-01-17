import { ErrorRequestHandler } from "express";
import bcrypt from 'bcrypt';
import { params } from '@/config/enviroment';

export const validateSecretKey = (): ErrorRequestHandler => (err, req, res, next) => {
    const receivedHash = req.headers['x-secret-key-hash'] as string;

    if (!receivedHash) {
        return res.status(401).json({ error: 'Access denied. Secret key hash is missing.' });
    }

    const secretKey = params.secret;

    bcrypt.compare(secretKey, receivedHash, (err, result) => {
        if (err || !result) {
            return res.status(401).json({ error: 'Access denied. Invalid secret key hash.' });
        }
        next();
    });
};