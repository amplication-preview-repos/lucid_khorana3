import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CharacterSheetWhereInput = {
  assignedUser?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
