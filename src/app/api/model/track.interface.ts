export interface ITrack {
  id: number;
  name: string;
  link?: string;
  duration: number;
  preview: string;
  position?: number;
  artist: string;
  img?: string;
  type: string;
}
