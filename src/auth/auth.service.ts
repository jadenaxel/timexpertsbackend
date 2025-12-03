import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { LdapService } from "../ldap/ldap.service";

@Injectable()
export class AuthService {
	constructor(
		private ldapService: LdapService,
		private jwtService: JwtService
	) {}

	async validateUser(employeeId: string, pass: string, domain: string): Promise<any> {
		const result = await this.ldapService.verifyUser(employeeId, pass, domain);
		if (result && result.status) return { employeeId, domain };
		return null;
	}

	async validateUserByToken(token: string): Promise<any> {
		try {
			const user = this.jwtService.verify(token);
			if (!user) throw new UnauthorizedException();
			const checkUser: any = await this.ldapService.verifyUser(user.username, "", user.domain);
			if (!checkUser || !checkUser.status) throw new UnauthorizedException();
			return user;
		} catch (error) {
			throw new UnauthorizedException("Invalid or expired token");
		}
	}

	async login(user: any) {
		const payload = { username: user.employeeId, sub: user.employeeId, domain: user.domain };
		return {
			access_token: this.jwtService.sign(payload)
		};
	}
}
