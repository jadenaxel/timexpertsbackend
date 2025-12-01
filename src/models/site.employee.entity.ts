import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity({ schema: "employees", name: "site" })
export class Site {
	@PrimaryColumn({ name: "id_site", type: "int" })
	idSite: number;

	@Column({ name: "site", type: "varchar", length: 50 })
	site: string;
}
