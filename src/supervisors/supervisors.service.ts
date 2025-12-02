import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";

@Injectable()
export class SupervisorsService {
	constructor(private dataSource: DataSource) {}

	async findAll() {
		return await this.dataSource.query("SELECT id_user, name FROM employees.get_supervisors()");
	}
}
