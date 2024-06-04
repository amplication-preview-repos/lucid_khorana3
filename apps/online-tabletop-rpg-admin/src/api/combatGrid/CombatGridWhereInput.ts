import { StringFilter } from "../../util/StringFilter";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type CombatGridWhereInput = {
  id?: StringFilter;
  room?: RoomWhereUniqueInput;
};
