import { CharacterSheet as TCharacterSheet } from "../api/characterSheet/CharacterSheet";

export const CHARACTERSHEET_TITLE_FIELD = "name";

export const CharacterSheetTitle = (record: TCharacterSheet): string => {
  return record.name?.toString() || String(record.id);
};
