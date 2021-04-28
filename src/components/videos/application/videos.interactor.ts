import { VideoRepository } from '../domain/videos.repository';

// Logica de negocio

class VideoExistError extends Error {
  constructor(message: string) {
    super(message);
  }
}
class VideoIsNull extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class VideoInteractor {
  constructor(private videoService: VideoRepository) {}

  public validateNotNull(data: any) {
    if (data !== null) {
      return data;
    }
    throw new VideoIsNull("No hay información disponible");
  }

  // Listar todos los videos
  public async getVideos() {
    return await this.videoService.findVideos();
  }

  // listar un video especifico
  public async getVideo(id: string) {
    const video = await this.videoService.findVideo(id);
    return this.validateNotNull(video);
  }

  // Crear un video
  public async createVideo(body: {}, url: string) {
    const videoFound = await this.videoService.findVideoWith({
      url,
    });
    if (videoFound) {
      throw new VideoExistError("The URL already");
    }
    return await this.videoService.createVideo(body);
  }

  // Actualizar un video
  public async updateVideo(id: string, body: {}) {
    const video = await this.videoService.updateVideo(id, body);
    return this.validateNotNull(video);
  }

  // Eliminar video
  public async deleteVideo(id: string) {
    const video = await this.videoService.deleteVideo(id);
    return this.validateNotNull(video);
  }
}
