import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity({ schema: "employees", name: "relation" })
export class Relation {
	@PrimaryColumn({ name: "id_emp", type: "int" })
	idEmp: number;

	@Column({ name: "id_sup", type: "int", nullable: true })
	idSup: number | null;

	@Column({ name: "id_manager", type: "int", nullable: true })
	idManager: number | null;
}
