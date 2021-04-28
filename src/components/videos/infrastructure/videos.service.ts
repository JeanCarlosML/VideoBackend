import Video from "./videos.entity";
import { VideoRepository } from "../domain/videos.repository";

export class VideoService implements VideoRepository {
  public async findVideos() {
    return await Video.find();
  }
  public async findVideo(id: string) {
    return await Video.findById(id);
  }
  public async findVideoWith(condition: {}) {
    return await Video.findOne(condition);
  }
  public async createVideo(body: {}) {
    const video = new Video(body);
    return await video.save();
  }
  public async updateVideo(id: string, body: {}) {
    return await Video.findByIdAndUpdate(id, body, { new: true });
  }
  public async deleteVideo(id: string) {
    return await Video.findByIdAndDelete(id);
  }
}
