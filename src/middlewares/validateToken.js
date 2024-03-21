import jwt from 'jsonwebtoken';
//token authentication
export const authRequired = (req, res, next) => {
    const { token } = req.cookies;

    if (!token)
        return res.status(401).json({ message: 'you are not logged in' });

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) res.status(403).json({ message: 'invalid token' });
        
        req.user = decoded;

        next()
    });
}