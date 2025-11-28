import { Injectable } from "@nestjs/common";
import { CreateLdapDto } from "./dto/create-ldap.dto";
import { UpdateLdapDto } from "./dto/update-ldap.dto";

@Injectable()
export class LdapService {
	create(createLdapDto: CreateLdapDto) {
		return "This action adds a new ldap";
	}

	findAll() {
		return `This action returns all ldap`;
	}

	findOne(id: number) {
		return `This action returns a #${id} ldap`;
	}

	update(id: number, updateLdapDto: UpdateLdapDto) {
		return `This action updates a #${id} ldap`;
	}

	remove(id: number) {
		return `This action removes a #${id} ldap`;
	}
}
