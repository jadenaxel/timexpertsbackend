import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { TimesheetService } from "./timesheet.service";

@Controller({
	path: "timesheet",
	version: "1"
})
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
