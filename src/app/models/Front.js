const db = require('../../config/db');

module.exports = {
  // ============================== RECIPES ==============================
  allIndex() {
    return db.query(`
      SELECT * FROM repercussao
      LIMIT 30
    `);
  },
}