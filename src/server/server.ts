import express, { Application } from "express";
import cors from "cors";
import { config } from "../config/config";
import routes from "../components/routes";
import { getConnection } from "../database/mongodb/connection";
import morgan from "morgan";
/*  import { Server, createServer } from "https"; 
    import { Server as ServerIO } from "socket.io";
    import { SocketIoServer } from "../socketio/socket.io"; */

export class NodeServer {
  private app: Application;
  // private http: Server;
  // private io: SocketIoServer;
  constructor() {
    this.app = express();
    // this.http = createServer(this.app);
    // Instanciando clase de Socket
    // this.io = new SocketIoServer(this.http);
    this.getMiddlewares();
    this.getRoutes();
    this.connectDB();
    this.listen();
  }

  private async connectDB() {
    await getConnection();
  }

  private getMiddlewares() {
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  private getRoutes() {
    this.app.use(routes);
  }

  private listen() {
    this.app.listen(config.API.PORT, () => {
      console.log(
        "Servidor iniciado con éxito en el puerto " + config.API.PORT
      );
    });
  }
}
