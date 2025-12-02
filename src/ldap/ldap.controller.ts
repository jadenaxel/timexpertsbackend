import { Controller, Post, Body } from "@nestjs/common";
import { LdapService } from "./ldap.service";

@Controller({
	version: "1",
	path: "ldap"
})
export class LdapController {
	constructor(private readonly ldapService: LdapService) {}

	@Post()
	async verifyUser(@Body() body: { employeeId: string; password: string }) {
		const { employeeId, password } = body;
		return await this.ldapService.verifyUser(employeeId, password);
	}
}
