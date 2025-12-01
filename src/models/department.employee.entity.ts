import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "department", schema: "employees" })
export class Department {
	@PrimaryGeneratedColumn({ name: "id_department", type: "int" })
	idDepartment: number;

	@Column({ name: "department", type: "varchar", length: 50 })
	department: string;
}
