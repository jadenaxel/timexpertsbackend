import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

import { LdapModule } from "./ldap/ldap.module";
import { AuthModule } from "./auth/auth.module";
import { SupervisorsModule } from './supervisors/supervisors.module';
import { PeopleModule } from './people/people.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: ".env"
		}),
		TypeOrmModule.forRoot({
			type: "postgres",
			host: process.env.DB_HOST ?? "localhost",
			port: parseInt(process.env.DB_PORT ?? "5432"),
			username: process.env.DB_USER,
			password: String(process.env.DB_PASSWORD),
			database: process.env.DB_NAME,
			// Waning: NO CAMBIAR A true POR NINGUN CONCEPTO
			synchronize: false,
			logging: false,
			// entities: [__dirname + "/**/*.entity{.ts,.js}"]
			autoLoadEntities: true
		}),
		LdapModule,
		AuthModule,
		SupervisorsModule,
		PeopleModule
	],
	controllers: [],
	providers: []
})
export class AppModule {}
