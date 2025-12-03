import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";

@Injectable()
export class PeopleService {
	constructor(private dataSource: DataSource) {}

	findAll() {
		return this.dataSource.query("SELECT * FROM employees.view_employees_master");
	}
}
