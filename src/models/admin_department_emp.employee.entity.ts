import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity({ name: "admin_department_emp", schema: "employees" })
export class AdminDepartmentEmployee {
	@PrimaryColumn({ name: "id_emp", type: "int" })
	idEmp: number;

	@Column({ name: "id_admin_department", type: "int" })
	idAdminDepartment: number;
}
