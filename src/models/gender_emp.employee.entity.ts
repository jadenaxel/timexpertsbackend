import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity({ schema: "employees", name: "gender_emp" })
export class GenderEmp {
	@PrimaryColumn({ name: "id_emp", type: "int" })
	idEmp: number;

	@Column({ name: "id_gender", type: "int", nullable: true })
	idGender: number | null;
}
