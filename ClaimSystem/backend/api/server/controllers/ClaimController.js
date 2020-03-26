import claimService from '../services/ClaimService';
import userService from '../services/UserService';
import houseService from '../services/HouseService';

import Util from '../utils/Utils';

const util = new Util();

class ClaimController {
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
    console.log(req.file)
    console.log(req.image)
    if (!req.body.product_name || !req.body.amount || !req.body.houseID || !req.body.userID) {
      util.setError(400, 'Please provide complete details: product_name, amount, houseID, userID');
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
    console.log(req.body)

    const alteredclaim = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updatedclaim = await claimService.updateClaim(id, alteredclaim);
      if (!updatedclaim) {
        util.setError(404, `Cannot find claim with the id: ${id}`);
      } else {
        util.setSuccess(200, 'claim updated', updatedclaim);
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
      var claim = await claimService.getAClaim(id);

      if (!claim) {
        util.setError(404, `Cannot find claim with the id ${id}`);
      } else {

        //Get users here
        const userObj = await userService.getAUser(claim.userID);

        const approver_userObj = await userService.getAUser(claim.approver_userID);

        const house = await houseService.getAHouse(claim.houseID);

        util.setSuccess(200, 'Found claim, claimant, approver', {'claim': claim, 'claimant': userObj, 'approver': approver_userObj, 'house': house});
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

  static async director(req, res){
    try{

      switch (req.body.dir){
        case "update":
        return ClaimController.updateClaim(req,res)
          break
        case "del":
          return ClaimController.deleteClaim(req,res)
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

export default ClaimController;