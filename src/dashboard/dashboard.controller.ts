import { Body, Controller, Get } from "@nestjs/common";
import { DashboardService } from "./dashboard.service";

@Controller({
	path: "dashboard",
	version: "1"
})
export class DashboardController {
	constructor(private readonly dashboardService: DashboardService) {}

	@Get("screenshots")
	async findAll() {
		return await this.dashboardService.findAll();
	}

	@Get("time/day")
	async findTime() {
		return await this.dashboardService.findTime();
	}
	@Get("time/week")
	async findTimeWeek() {
		return await this.dashboardService.findTimeWeek();
	}
}
