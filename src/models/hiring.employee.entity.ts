import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity({ schema: "employees", name: "hiring" })
export class Hiring {
	@PrimaryColumn({ name: "id_hiring", type: "int" })
	idHiring: number;

	@Column({ name: "id_emp", type: "int" })
	idEmp: number;

	@Column({ name: "hiring_date", type: "date", nullable: true })
	hiringDate: string | null;
}
