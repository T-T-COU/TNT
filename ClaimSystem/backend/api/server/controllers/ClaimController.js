import claimService from '../services/ClaimService';
import Util from '../utils/Utils';

const util = new Util();

class claimController {
  static async getAllClaims(req, res) {
    try {
      console.log("In controller")
      const allclaims = await claimService.getAllClaims();
      if (allclaims.length > 0) {
        util.setSuccess(200, 'claims retrieved', allclaims);
      } else {
        util.setSuccess(200, 'No claim found');
      }
      return util.send(res);
    } catch (error) {
      console.log(error)
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addClaim(req, res) {
    if (!req.body.title || !req.body.price || !req.body.description) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newclaim = req.body;
    try {
      const createdclaim = await claimService.addClaim(newclaim);
      util.setSuccess(201, 'claim Added!', createdclaim);
      return util.send(res);
    } catch (error) {
      console.log(error)
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updateClaim(req, res) {
    const alteredclaim = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updatedclaim = await claimService.updateClaim(id, alteredclaim);
      if (!updateclaim) {
        util.setError(404, `Cannot find claim with the id: ${id}`);
      } else {
        util.setSuccess(200, 'claim updated', updateclaim);
      }
      return util.send(res);
    } catch (error) {
      console.log(error)
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAClaim(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const claim = await claimService.getAClaim(id);

      if (!claim) {
        util.setError(404, `Cannot find claim with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found claim', claim);
      }
      return util.send(res);
    } catch (error) {
      console.log(error)
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteClaim(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const claimToDelete = await claimService.deleteClaim(id);

      if (claimToDelete) {
        util.setSuccess(200, 'claim deleted');
      } else {
        util.setError(404, `claim with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      console.log(error)
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default claimController;