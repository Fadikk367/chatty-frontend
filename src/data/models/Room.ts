import { User } from './User';
import { v4 as uuidv4 } from 'uuid';

export class Room {
  id = uuidv4();
  isProtected: boolean = false;
  password: string | undefined = undefined;
  slots: number | undefined = undefined;

  constructor(
    public name: string,
    public admin: User,
    public members: User[] = [],
    options?: {isProtected?: boolean, password?: string, slots?: number},
  ) {
    if (options?.isProtected)
      this.isProtected = true;

    if (this.isProtected && options?.password)
      this.password = options.password

    if (options?.slots)
      this.slots = options.slots;
  }
}