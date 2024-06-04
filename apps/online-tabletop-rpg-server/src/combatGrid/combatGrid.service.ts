import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CombatGridServiceBase } from "./base/combatGrid.service.base";

@Injectable()
export class CombatGridService extends CombatGridServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
