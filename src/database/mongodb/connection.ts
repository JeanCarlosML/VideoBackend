import mongoose, { ConnectOptions } from "mongoose";
import { config } from "../../config/config";

export async function getConnection() {
  const configuration: ConnectOptions = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  };
  try {
    const connection = await mongoose.connect(config.MONGO.URI, configuration);
    console.log("Base de datos conectada con exito");
    return connection;
  } catch (error) {
    console.log("Error al conectarse a base de datos");
  }
}
