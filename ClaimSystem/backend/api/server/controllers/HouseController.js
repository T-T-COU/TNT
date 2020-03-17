import houseService from '../services/HouseService';
import Util from '../utils/Utils';

const util = new Util();

class houseController {
  static async getAllhouses(req, res) {
    try {
      console.log("In controller")
      const allhouses = await houseService.getAllHouses();
      if (allhouses.length > 0) {
        util.setSuccess(200, 'houses retrieved', allhouses);
      } else {
        util.setSuccess(200, 'No house found');
      }
      return util.send(res);
    } catch (error) {
      console.log(error)
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addhouse(req, res) {
    if (!req.body.title || !req.body.price || !req.body.description) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newhouse = req.body;
    try {
      const createdhouse = await houseService.addHouse(newhouse);
      util.setSuccess(201, 'house Added!', createdhouse);
      return util.send(res);
    } catch (error) {
      console.log(error)
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatehouse(req, res) {
    const alteredhouse = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updatedhouse = await houseService.updateHouse(id, alteredhouse);
      if (!updatehouse) {
        util.setError(404, `Cannot find house with the id: ${id}`);
      } else {
        util.setSuccess(200, 'house updated', updatehouse);
      }
      return util.send(res);
    } catch (error) {
      console.log(error)
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAhouse(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const house = await houseService.getAHouse(id);

      if (!house) {
        util.setError(404, `Cannot find house with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found house', house);
      }
      return util.send(res);
    } catch (error) {
      console.log(error)
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deletehouse(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const houseToDelete = await houseService.deleteHouse(id);

      if (houseToDelete) {
        util.setSuccess(200, 'house deleted');
      } else {
        util.setError(404, `house with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      console.log(error)
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default houseController;