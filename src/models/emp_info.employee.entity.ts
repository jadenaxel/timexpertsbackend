import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity({ name: "emp_info", schema: "employees" })
export class EmpInfo {
	@PrimaryColumn({ name: "id_emp", type: "int" })
	idEmp: number;

	@Column({ name: "id_user", type: "varchar", length: 7 })
	idUser: string;

	@Column({ name: "name", type: "varchar", length: 50 })
	name: string;

	@Column({ name: "last_name", type: "varchar", length: 50 })
	lastName: string;
}
