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
}
