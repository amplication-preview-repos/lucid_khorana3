import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CharacterSheetServiceBase } from "./base/characterSheet.service.base";

@Injectable()
export class CharacterSheetService extends CharacterSheetServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
