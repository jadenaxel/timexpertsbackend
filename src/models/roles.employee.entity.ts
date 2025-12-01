import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity({ schema: "employees", name: "roles" })
export class Roles {
	@PrimaryColumn({ name: "id_roles", type: "int" })
	idRoles: number;

	@Column({ name: "roles", type: "varchar", length: 50 })
	role: string;
}
