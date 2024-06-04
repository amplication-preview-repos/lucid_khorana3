import { CharacterSheetWhereInput } from "./CharacterSheetWhereInput";
import { CharacterSheetOrderByInput } from "./CharacterSheetOrderByInput";

export type CharacterSheetFindManyArgs = {
  where?: CharacterSheetWhereInput;
  orderBy?: Array<CharacterSheetOrderByInput>;
  skip?: number;
  take?: number;
};
