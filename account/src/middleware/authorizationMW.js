import JWTHelp from '../helpers/token.js';
import { checkBlacklist } from '../../redis/useBlacklist.js';

const tokenValidation = async (req, res, next) => {
  const { authorization } = req.headers;
  
  try {
    const check = await checkBlacklist(authorization);

    if (check) return res.status(401).json({ message: 'User Token Logout' });
    
    if (!authorization) return res.status(401).json({ message: 'Token not found' });
    
    JWTHelp.verify(authorization);
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

export default tokenValidation; 
