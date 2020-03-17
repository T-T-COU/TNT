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
      return await database.users.create(newUser);
    } catch (error) {
      throw error;
    }
  }

  static async updateUser(id, updateUser) {
    try {
      
      const userToUpdate = await database.users.findOne({
        where: { id: Number(id) }
      });

      if (userToUpdate) {
        await database.users.update(updateUser, { where: { id: Number(id) } });

        return updateUser;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAUser(id) {
    try {
      const user = await database.users.findOne({
        where: { id: Number(id) }
      });

      return user;
    } catch (error) {
      throw error;
    }
  }

  static async deleteUser(id) {
    try {
      const userToDelete = await database.users.findOne({ where: { id: Number(id) } });

      if (userToDelete) {
        const deletedUser = await database.users.destroy({
          where: { id: Number(id) }
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