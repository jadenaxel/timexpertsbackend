import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "admin_department", schema: "employees" })
export class AdminDepartment {
	@PrimaryGeneratedColumn({ name: "id_admin_department", type: "int" })
	idAdminDepartment: number;

	@Column({ name: "department", type: "varchar", length: 50 })
	department: string;
}
