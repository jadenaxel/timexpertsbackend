import { Module } from "@nestjs/common";
import { LdapController } from "./ldap.controller";

@Module({
	controllers: [LdapController],
	providers: []
})
export class LdapModule {}
