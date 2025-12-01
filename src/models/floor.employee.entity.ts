import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity({ schema: "employees", name: "floor" })
export class Floor {
	@PrimaryColumn({ name: "id_floor", type: "int" })
	idFloor: number;

	@Column({ name: "floor", type: "varchar", length: 10 })
	floor: string;
}
