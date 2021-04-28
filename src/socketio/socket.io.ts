import { Server as ServerIO, Socket } from "socket.io";
import { Server } from "https";
export class SocketIoServer {
  private io: ServerIO;
  constructor(http: Server) {
    this.io = new ServerIO(http);
    this.onConnection();
  }

  private onConnection() {
    this.io.on("connection", (socket) => {
      this.onJoin(socket);
      this.onDisconnect(socket);
    });
  }

  private onJoin(socket: Socket) {
    socket.on("join", ({ name, room }: IJoin, callback) => {
      const error = true;
      if (error) {
        callback({ error: "error" });
      }
    });
  }

  private onDisconnect(socket: Socket) {
    socket.on("disconnect", () => {
      console.log("User had left !!!");
    });
  }
}

interface IJoin {
  name: string;
  room: string;
}
