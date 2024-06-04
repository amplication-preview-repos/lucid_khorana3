import { Module } from "@nestjs/common";
import { CharacterSheetModuleBase } from "./base/characterSheet.module.base";
import { CharacterSheetService } from "./characterSheet.service";
import { CharacterSheetController } from "./characterSheet.controller";
import { CharacterSheetResolver } from "./characterSheet.resolver";

@Module({
  imports: [CharacterSheetModuleBase],
  controllers: [CharacterSheetController],
  providers: [CharacterSheetService, CharacterSheetResolver],
  exports: [CharacterSheetService],
})
export class CharacterSheetModule {}
