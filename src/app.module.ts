import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

import { LdapModule } from "./ldap/ldap.module";
import { AuthModule } from "./auth/auth.module";
import { SupervisorsModule } from "./supervisors/supervisors.module";
import { PeopleModule } from "./people/people.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { TimesheetModule } from './timesheet/timesheet.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: ".env"
		}),
		TypeOrmModule.forRoot({
			name: "WF",
			type: "postgres",
			host: process.env.WF_DB_HOST ?? "localhost",
			port: parseInt(process.env.WF_DB_PORT ?? "5432"),
			username: process.env.WF_DB_USER,
			password: String(process.env.WF_DB_PASSWORD),
			database: process.env.WF_DB_NAME,
			// Waning: NO CAMBIAR A true POR NINGUN CONCEPTO
			synchronize: false,
			logging: false,
			// entities: [__dirname + "/**/*.entity{.ts,.js}"]
			autoLoadEntities: true
		}),
		TypeOrmModule.forRoot({
			name: "TimeXperts",
			type: "postgres",
			host: process.env.IT_DB_HOST ?? "localhost",
			port: parseInt(process.env.IT_DB_PORT ?? "5432"),
			username: process.env.IT_DB_USER,
			password: String(process.env.IT_DB_PASSWORD),
			database: process.env.IT_DB_NAME,
			// Waning: NO CAMBIAR A true POR NINGUN CONCEPTO
			synchronize: false,
			logging: false,
			// // entities: [__dirname + "/**/*.entity{.ts,.js}"]
			autoLoadEntities: true
		}),
		LdapModule,
		AuthModule,
		SupervisorsModule,
		PeopleModule,
		DashboardModule,
		TimesheetModule
	],
	controllers: [],
	providers: []
})
export class AppModule {}
