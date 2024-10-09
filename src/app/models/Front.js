const db = require('../../config/db');

module.exports = {
  // ============================== RECIPES ==============================
  allIndex() {
    return db.query(`
      SELECT referencia,cod_familiar_fam,"NB",cod_uc,especie,grupo,motivo_validacao,"CONTRATO","CONTA_CONTRATO",situacao,"ACAO"
      FROM public.repercussao
    `);
  },
}