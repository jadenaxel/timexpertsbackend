import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "screenshots", schema: "screenshots_data" })
export class Screenshot {
	@PrimaryGeneratedColumn({ type: "integer", name: "id" })
	id: number;

	@Column({ type: "text", name: "user_name" })
	userName: string;

	@Column({ type: "text", name: "machine_id" })
	machineId: string;

	@Column({ type: "timestamptz", name: "timestamp" })
	timestamp: Date;

	@Column({ type: "text", name: "filename", nullable: true })
	filename: string;

	@Column({ type: "bytea", name: "image_data", nullable: true })
	imageData: Buffer;
}
