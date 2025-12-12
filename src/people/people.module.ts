import { Module } from "@nestjs/common";

import { PeopleService } from "./people.service";
import { PeopleController } from "./people.controller";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AccessLevel } from "../ldap/entity/level.access.entity";

@Module({
	imports: [JwtModule, TypeOrmModule.forFeature([AccessLevel], "WF")],
	controllers: [PeopleController],
	providers: [PeopleService]
})
export class PeopleModule {}
