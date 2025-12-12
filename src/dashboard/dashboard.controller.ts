import { Controller, Get, UseGuards } from "@nestjs/common";
import { DashboardService } from "./dashboard.service";
import { JwtAuthGuard } from "@/auth/jwt-auth.guard";

@Controller({
	path: "dashboard",
	version: "1"
})
@UseGuards(JwtAuthGuard)
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
