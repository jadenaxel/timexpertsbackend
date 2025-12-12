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
		const NumberOfUsers: number = 3;
		const NumberOfScreenshots: number = 3;
		try {
			const result: any = await this.timeSource.query("SELECT * FROM screenshots_data.get_latest_screenshots_for_users($1,$2)", [NumberOfUsers, NumberOfScreenshots]);
			if (result.length <= 0) return [];
			return result;
		} catch (error) {
			return new Error("Unable to query the database");
		}
	}

	async findTime() {
		const userQuantity: number = 4;
		const today: string = new Date().toISOString().split("T")[0];

		try {
			const result: any = await this.timeSource.query("SELECT * FROM time_data.get_summarized_time_by_user_per_date($1,$2,$3) WHERE total_seconds > 0 ORDER BY date DESC", [
				userQuantity,
				today,
				today
			]);
			if (result.length <= 0) return [];
			return result;
		} catch (error) {
			return new Error("Unable to query the database");
		}
	}

	async findTimeWeek() {
		const userQuantity: number = 4;
		const dayQuantity: number = 7;
        
		const today: string = new Date().toISOString();
		const weekAgo: string = new Date(new Date().setDate(new Date().getDate() - dayQuantity)).toISOString();

		try {
			const result: any = await this.timeSource.query("SELECT * FROM time_data.get_summarized_time_by_user_per_date($1,$2,$3) WHERE total_seconds > 0 ORDER BY date DESC", [
				userQuantity,
				weekAgo,
				today
			]);
			if (result.length <= 0) return [];
			return result;
		} catch (error) {
			return new Error("Unable to query the database");
		}
	}
}
