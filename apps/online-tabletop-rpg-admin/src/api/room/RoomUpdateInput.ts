import { CombatGridUpdateManyWithoutRoomsInput } from "./CombatGridUpdateManyWithoutRoomsInput";

export type RoomUpdateInput = {
  combatGrids?: CombatGridUpdateManyWithoutRoomsInput;
  gm?: string | null;
  name?: string | null;
};
