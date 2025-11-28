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

	@Get("searchUser")
	async searchUser(@Query() query: { username: string }) {
		try {
			await this.bind();

			const options: SearchOptions = {
				scope: "sub",
				filter: `(sAMAccountName=${query.username})`,
				attributes: ["cn", "mail", "memberOf", "sAMAccountName"]
			};

			const baseDN: string = LDAP_SETTINGS.BASE_DN;
			const { searchEntries }: { searchEntries: any[] } = await this.client.search(baseDN, options);

			await this.client.unbind();
			return searchEntries;
		} catch (error) {
			console.error("Error al buscar usuario:", error);
			await this.client.unbind();
			throw error;
		}
	}
}
