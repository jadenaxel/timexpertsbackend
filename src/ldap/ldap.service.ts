import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Client } from "ldapts";

import { AccessLevel } from "./entity/level.access.entity";
import { LDAP_SETTINGS } from "@/config";
import { AccessLevelEnum } from "@/types";

@Injectable()
export class LdapService implements OnModuleDestroy {
	private client: Client;

	constructor(@InjectRepository(AccessLevel, "WF") private accessLevelRepository: Repository<AccessLevel>) {}

	async connect(ldapUser: string, ldapPassword: string, domain: string) {
		this.client = new Client({
			url: LDAP_SETTINGS.URL(domain.toLocaleLowerCase()),
			timeout: LDAP_SETTINGS.TIMEOUT,
			connectTimeout: LDAP_SETTINGS.CONNECT_TIMEOUT
		});

		return await this.client.bind(ldapUser, ldapPassword);
	}

	async onModuleDestroy() {
		await this.client.unbind();
	}

	async verifyUser(employeeId: string, password: string, domain: string) {
		const user: string = `${employeeId}${LDAP_SETTINGS.USER(domain.toLocaleLowerCase())}`;
		try {
			await this.connect(user, password, domain);
			const accessLevel = await this.accessLevelRepository.findOne({ where: { userName: employeeId } });

			if (!accessLevel) {
				await this.onModuleDestroy();
				return {
					status: false,
					message: "User not found with access level"
				};
			}

			if (accessLevel.accessLevel >= AccessLevelEnum.AGENT) {
				await this.onModuleDestroy();
				return {
					status: false,
					message: "You are not authorized to access this system"
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
