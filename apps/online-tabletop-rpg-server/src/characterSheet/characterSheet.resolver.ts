import * as graphql from "@nestjs/graphql";
import { CharacterSheetResolverBase } from "./base/characterSheet.resolver.base";
import { CharacterSheet } from "./base/CharacterSheet";
import { CharacterSheetService } from "./characterSheet.service";

@graphql.Resolver(() => CharacterSheet)
export class CharacterSheetResolver extends CharacterSheetResolverBase {
  constructor(protected readonly service: CharacterSheetService) {
    super(service);
  }
}
