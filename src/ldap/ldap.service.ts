import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { Client } from "ldapts";
import { LDAP_SETTINGS } from "@/config";

@Injectable()
export class LdapService implements OnModuleDestroy {
	private client: Client;

	constructor() {
		this.client = new Client({
			url: LDAP_SETTINGS.URL,
			timeout: LDAP_SETTINGS.TIMEOUT,
			connectTimeout: LDAP_SETTINGS.CONNECT_TIMEOUT
		});
	}

	async connect() {
		return await this.client.bind(LDAP_SETTINGS.USER, LDAP_SETTINGS.PASSWORD);
	}

	async onModuleDestroy() {
		await this.client.unbind();
	}
}
