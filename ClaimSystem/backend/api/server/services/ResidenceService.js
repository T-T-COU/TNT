import database from '../src/models';

class residenceService {
  static async getAllResidences() {
    try {
      
      console.log(database.residences)
      
      console.log("get all residences called");
      return await database.residences.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addResidence(newresidence) {
    try {
      return await database.residences.create(newresidence);
    } catch (error) {
      throw error;
    }
  }

  static async updateResidence(id, updateresidence) {
    try {
      
      const residenceToUpdate = await database.residences.findOne({
        where: { id: Number(id) }
      });

      if (residenceToUpdate) {
        await database.residences.update(updateResidence, { where: { id: Number(id) } });

        return residenceToUpdate;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAresidence(id) {
    try {
      const residence = await database.residences.findOne({
        where: { id: Number(id) }
      });

      return residence;
    } catch (error) {
      throw error;
    }
  }

  static async deleteresidence(id) {
    try {
      const residenceToDelete = await database.residences.findOne({ where: { id: Number(id) } });

      if (residenceToDelete) {
        const deletedresidence = await database.residences.destroy({
          where: { id: Number(id) }
        });
        return deletedresidence;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default residenceService;