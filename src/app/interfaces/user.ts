import { Channel } from "./channel"; 
import { Post } from "./post";

export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    avatar: string;
    idChannel: number;
    posts?: Post[];
    channels?: Channel[];
}
