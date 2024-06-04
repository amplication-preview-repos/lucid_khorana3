import { SortOrder } from "../../util/SortOrder";

export type CharacterSheetOrderByInput = {
  assignedUser?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
