import { Module } from "@nestjs/common";
import { CombatGridModuleBase } from "./base/combatGrid.module.base";
import { CombatGridService } from "./combatGrid.service";
import { CombatGridController } from "./combatGrid.controller";
import { CombatGridResolver } from "./combatGrid.resolver";

@Module({
  imports: [CombatGridModuleBase],
  controllers: [CombatGridController],
  providers: [CombatGridService, CombatGridResolver],
  exports: [CombatGridService],
})
export class CombatGridModule {}
