import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity({ name: "project_department_emp", schema: "employees" })
export class ProjectDepartmentEmployee {
	@PrimaryColumn({ name: "id_emp", type: "int" })
	idEmp: number;

	@Column({ name: "id_project", type: "int", nullable: true })
	idProject: number | null;

	@Column({ name: "id_department", type: "int", nullable: true })
	idDepartment: number | null;
}
