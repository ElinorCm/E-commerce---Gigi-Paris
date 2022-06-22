/* eslint-disable quotes */
/* eslint-disable no-undef */
const client = require("../database");

const datamapper = {

  getAllJewels: async () => {
    const result = await client.query(`SELECT * FROM "jewel";`);
    return result.rows;
  },

  getOneJewel: async (image) => {
    const result = await client.query(`SELECT * FROM "jewel" WHERE "image"='${image}';`);
    return result.rows[0];
  },

  getReviews: async (id) => {
    const result = await client.query(`SELECT * FROM "review" WHERE "jewel_id"='${id}';`);
    return result.rows;
  },

};

module.exports = datamapper;