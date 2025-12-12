import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { TimesheetService } from "./timesheet.service";

import { JwtAuthGuard } from "@/auth/jwt-auth.guard";

@Controller({
	path: "timesheet",
	version: "1"
})
@UseGuards(JwtAuthGuard)
export class TimesheetController {
	constructor(private readonly timesheetService: TimesheetService) {}

	@Post("daily")
	findAllDaily(@Body() body: any) {
		return this.timesheetService.getDailyDate(body);
	}
	@Post("weekly")
	findAllWeekly(@Body() body: any) {
		return this.timesheetService.getWeeklyDate(body);
	}
}
