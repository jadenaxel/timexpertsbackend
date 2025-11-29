import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { LdapModule } from "./ldap/ldap.module";
import { TypeOrmModule } from "@nestjs/typeorm";

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
			synchronize: true,
			logging: false,
			// entities: [__dirname + "/**/*.entity{.ts,.js}"]
			autoLoadEntities: true
		}),
		LdapModule
	],
	controllers: [],
	providers: []
})
export class AppModule {}
