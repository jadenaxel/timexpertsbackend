import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";
import { InjectDataSource } from "@nestjs/typeorm";

@Injectable()
export class DashboardService {
	constructor(
		@InjectDataSource("TimeXperts")
		private timeSource: DataSource
	) {}

	async findAll() {
		return await this.timeSource.query("SELECT * FROM screenshots_data.get_latest_screenshots_for_users(3,3)");
	}

	async findTime() {
		try {
			return await this.timeSource.query("SELECT * FROM time_data.get_summarized_time_by_user_per_date($1,$2,$3)", ["4", "2025-11-06", "2025-11-06"]);
		} catch (error) {
			return new Error("Unable to query the database");
		}
	}

	async findTimeWeek() {
		try {
			return await this.timeSource.query("SELECT * FROM time_data.get_summarized_time_by_user_per_date($1,$2,$3)", ["4", "2025-11-06", "2025-11-12"]);
		} catch (error) {
			return new Error("Unable to query the database");
		}
	}
}
