import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity({ schema: "employees", name: "language" })
export class Language {
	@PrimaryColumn({ name: "id_language", type: "int" })
	idLanguage: number;

	@Column({ name: "language", type: "varchar", length: 20 })
	language: string;
}
