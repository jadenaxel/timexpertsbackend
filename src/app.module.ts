import { Module } from "@nestjs/common";
import { LdapModule } from './ldap/ldap.module';

@Module({
	imports: [LdapModule],
	controllers: [],
	providers: []
})
export class AppModule {}
