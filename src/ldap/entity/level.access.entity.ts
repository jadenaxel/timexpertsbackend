import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity({ name: "level", schema: "access" })
export class AccessLevel {
	@PrimaryColumn({ name: "employee_id", type: "varchar", length: 25 })
	employeeId: string;

	@Column({ name: "access_level", type: "int" })
	accessLevel: number;

	@Column({ name: "user_name", type: "varchar" })
	userName: string;

	@Column({ name: "country", type: "varchar" })
	country: string;
}
