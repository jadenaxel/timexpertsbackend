import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "day_off", schema: "employees" })
export class EmployeeDayOff {
	@PrimaryGeneratedColumn({ name: "id_dayoff", type: "int" })
	idDayOff: number;

	@Column({ name: "dayoff", type: "varchar", length: 60 })
	dayOff: string;
}
