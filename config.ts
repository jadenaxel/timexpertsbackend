// LDAP Settings

const LDAP_SETTINGS: any = {
	URL: (domain: string) => {
		switch (domain) {
			case "do":
				return "ldap://192.168.1.7";
			case "co":
				return "ldap://10.216.10.9";
			default:
				return false;
		}
	},
	TIMEOUT: 5000,
	CONNECT_TIMEOUT: 10000,

	BASE_DN: (domain: string) => {
		switch (domain) {
			case "do":
				return "DC=hiredexpert,DC=local";
			case "co":
				return "DC=hiredexpertscol,DC=com";
			default:
				return false;
		}
	},

	USER: (domain: string) => {
		switch (domain) {
			case "do":
				return "@hiredexpert.local";
			case "co":
				return "@hiredexpertscol.com";
			default:
				return false;
		}
	}
};

export { LDAP_SETTINGS };
