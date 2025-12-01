import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "project", schema: "employees" })
export class Project {
	@PrimaryGeneratedColumn({ name: "id_project", type: "int" })
	idProject: number;

	@Column({ name: "project", type: "varchar", length: 50 })
	project: string;
}
