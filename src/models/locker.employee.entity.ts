import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity({ schema: "employees", name: "locker" })
export class Locker {
	@PrimaryColumn({ name: "id_emp", type: "int" })
	idEmp: number;

	@Column({ name: "id_floor", type: "int", nullable: true })
	idFloor: number | null;

	@Column({ name: "locker", type: "int" })
	locker: number;
}
