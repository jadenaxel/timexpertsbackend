import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "lob", schema: "employees" })
export class EmployeeLob {
	@PrimaryGeneratedColumn({ name: "id_lob", type: "int" })
	idLob: number;

	@Column({ name: "lob", type: "varchar" })
	lob: string;
}
