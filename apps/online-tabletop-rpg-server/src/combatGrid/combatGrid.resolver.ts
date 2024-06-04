import * as graphql from "@nestjs/graphql";
import { CombatGridResolverBase } from "./base/combatGrid.resolver.base";
import { CombatGrid } from "./base/CombatGrid";
import { CombatGridService } from "./combatGrid.service";

@graphql.Resolver(() => CombatGrid)
export class CombatGridResolver extends CombatGridResolverBase {
  constructor(protected readonly service: CombatGridService) {
    super(service);
  }
}
