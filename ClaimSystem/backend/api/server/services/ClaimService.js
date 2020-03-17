import database from '../src/models';

class claimService {
  static async getAllClaims() {
    try {
      
      console.log(database.claims)
      
      console.log("get all claims called");
      return await database.claims.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addClaim(newclaim) {
    try {
      return await database.claims.create(newclaim);
    } catch (error) {
      throw error;
    }
  }

  static async updateClaim(id, updateclaim) {
    try {
      
      const claimToUpdate = await database.claims.findOne({
        where: { id: Number(id) }
      });

      if (claimToUpdate) {
        await database.claims.update(updateclaim, { where: { id: Number(id) } });

        return claimToUpdate;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAClaim(id) {
    try {
      const claim = await database.claims.findOne({
        where: { id: Number(id) }
      });

      return claim;
    } catch (error) {
      throw error;
    }
  }

  static async deleteClaim(id) {
    try {
      const claimToDelete = await database.claims.findOne({ where: { id: Number(id) } });

      if (claimToDelete) {
        const deletedclaim = await database.claims.destroy({
          where: { id: Number(id) }
        });
        return deletedclaim;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default claimService;