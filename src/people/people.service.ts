import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";
import { InjectDataSource } from "@nestjs/typeorm";

@Injectable()
export class PeopleService {
	constructor(
		@InjectDataSource("WF")
		private dataSource: DataSource,
		@InjectDataSource("TimeXperts")
		private timeSource: DataSource
	) {}

	async findAll() {
		try {
			const users = await this.dataSource.query("SELECT * FROM employees.get_supervisors('H000070')");
			// return await this.dataSource.query(
			// 	'SELECT "He-hired", department, email, floor, gender, id_user, last_name, lob, manager, supervisor, name, project, roles, status, site FROM employees.view_employees_master'
			// );
			return users;
		} catch (error) {
			return new Error("Unable to query the database");
		}
	}

	async findOne(id: string) {
		const date = new Date().toISOString().split("Z")[0];

		try {
			const user = await this.dataSource.query(`SELECT * FROM employees.view_employees_master WHERE id_user = $1`, [id]);
			const screenshots = await this.timeSource.query("SELECT * FROM screenshots_data.screenshots WHERE user_name = $1 ORDER BY timestamp DESC LIMIT 10", [id]);
			const getTime = await this.timeSource.query("SELECT * FROM time_data.get_summarized_time_per_date($1,$2,$3)", [id, date, date]);
			if (!user) return new Error("User not found");
			return { user, screenshots, getTime };
		} catch (error) {
			return new Error("User not found");
		}
	}

	async agentDate(id: string, body: any) {
		const { from, to } = body;

		try {
			return await this.timeSource.query("SELECT * FROM time_data.get_summarized_time_per_date($1,$2,$3)", [id, from, to]);
		} catch (error) {
			return new Error("Unable to query the database");
		}
	}
}
