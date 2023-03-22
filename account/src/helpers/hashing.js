import bcrypt from 'bcryptjs';

class Hash{
    static hashing = (password) => {
        const saltRounds = bcrypt.genSaltSync(12);
        return bcrypt.hashSync(password, saltRounds);
    };
    
    static dehashing = (password, hash) => {
        return bcrypt.compareSync(password, hash);
    };
}

export default Hash;
