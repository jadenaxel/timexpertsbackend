import { Controller, Get, Param, Post, Body } from "@nestjs/common";
import { PeopleService } from "./people.service";

@Controller("people")
export class PeopleController {
	constructor(private readonly peopleService: PeopleService) {}

	@Get()
	findAll() {
		return this.peopleService.findAll();
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
