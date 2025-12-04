import { Controller, Get, UseGuards, Request } from "@nestjs/common";

import { SupervisorsService } from "./supervisors.service";
import { JwtAuthGuard } from "@/auth/jwt-auth.guard";
import { JwtService } from "@nestjs/jwt";

@Controller({
	path: "supervisors",
	version: "1"
})
@UseGuards(JwtAuthGuard)
export class SupervisorsController {
	constructor(
		private readonly supervisorsService: SupervisorsService,
		private readonly jwtService: JwtService
	) {}

	@Get()
	findAll() {
		return this.supervisorsService.findAll();
	}

	// @Get("/agents")
	// getAgents(@Request() req: any) {
	// 	return this.supervisorsService.getAgents();
	// }

	@Get("/agent/:employeeId")
	getAgent(@Request() req: any) {
		const token = req.headers.authorization.split("Bearer ")[1];
		const decodedToken = this.jwtService.decode(token);
		return this.supervisorsService.getAgent(req.params.employeeId, decodedToken);
	}
}
