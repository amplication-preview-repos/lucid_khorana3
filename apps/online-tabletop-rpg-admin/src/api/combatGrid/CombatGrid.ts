import { Room } from "../room/Room";

export type CombatGrid = {
  createdAt: Date;
  id: string;
  room?: Room | null;
  updatedAt: Date;
};
