import { Injectable } from "@nestjs/common";
import { InjectDataSource } from "@nestjs/typeorm";
import { DataSource } from "typeorm";

import { GET_AGENT_QUERY, GET_SUPERVISORS_F_QUERY } from "@/Query";

@Injectable()
export class SupervisorsService {
	constructor(
		@InjectDataSource("WF")
		private dataSource: DataSource
	) {}

	async findAll() {
		try {
			const GET_SUPERVISORS_RESULT = await this.dataSource.query(GET_SUPERVISORS_F_QUERY);
			if (GET_SUPERVISORS_RESULT.length === 0) return new Error("No supervisors found");
			return GET_SUPERVISORS_RESULT;
		} catch {
			return new Error("Unable to query the database");
		}
	}

	async getAgent(employeeID: string, supervisorID: any) {
		try {
			const GET_AGENT_RESULT = await this.dataSource.query(GET_AGENT_QUERY, [employeeID]);
			if (GET_AGENT_RESULT.length === 0) return new Error("Agent could not be found");
			return GET_AGENT_RESULT;
		} catch {
			return new Error("Unable to query the database");
		}
	}
}
