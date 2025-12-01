import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "time", schema: "employees" })
export class EmployeeTime {
	@PrimaryGeneratedColumn({ name: "id_time", type: "int" })
	idTime: number;

	@Column({ name: "time", type: "time without time zone" })
	time: string;
}
