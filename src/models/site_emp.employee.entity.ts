import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity({ schema: "employees", name: "site_emp" })
export class SiteEmp {
	@PrimaryColumn({ name: "id_emp", type: "int" })
	idEmp: number;

	@Column({ name: "id_site", type: "int", nullable: true })
	idSite: number | null;
}
