import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { LdapService } from "../ldap/ldap.service";

@Injectable()
export class AuthService {
	constructor(
		private ldapService: LdapService,
		private jwtService: JwtService
	) {}

	async validateUser(employeeId: string, pass: string): Promise<any> {
		const result = await this.ldapService.verifyUser(employeeId, pass);
		if (result && result.status) return { employeeId };
		return null;
	}

	async validateUserByToken(token: string): Promise<any> {
		const user = this.jwtService.decode(token);
		if (!user) throw new UnauthorizedException();
		const checkUser: any = await this.ldapService.verifyUser(user.employeeId, "");
		if (!checkUser && !checkUser.status) throw new UnauthorizedException();
		return user;
	}

	async login(user: any) {
		const payload = { username: user.employeeId, sub: user.employeeId };
		return {
			access_token: this.jwtService.sign(payload)
		};
	}
}
