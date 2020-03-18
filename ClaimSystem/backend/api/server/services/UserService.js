import database from '../src/models';

class UserService {
  static async getAllUsers() {
    try {
      
      console.log(database.Users)
      
      console.log("get all users called");
      return await database.Users.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addUser(newUser) {
    try {
      return await database.Users.create(newUser);
    } catch (error) {
      throw error;
    }
  }

  static async updateUser(id, updateUser) {
    try {
      
      const userToUpdate = await database.Users.findOne({
        where: { userID: Number(id) }
      });

      if (userToUpdate) {
        await database.Users.update(updateUser, { where: { userID: Number(id) } });

        return updateUser;
      }
      return null;
    } catch (error) {
      console.log(error)
      throw error;
    }
  }

  static async getAUser(id) {
    try {
      const user = await database.Users.findOne({
        where: { id: Number(id) }
      });

      return user;
    } catch (error) {
      throw error;
    }
  }

  static async deleteUser(id) {
    try {
      console.log("Delete user called")
      const userToDelete = await database.Users.findOne({ where: { userID: Number(id) } });

      if (userToDelete) {
        const deletedUser = await database.Users.destroy({
          where: { userID: Number(id) }
        });
        return deletedUser;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;