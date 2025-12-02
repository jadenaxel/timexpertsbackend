import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity({ name: "level", schema: "access" })
export class AccessLevel {
	@PrimaryColumn({ name: "employee_id", type: "varchar", length: 25 })
	employeeId: string;

	@Column({ name: "access_level", type: "int" })
	accessLevel: number;
}
