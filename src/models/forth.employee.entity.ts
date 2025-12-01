import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity({ schema: "employees", name: "forth" })
export class Forth {
	@PrimaryColumn({ name: "id_emp", type: "int" })
	idEmp: number;

	@Column({ name: "forth_user", type: "varchar", length: 20, nullable: true })
	forthUser: string | null;

	@Column({ name: "forth_name", type: "varchar", length: 80, nullable: true })
	forthName: string | null;
}
