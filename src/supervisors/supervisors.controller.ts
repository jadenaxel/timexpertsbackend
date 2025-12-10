import { Controller, Get, Post, UseGuards, Request, Body } from "@nestjs/common";

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
		try {
			return this.supervisorsService.findAll();
		} catch (error) {
			return new Error("Unable to query the database");
		}
	}

	@Get("/agent/:employeeId")
	getAgent(@Request() req: any) {
		const GET_TOKEN = req.headers;
		if (!GET_TOKEN.hasOwnProperty("authorization")) return new Error("No authorization header found");
		const token: string = GET_TOKEN.authorization.split("Bearer ")[1];
		if (token.length <= 0) return new Error("No authorization header found");
		const decodedToken = this.jwtService.decode(token);
		if (!decodedToken) return new Error("No authorization header found");
		return this.supervisorsService.getAgent(req.params.employeeId, decodedToken);
	}
}
