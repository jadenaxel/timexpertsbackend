import { Injectable } from "@nestjs/common";
import { InjectDataSource } from "@nestjs/typeorm";
import { DataSource } from "typeorm";

@Injectable()
export class TimesheetService {
	constructor(
		@InjectDataSource("TimeXperts")
		private timeSource: DataSource
	) {}

	async getDailyDate(body: any) {
		const { id, startDate, endDate } = body;

		const fromDate = new Date(startDate).toISOString();
		const toDate = new Date(endDate).toISOString();

		return await this.timeSource.query("SELECT * FROM time_data.get_summarized_time_per_date($1,$2,$3)", [id, fromDate, toDate]);
	}

	async getWeeklyDate(body: any) {
		const { id, startDate, endDate } = body;

		const fromDate = new Date(startDate).toISOString();
		const toDate = new Date(endDate).toISOString();

		return await this.timeSource.query("SELECT * FROM time_data.get_summarized_time($1,$2,$3)", [id, fromDate, toDate]);
	}
}
