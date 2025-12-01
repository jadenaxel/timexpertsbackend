import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity({ schema: "employees", name: "term" })
export class Term {
	@PrimaryColumn({ name: "id_term", type: "int" })
	idTerm: number;

	@Column({ name: "id_emp", type: "int" })
	idEmp: number;

	@Column({ name: "term_date", type: "date", nullable: true })
	termDate: string | null;

	@Column({ name: "reason", type: "varchar", length: 100, nullable: true })
	reason: string | null;
}
