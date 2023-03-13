import bcrypt from 'bcrypt';

class Hash{
    static hashing = async (senha) => {
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        return bcrypt.hash(senha, salt);
    };
    
    static dehashing = (senha, hash) => {
        const result = bcrypt.compareSync(senha, hash);
        return result;
    };
}

export default Hash;
