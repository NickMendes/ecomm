import users from '../models/UserModel.js';
import JWTHelp from '../helpers/token.js';
import Hash from '../helpers/hashing.js';

class UserController {
  static login = async (req, res) => {
    const { email, password } = req.body;

    const checkUser = await users.findOne({ email });

    const checkPassword = Hash.dehashing(password, checkUser.password);
    
    if (!checkUser || !checkPassword) {
      return res.status(400).json({ message: 'Email or Password invalid' });
    }
    
    const token = JWTHelp.create({ id: checkUser.id });

    res.set('Authorization', token);
    res.status(204).send();
  };

  static getAllUsers = (_req, res) => {
    users.find((err, user) => {
      if(err) {
        res.status(400).send({ message: err.message });
      } else {
        res.status(200).json(user);
      }
    });
  };

  static getUserById = (req, res) => {
    const id = req.params.id;

    users.findById(id, (err, user) => {
      if(err) {
        res.status(400).send({ message: err.message });
      } else {
        res.status(200).send(user);
      }
    });
  };

  static createUser = async (req, res) => {
    const hash = await Hash.hashing(req.body.password);

    let user = new users({ ...req.body, password: hash });

    user.save((err) => {
      if(err) {
        res.status(500).send({ message: err.message });
      } else {
        res.status(201).send(user.toJSON());
      }
    });
  };

  static updateUser = (req, res) => {
    const id = req.params.id;

    users.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if(!err) {
        res.status(202).send({ message: 'User updated success' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deleteUser = (req, res) => {
    const id = req.params.id;

    users.findByIdAndDelete(id, (err) => {
      if(!err) {
        res.status(202).send({ message: 'User deleted success' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}

export default UserController;
