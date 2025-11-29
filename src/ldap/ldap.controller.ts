import { Controller, Get, Query } from "@nestjs/common";
import { Client, SearchOptions } from "ldapts";

import { LDAP_SETTINGS } from "@/config";

@Controller("ldap")
export class LdapController {
	private client: Client;

	constructor() {
		this.client = new Client({
			url: LDAP_SETTINGS.URL,
			timeout: LDAP_SETTINGS.TIMEOUT,
			connectTimeout: LDAP_SETTINGS.CONNECT_TIMEOUT
		});
	}

	private async bind() {
		await this.client.bind(LDAP_SETTINGS.USER, LDAP_SETTINGS.PASSWORD);
	}
}
