import users from '../models/UserModel.js';

class UserController {
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

  static postUser = (req, res) => {
    let user = new users(req.body);

    user.save((err) => {
      if(err) {
        res.status(500).send({ message: err.message });
      } else {
        res.status(201).send(user.toJSON());
      }
    });
  };

  static putUser = (req, res) => {
    const id = req.params.id;

    users.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if(!err) {
        res.status(200).send({ message: 'User updated success' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deleteUser = (req, res) => {
    const id = req.params.id;

    users.findByIdAndDelete(id, (err) => {
      if(!err) {
        res.status(200).send({ message: 'User deleted success' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}

export default UserController
