export interface VideoRepository {
  findVideos: () => Promise<any>;
  findVideo: (id: string) => Promise<any>;
  findVideoWith: (condition: {}) => Promise<any>;
  createVideo: (body: {}) => Promise<any>;
  updateVideo: (id: string, body: {}) => Promise<any>;
  deleteVideo: (id: string) => Promise<any>;
}
