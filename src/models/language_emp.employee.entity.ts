import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity({ schema: "employees", name: "language_emp" })
export class LanguageEmp {
	@PrimaryColumn({ name: "id_emp", type: "int" })
	idEmp: number;

	@Column({ name: "id_language", type: "int", nullable: true })
	idLanguage: number | null;
}
