import express from "express";
import { authRouter } from "./modules";

export function bootstrap() {
  const app = express();
  const port = 3000;
     app.use(express.json());
  // Import and use the auth router
  
  app.use('/auth', authRouter);
  // app.get('/', (req, res) => res.send('Hello World!'))
  app.listen(port, () => console.log(`app listening on port ${port}!`));
}
