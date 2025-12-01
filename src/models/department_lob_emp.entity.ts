import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity({ name: "department_lob_emp", schema: "employees" })
export class DepartmentLobEmployee {
	@PrimaryColumn({ name: "id_emp", type: "int" })
	idEmp: number;

	@Column({ name: "id_department", type: "int", nullable: true })
	idDepartment: number | null;

	@Column({ name: "id_lob", type: "int", nullable: true })
	idLob: number | null;
}
