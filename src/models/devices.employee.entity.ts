import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity({ name: "devices", schema: "employees" })
export class EmployeeDevices {
	@PrimaryColumn({ name: "id_emp", type: "int" })
	idEmp: number;

	@Column({ name: "devices", type: "varchar", length: 30 })
	devices: string;

	@Column({ name: "details", type: "varchar", length: 100, nullable: true })
	details: string | null;
}
