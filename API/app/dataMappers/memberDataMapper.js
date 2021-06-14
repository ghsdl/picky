const pool = require("../../database");

module.exports = {

  async getMember(id) {
    //Affiche la page d'un User
    const member = await pool.query(`SELECT * FROM member WHERE id=$1`, [id]);

    return member.rows[0];

  },

  async updateMember(id, pseudo, email, password, profile_picture ) {
    //modifie les informations d'un la page d'un User+
    
    const member = await pool.query(`UPDATE "member" SET pseudo = $1, email=$2, password = $3, profile_picture = $4 WHERE id = $5`, [id, pseudo, email, password, profile_picture ]);
    console.log('Log de member ',member)
    return member.rows[0];

  },

  async deleteMember( id) {
    // Supprime un user de la table "member"
    const member = await pool.query(`DELETE FROM "member" WHERE id=$1`,[id])

    return member.rows[0];

  }

};

