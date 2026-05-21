import express, {Request, NextFunction ,Response} from "express";
import { authRouter } from "./modules";
import { BadRequestException } from "./common";

export function bootstrap() {
  const app = express();
  const port = 3000;
     app.use(express.json());
  // Import and use the auth router
  
  app.use('/auth', authRouter);

  // global error handler
   app.use((error: Error, req: Request, res: Response,next:NextFunction) => {

    return res.status((error.cause as number) || 500).json({

      message: error.message,
      success: false,
      stack: error.stack,
      details:error instanceof BadRequestException ? error.details : undefined
    });
    
  });
  
  app.listen(port, () => console.log(`app listening on port ${port}!`));
}
