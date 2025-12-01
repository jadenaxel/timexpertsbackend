import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity({ schema: "employees", name: "roles_emp" })
export class RolesEmp {
	@PrimaryColumn({ name: "id_emp", type: "int" })
	idEmp: number;

	@Column({ name: "id_roles", type: "int", nullable: true })
	idRoles: number | null;
}
