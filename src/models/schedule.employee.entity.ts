import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "schedule", schema: "employees" })
export class EmployeeSchedule {
	@PrimaryGeneratedColumn({ name: "id_schedule", type: "int" })
	idSchedule: number;

	@Column({ name: "id_emp", type: "int" })
	idEmp: number;

	@Column({ name: "in_monday", type: "int", nullable: true })
	inMonday: number | null;

	@Column({ name: "out_monday", type: "int", nullable: true })
	outMonday: number | null;

	@Column({ name: "in_tuesday", type: "int", nullable: true })
	inTuesday: number | null;

	@Column({ name: "out_tuesday", type: "int", nullable: true })
	outTuesday: number | null;

	@Column({ name: "in_wednesday", type: "int", nullable: true })
	inWednesday: number | null;

	@Column({ name: "out_wednesday", type: "int", nullable: true })
	outWednesday: number | null;

	@Column({ name: "in_thursday", type: "int", nullable: true })
	inThursday: number | null;

	@Column({ name: "out_thursday", type: "int", nullable: true })
	outThursday: number | null;

	@Column({ name: "in_friday", type: "int", nullable: true })
	inFriday: number | null;

	@Column({ name: "out_friday", type: "int", nullable: true })
	outFriday: number | null;

	@Column({ name: "in_saturday", type: "int", nullable: true })
	inSaturday: number | null;

	@Column({ name: "out_saturday", type: "int", nullable: true })
	outSaturday: number | null;

	@Column({ name: "day_off", type: "int", nullable: true })
	dayOff: number | null;
}
