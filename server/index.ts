import app from "./api/app";
import db from "./db/db";
import seedData from "./seed";

const port = process.env.PORT || 3000;

const init = async () => {
  await db.sync({ force: true });

  // seed data
  await seedData();
  app.listen(port, () => console.log(`listening on port ${port}`));
};
init();
