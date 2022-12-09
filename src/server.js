import "dotenv/config";
import app from "./app";
import { startDatabase } from "./database";

const PORT = process.env.SERVER_PORT;

export default app.listen(PORT, async () => {
  await startDatabase();
  console.log(`Server running at http://localhost:${PORT}`);
});
