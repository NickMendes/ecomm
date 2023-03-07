import JWTHelp from '../helpers/token.js';

const tokenValidation = (req, res, next) => {
  const { authorization } = req.headers;
  
  try {
    if (!authorization) return res.status(401).json({ message: 'Token not found' });
    
    JWTHelp.verify(authorization);
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

export default tokenValidation; 
