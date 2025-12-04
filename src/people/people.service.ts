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
		return await this.dataSource.query("SELECT * FROM employees.view_employees_master");
	}

	async findOne(id: string) {
		try {
			const user = await this.dataSource.query("SELECT * FROM employees.view_employees_master WHERE id_user = $1", [id]);
			const screenshots = await this.timeSource.query("SELECT * FROM screenshots_data.screenshots WHERE user_name = $1 ORDER BY timestamp DESC LIMIT 5", [id]);
			if (!user) return new Error("User not found");
			return { user, screenshots };
		} catch (error) {
			return new Error("User not found");
		}
	}
}
