import blacklist from './blacklist';
import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import { createHash } from 'crypto';

const existsAsync = promisify(blacklist.exists).bind(blacklist);
const setAsync = promisify(blacklist.set).bind(blacklist);


const geraTokenHash = (token) => {
  return createHash('sha256')
    .update(token)
    .digest('hex');
}


const addToBlacklist = async (token) => {
    const dataExpiracao = jwt.decode(token).exp;
    const tokenHash = geraTokenHash(token);
    await setAsync(tokenHash, '');
    blacklist.expireat(tokenHash, dataExpiracao);
};

const checkBlacklist = async token => {
    const tokenHash = geraTokenHash(token);
    const resultado = await existsAsync(tokenHash);
    return resultado === 1;
};

module.exports = { addToBlacklist, checkBlacklist };
