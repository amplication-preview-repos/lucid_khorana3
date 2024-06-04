import { CombatGrid as TCombatGrid } from "../api/combatGrid/CombatGrid";

export const COMBATGRID_TITLE_FIELD = "id";

export const CombatGridTitle = (record: TCombatGrid): string => {
  return record.id?.toString() || String(record.id);
};
