import userService from '../services/UserService';
import Util from '../utils/Utils';

const util = new Util();

class UserController {

  

  static async getAllUsers(req, res) {
    try {
      
      const allusers = await userService.getAllUsers();
      if (allusers.length > 0) {
        util.setSuccess(200, 'users retrieved', allusers);
      } else {
        util.setSuccess(200, 'No user found');
      }
      return util.send(res);
    } catch (error) {
      console.log(error)
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addUser(req, res) {
    console.log("Add user called")
    console.log(req.body)
    // console.log(req)
    if (!req.body.name || !req.body.type || !req.body.user_level) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newUser = req.body;



    try {
      const createdUser = await userService.addUser(newUser);
      util.setSuccess(201, 'User Added!', createdUser);
      return util.send(res);
    } catch (error) {
      console.log(error)
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updateUser(req, res) {
    const alteredUser = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updatedUser = await userService.updateUser(id, alteredUser);
      if (!updatedUser) {
        util.setError(404, `Cannot find user with the id: ${id}`);
      } else {
        util.setSuccess(200, 'user updated', updatedUser);
      }
      return util.send(res);
    } catch (error) {
      console.log(error)
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAUser(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const user = await userService.getAUser(id);

      if (!user) {
        util.setError(404, `Cannot find user with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found user', user);
      }
      return util.send(res);
    } catch (error) {
      console.log(error)
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteUser(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const userToDelete = await userService.deleteUser(id);

      if (userToDelete) {
        util.setSuccess(200, 'user deleted');
      } else {
        util.setError(404, `user with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      console.log(error)
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async director(req, res){
    try{

      switch (req.body.dir){
        case "update":
        return UserController.updateUser(req,res)
          break
        case "del":
          return UserController.deleteUser(req,res)
          break
        default:
        return util.setError(400,"Unknown function")
          break

      }


    } catch (error) {
      console.log(error)
      util.setError(400,error)
      return util.send(res)
    }
  }

}

export default UserController;