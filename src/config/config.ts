import dotenv from "dotenv";
// Cargando el archivo de variables de entorno
dotenv.config();
export const config = {
  MONGO: {
    URI: process.env.MONGO_URI || "mongodb://localhost:27017/cafe",
  },
  API: {
    PORT: process.env.PORT || 3000,
  },
  AUTH: {
    JWT: {
      SECRET: process.env.JWT_SECRET || "SEED-SECRET",
      EXPIRED: process.env.JWT_EXPIRED || 50000,
    },
    GOOGLE: {
      id: process.env.GOOGLE_ID || "GOOGLE_ID",
      secret: process.env.GOOGLE_SECRET || "GOOGLE_SECRET",
    },
  },
  cloudinary: {
    domain: process.env.CLOUD_NAME || "YOU-CLOUD-NAME",
    key: process.env.CLOUD_KEY || "YOU-API-KEY",
    keySecret: process.env.CLOUD_KEY_SECRET || "YOU-API-SECRET-KEY",
  },
};
