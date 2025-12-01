import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity({ name: "comm", schema: "employees" })
export class EmployeeComm {
	@PrimaryColumn({ name: "id_emp", type: "int" })
	idEmp: number;

	@Column({ name: "comm_user", type: "varchar", nullable: true })
	commUser: string | null;

	@Column({ name: "comm_ext", type: "varchar", length: 4, nullable: true })
	commExt: string | null;
}
