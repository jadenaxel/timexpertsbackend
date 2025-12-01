import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity({ schema: "employees", name: "status_emp" })
export class StatusEmp {
	@PrimaryColumn({ name: "id_emp", type: "int" })
	idEmp: number;

	@Column({ name: "id_status", type: "int" })
	idStatus: number;
}
