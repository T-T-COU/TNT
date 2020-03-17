import ResidenceService from '../services/ResidenceService';
import Util from '../utils/Utils';

const util = new Util();

class ResidenceController {
  static async getAllResidences(req, res) {
    try {
      console.log("In controller")
      const allResidences = await ResidenceService.getAllResidences();
      if (allResidences.length > 0) {
        util.setSuccess(200, 'Residences retrieved', allResidences);
      } else {
        util.setSuccess(200, 'No Residence found');
      }
      return util.send(res);
    } catch (error) {
      console.log(error)
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addResidence(req, res) {
    if (!req.body.title || !req.body.price || !req.body.description) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newResidence = req.body;
    try {
      const createdResidence = await ResidenceService.addResidence(newResidence);
      util.setSuccess(201, 'Residence Added!', createdResidence);
      return util.send(res);
    } catch (error) {
      console.log(error)
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updateResidence(req, res) {
    const alteredResidence = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updatedResidence = await ResidenceService.updateResidence(id, alteredResidence);
      if (!updateResidence) {
        util.setError(404, `Cannot find Residence with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Residence updated', updateResidence);
      }
      return util.send(res);
    } catch (error) {
      console.log(error)
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAResidence(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const Residence = await ResidenceService.getAResidence(id);

      if (!Residence) {
        util.setError(404, `Cannot find Residence with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found Residence', Residence);
      }
      return util.send(res);
    } catch (error) {
      console.log(error)
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteResidence(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const ResidenceToDelete = await ResidenceService.deleteResidence(id);

      if (ResidenceToDelete) {
        util.setSuccess(200, 'Residence deleted');
      } else {
        util.setError(404, `Residence with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      console.log(error)
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default ResidenceController;