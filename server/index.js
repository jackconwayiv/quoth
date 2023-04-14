const port = process.env.PORT || 3000;
const app = require("./api/app.js");
const { db } = require("./db/index.js");
const { seedData } = require("./seed.js");

const init = async () => {
  await db.sync({ force: true });

  // seed data
  await seedData();
  app.listen(port, () => console.log(`listening on port ${port}`));
};
init();