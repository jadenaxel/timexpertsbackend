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
		// Get the latest screenshots for users 3 users, 3 screenshots each
		return await this.timeSource.query("SELECT * FROM screenshots_data.get_latest_screenshots_for_users(3,3)");
	}

	async findTime() {
		const userQuantity: number = 4;
		const today: string = new Date().toISOString().split("T")[0];

		try {
			return await this.timeSource.query("SELECT * FROM time_data.get_summarized_time_by_user_per_date($1,$2,$3) WHERE total_seconds > 0 ORDER BY date DESC", [
				userQuantity,
				today,
				today
			]);
		} catch (error) {
			return new Error("Unable to query the database");
		}
	}

	async findTimeWeek() {
		const userQuantity: number = 4;
		const today: string = new Date().toISOString();
		const weekAgo: string = new Date(new Date().setDate(new Date().getDate() - 7)).toISOString();

		try {
			return await this.timeSource.query("SELECT * FROM time_data.get_summarized_time_by_user_per_date($1,$2,$3) WHERE total_seconds > 0 ORDER BY date DESC", [
				userQuantity,
				weekAgo,
				today
			]);
		} catch (error) {
			return new Error("Unable to query the database");
		}
	}
}
