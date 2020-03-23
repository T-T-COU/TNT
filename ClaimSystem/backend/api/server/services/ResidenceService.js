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

  static async updateResidence(id, updateResidence) {
    try {
      
      const residenceToUpdate = await database.residences.findOne({
        where: { residenceID: Number(id) }
      });

      if (residenceToUpdate) {
        await database.residences.update(updateResidence, { where: { residenceID: Number(id) } });

        return residenceToUpdate;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAResidence(id) {
    try {
      const residence = await database.residences.findOne({
        where: { residenceID: Number(id) }
      });

      return residence;
    } catch (error) {
      throw error;
    }
  }

  static async deleteResidence(id) {
    try {
      const residenceToDelete = await database.residences.findOne({ where: { residenceID: Number(id) } });

      if (residenceToDelete) {
        const deletedresidence = await database.residences.destroy({
          where: { residenceID: Number(id) }
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