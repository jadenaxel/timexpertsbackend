import { Module } from "@nestjs/common";
import { LdapService } from "./ldap.service";

@Module({
	controllers: [],
	providers: [LdapService]
})
export class LdapModule {}
