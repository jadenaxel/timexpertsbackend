import { Controller, Get, Param, Post, Body, UseGuards, Request } from "@nestjs/common";
import { PeopleService } from "./people.service";
import { JwtAuthGuard } from "@/auth/jwt-auth.guard";
import { JwtService } from "@nestjs/jwt";

@Controller({
	path: "people",
	version: "1"
})
@UseGuards(JwtAuthGuard)
export class PeopleController {
	constructor(
		private readonly peopleService: PeopleService,
		private readonly jwtService: JwtService
	) {}

	@Get()
	findAll(@Request() req) {
		const token = req.headers.authorization.split("Bearer ")[1];
		const decodeToken = this.jwtService.decode(token);
		return this.peopleService.findAll(decodeToken);
	}

	@Get(":id")
	findOne(@Param("id") id: string) {
		return this.peopleService.findOne(id);
	}

	@Post(":id/date")
	agentDate(@Param("id") id: string, @Body() body: any) {
		return this.peopleService.agentDate(id, body);
	}
}
