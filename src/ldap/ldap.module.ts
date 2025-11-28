import { Module } from "@nestjs/common";
import { LdapService } from "./ldap.service";
import { LdapController } from "./ldap.controller";

@Module({
	controllers: [LdapController],
	providers: [LdapService]
})
export class LdapModule {}
