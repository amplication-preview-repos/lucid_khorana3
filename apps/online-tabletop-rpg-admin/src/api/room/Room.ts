import { CombatGrid } from "../combatGrid/CombatGrid";

export type Room = {
  combatGrids?: Array<CombatGrid>;
  createdAt: Date;
  gm: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
