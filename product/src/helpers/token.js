import jwt from 'jsonwebtoken';

class JWTHelp {
    static create = (payload) => {
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });
        return token;
    };
    
    static verify = (token) => {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        return payload;
    };
}


export default JWTHelp; 
