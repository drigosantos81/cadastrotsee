const Front = require('../models/Front');

module.exports = {
  async index(req, res) {
    try {
      let results = await Front.allIndex();
      const repercussao = results.rows;
      console.log(repercussao);

      return res.render ('index', { repercussao });

    } catch (error) {
      console.log(error);
    }
  }
}