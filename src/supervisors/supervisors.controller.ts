import { Controller, Get } from "@nestjs/common";
import { SupervisorsService } from "./supervisors.service";

@Controller({
	path: "supervisors",
	version: "1"
})
export class SupervisorsController {
	constructor(private readonly supervisorsService: SupervisorsService) {}

	@Get()
	findAll() {
		return this.supervisorsService.findAll();
	}
}
