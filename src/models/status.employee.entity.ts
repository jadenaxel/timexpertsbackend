import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity({ schema: "employees", name: "status" })
export class Status {
	@PrimaryColumn({ name: "id_status", type: "int" })
	idStatus: number;

	@Column({ name: "status", type: "varchar", length: 10 })
	status: string;
}
