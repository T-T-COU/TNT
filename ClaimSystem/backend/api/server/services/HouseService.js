import database from '../src/models';

class houseService {
  static async getAllHouses() {
    try {
      
      console.log(database.houses)
      
      console.log("get all houses called");
      return await database.houses.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addHouse(newhouse) {
    try {
      return await database.houses.create(newhouse);
    } catch (error) {
      throw error;
    }
  }

  static async updateHouse(id, updatehouse) {
    try {
      
      const houseToUpdate = await database.houses.findOne({
        where: { houseID: Number(id) }
      });

      if (houseToUpdate) {
        await database.houses.update(updatehouse, { where: { houseID: Number(id) } });

        return updatehouse;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAHouse(id) {
    try {
      const house = await database.houses.findOne({
        where: { houseID: Number(id) }
      });

      return house;
    } catch (error) {
      throw error;
    }
  }

  static async deleteHouse(id) {
    try {
      const houseToDelete = await database.houses.findOne({ where: { houseID: Number(id) } });

      if (houseToDelete) {
        const deletedhouse = await database.houses.destroy({
          where: { houseID: Number(id) }
        });
        return deletedhouse;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default houseService;