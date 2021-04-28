import { Router } from "express";
import videoRoutes from "./videos/infrastructure/videos.routes";
const router = Router();

const path = "/api";

router.use(`${path}`, videoRoutes);

export default router;
