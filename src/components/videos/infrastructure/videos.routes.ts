import { Router } from "express";
import {
  getVideos,
  getVideo,
  createVideo,
  updateVideo,
  deleteVideo,
} from "./videos.controller";

const router = Router();

const path = "/videos";

router.get(`${path}`, getVideos);
router.get(`${path}/:id`, getVideo);
router.post(`${path}`, createVideo);
router.put(`${path}/:id`, updateVideo);
router.delete(`${path}/:id`, deleteVideo);

export default router;
