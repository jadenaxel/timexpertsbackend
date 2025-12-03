import { Controller, Post, Body, UnauthorizedException, Request } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller({
	version: "1",
	path: "auth"
})
export class AuthController {
	constructor(private authService: AuthService) {}

	@Post("login")
	async login(@Body() body: { employeeId: string; password: string; domain: string }) {
		const user = await this.authService.validateUser(body.employeeId, body.password, body.domain);
		if (!user) throw new UnauthorizedException();
		return this.authService.login(user);
	}

	@Post("validate")
	async validate(@Request() req) {
		const token = req.headers.authorization.split("Bearer ")[1];
		return this.authService.validateUserByToken(token);
	}
}
