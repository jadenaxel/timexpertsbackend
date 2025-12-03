import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";
import { InjectDataSource } from "@nestjs/typeorm";

@Injectable()
export class PeopleService {
	constructor(
		@InjectDataSource("WF")
		private dataSource: DataSource
	) {}

	async findAll() {
		return await this.dataSource.query("SELECT * FROM employees.view_employees_master");
	}
}
