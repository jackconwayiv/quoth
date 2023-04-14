import { DataTypes } from "sequelize";
import db from "./db";

const Quote = db.define("quote", {
  quote: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Must provide quote text.",
      },
    },
  },
  quoter: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Must provide the user who is quoting.",
      },
    },
  },
});

export default Quote;
