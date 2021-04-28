import { Request, RequestHandler, Response } from "express";
import { VideoInteractor } from "../application/videos.interactor";
import { VideoService } from "./videos.service";
import { success, error } from "../../../config/response";

const videoService = new VideoService();
const videoInteractor = new VideoInteractor(videoService);

export const createVideo: RequestHandler = (req: Request, res: Response) => {
  const { body } = req;
  videoInteractor
    .createVideo(body, body.url)
    .then((result) => {
      success(res, "Video creado con exito", 200, result, true);
    })
    .catch((e: Error) => {
      error(res, "Error al crear video", 400, e.message, false);
    });
};
export const getVideos: RequestHandler = (req: Request, res: Response) => {
  videoInteractor
    .getVideos()
    .then((result) => {
      success(res, "Lista de videos disponibles", 200, result, true);
    })
    .catch((e: Error) => {
      error(res, "Error al listar videos", 400, e.message, false);
    });
};
export const getVideo: RequestHandler = (req: Request, res: Response) => {
  videoInteractor
    .getVideo(req.params.id)
    .then((result) => {
      success(res, "Video encontrado", 200, result, true);
    })
    .catch((e: Error) => {
      error(res, "Error al buscar Video", 400, e.message, false);
    });
};
export const updateVideo: RequestHandler = (req: Request, res: Response) => {
  videoInteractor
    .updateVideo(req.params.id, req.body)
    .then((result) => {
      success(res, "Video actualizado", 200, result, true);
    })
    .catch((e: Error) => {
      error(res, "Error al actualizar video", 400, e.message, false);
    });
};

export const deleteVideo: RequestHandler = (req: Request, res: Response) => {
  videoInteractor
    .deleteVideo(req.params.id)
    .then((result) => {
      success(res, "Video eliminado", 200, result, true);
    })
    .catch((e: Error) => {
      error(res, "Error al eliminar Video", 400, e.message, false);
    });
};
