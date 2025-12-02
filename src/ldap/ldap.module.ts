import { Module } from "@nestjs/common";
import { LdapService } from "./ldap.service";
import { LdapController } from "./ldap.controller";
import { AccessLevel } from "./entity/level.access.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
	imports: [TypeOrmModule.forFeature([AccessLevel])],
	controllers: [LdapController],
	providers: [LdapService],
	exports: [LdapService]
})
export class LdapModule {}
