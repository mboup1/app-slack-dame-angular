import { User } from "./user"; 
import { Channel } from "./channel"; 

export interface Post {
  id: number;
  message: string;
  datePost: Date;
  idUser: number;
  idChannel: number;
  user?: User;
  channel?: Channel;
}