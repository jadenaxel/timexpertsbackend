import { Controller, Get, UseGuards, Request } from "@nestjs/common";

import { SupervisorsService } from "./supervisors.service";
import { JwtAuthGuard } from "@/auth/jwt-auth.guard";

@Controller({
	path: "supervisors",
	version: "1"
})
@UseGuards(JwtAuthGuard)
export class SupervisorsController {
	constructor(private readonly supervisorsService: SupervisorsService) {}

	@Get()
	findAll() {
		return this.supervisorsService.findAll();
	}

	@Get("/agents")
	getAgents(@Request() req: any) {
		return this.supervisorsService.getAgents(req.user.employeeId);
	}
}
