import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "email", schema: "employees" })
export class EmployeeEmail {
	@PrimaryGeneratedColumn({ name: "id_email", type: "int" })
	idEmail: number;

	@Column({ name: "email", type: "varchar", length: 80 })
	email: string;
}
