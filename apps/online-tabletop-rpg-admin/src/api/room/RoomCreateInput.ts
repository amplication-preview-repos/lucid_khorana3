import { CombatGridCreateNestedManyWithoutRoomsInput } from "./CombatGridCreateNestedManyWithoutRoomsInput";

export type RoomCreateInput = {
  combatGrids?: CombatGridCreateNestedManyWithoutRoomsInput;
  gm?: string | null;
  name?: string | null;
};
