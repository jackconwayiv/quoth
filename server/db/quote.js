const { Sequelize } = require("sequelize");
const db = require("./db");

const Quote = db.define("quote", {
  quote: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Must provide quote text.",
      },
    },
  },
  quoter: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Must provide the user who is quoting.",
      },
    },
  },
});

module.exports = { Quote };
