import { CombatGridWhereInput } from "./CombatGridWhereInput";
import { CombatGridOrderByInput } from "./CombatGridOrderByInput";

export type CombatGridFindManyArgs = {
  where?: CombatGridWhereInput;
  orderBy?: Array<CombatGridOrderByInput>;
  skip?: number;
  take?: number;
};
