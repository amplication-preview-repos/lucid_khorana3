import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CombatGridService } from "./combatGrid.service";
import { CombatGridControllerBase } from "./base/combatGrid.controller.base";

@swagger.ApiTags("combatGrids")
@common.Controller("combatGrids")
export class CombatGridController extends CombatGridControllerBase {
  constructor(protected readonly service: CombatGridService) {
    super(service);
  }
}
