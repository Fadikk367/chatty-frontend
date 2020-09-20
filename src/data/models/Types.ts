import { Room } from "./Room";
import { User } from "./User";

export enum ChatUserType {
  GUEST = 'GUEST',
  REGISTERED = 'REGISTERED',
}

export interface ChatState {
  connectedUsers: User[];
  availableRooms: Room[];
  id: string;
}