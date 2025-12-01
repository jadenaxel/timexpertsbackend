import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity({ name: "address", schema: "employees" })
export class EmployeeAddress {
	@PrimaryColumn({ name: "id_emp", type: "int" })
	idEmp: number;

	@Column({ name: "street", type: "varchar", length: 100 })
	street: string;

	@Column({ name: "sector", type: "varchar", length: 100 })
	sector: string;

	@Column({ name: "province", type: "varchar", length: 50 })
	province: string;

	@Column({ name: "country", type: "varchar", length: 50 })
	country: string;
}
