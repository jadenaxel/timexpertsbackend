import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity({ name: "email_emp", schema: "employees" })
export class EmailEmployee {
	@PrimaryColumn({ name: "id_emp", type: "int" })
	idEmp: number;

	@Column({ name: "id_email", type: "int" })
	idEmail: number;
}
