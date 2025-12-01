import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity({ schema: "employees", name: "floor_emp" })
export class FloorEmp {
	@PrimaryColumn({ name: "id_emp", type: "int" })
	idEmp: number;

	@Column({ name: "id_floor", type: "int", nullable: true })
	idFloor: number | null;
}
