import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity({ schema: "employees", name: "gender" })
export class Gender {
	@PrimaryColumn({ name: "id_gender", type: "int" })
	idGender: number;

	@Column({ name: "gender", type: "char", length: 1 })
	gender: string;
}
