import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CharacterSheetService } from "./characterSheet.service";
import { CharacterSheetControllerBase } from "./base/characterSheet.controller.base";

@swagger.ApiTags("characterSheets")
@common.Controller("characterSheets")
export class CharacterSheetController extends CharacterSheetControllerBase {
  constructor(protected readonly service: CharacterSheetService) {
    super(service);
  }
}
