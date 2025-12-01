import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity({ name: "hierarchy", schema: "employees" })
export class EmployeeHierarchy {
	@PrimaryColumn({ name: "id_emp", type: "int" })
	idEmp: number;

	@Column({ name: "supervisor", type: "int", nullable: true })
	supervisor: number | null;

	@Column({ name: "manager", type: "int", nullable: true })
	manager: number | null;
}
