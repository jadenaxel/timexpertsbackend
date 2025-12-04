import { Inject, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectDataSource } from "@nestjs/typeorm";
import { DataSource } from "typeorm";

@Injectable()
export class SupervisorsService {
	constructor(
		@InjectDataSource("WF")
		private dataSource: DataSource
	) {}

	async findAll() {
		return await this.dataSource.query("SELECT id_user, name from employees.get_supervisors()");
	}

	// async getAgents() {
	// 	try {
	// 		return await this.dataSource.query(`SELECT id_user, name FROM employees.get_agents_by_supervisors($1)`, [employeeID]);
	// 	} catch (error) {
	// 		return new Error("Your not a supervisor");
	// 	}
	// }

	async getAgent(employeeID: string, supervisorID: any) {
		try {
			return await this.dataSource.query(`SELECT * FROM employees.view_employees_master WHERE id_user = $1`, [employeeID]);
		} catch (error) {
			return new Error("Your not a supervisor");
		}
	}
}
