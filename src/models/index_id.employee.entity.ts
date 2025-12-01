import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity({ schema: "employees", name: "index_id" })
export class IndexId {
	@PrimaryColumn({ name: "ID", type: "varchar", length: 7 })
	id: string;

	@Column({ name: "Index", type: "int" })
	index: number;
}
