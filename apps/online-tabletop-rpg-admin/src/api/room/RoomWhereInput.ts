import { CombatGridListRelationFilter } from "../combatGrid/CombatGridListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type RoomWhereInput = {
  combatGrids?: CombatGridListRelationFilter;
  gm?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
