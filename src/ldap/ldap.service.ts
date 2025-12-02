import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Client } from "ldapts";

import { AccessLevel } from "./entity/level.access.entity";
import { LDAP_SETTINGS } from "@/config";

@Injectable()
export class LdapService implements OnModuleDestroy {
	private client: Client;

	constructor(@InjectRepository(AccessLevel) private accessLevelRepository: Repository<AccessLevel>) {
		this.client = new Client({
			url: LDAP_SETTINGS.URL,
			timeout: LDAP_SETTINGS.TIMEOUT,
			connectTimeout: LDAP_SETTINGS.CONNECT_TIMEOUT
		});
	}

	async connect(ldapUser: string, ldapPassword: string) {
		return await this.client.bind(ldapUser, ldapPassword);
	}

	async onModuleDestroy() {
		await this.client.unbind();
	}

	async verifyUser(employeeId: string, password: string) {
		const user: string = `${employeeId}${LDAP_SETTINGS.USER}`;
		try {
			await this.connect(user, password);

			const accessLevel = await this.accessLevelRepository.findOne({ where: { employeeId } });

			if (!accessLevel) {
				await this.onModuleDestroy();
				return {
					status: false,
					message: "User not found with access level"
				};
			}

			await this.onModuleDestroy();
			return {
				status: true,
				message: "User found"
			};
		} catch (_) {
			await this.onModuleDestroy();
			return {
				status: false,
				message: "User not found"
			};
		}
	}
}
