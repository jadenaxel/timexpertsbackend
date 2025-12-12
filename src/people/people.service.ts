import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";
import { InjectDataSource } from "@nestjs/typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { AccessLevelEnum } from "@/types";

import { AccessLevel } from "../ldap/entity/level.access.entity";

@Injectable()
export class PeopleService {
	constructor(
		@InjectDataSource("WF")
		private dataSource: DataSource,
		@InjectDataSource("TimeXperts")
		private timeSource: DataSource,
		@InjectRepository(AccessLevel, "WF") private accessLevelRepository: Repository<AccessLevel>
	) {}

	async findAll(token: any) {
		try {
			// Check if the user is an admin
			const accessLevel = await this.accessLevelRepository.findOne({ where: { userName: token.username } });
			let users: any[];
			console.log(accessLevel);
			if (!accessLevel) return new Error("User not found");
			if (accessLevel.accessLevel != AccessLevelEnum.ADMIN) users = await this.dataSource.query("SELECT * FROM employees.get_agents_by_supervisor($1)", [token.username]);
			else users = await this.dataSource.query("SELECT * FROM employees.view_employees_master");

			if (users.length <= 0) return [];
			return users;
		} catch (error) {
			return new Error("Unable to query the database");
		}
	}

	async findOne(id: string) {
		const date = new Date().toISOString().split("Z")[0];

		try {
			const user = await this.dataSource.query(`SELECT * FROM employees.view_employees_master WHERE id_user = $1`, [id]);
			if (!user) return new Error("User not found");
			let screenshots = await this.timeSource.query("SELECT * FROM screenshots_data.screenshots WHERE user_name = $1 ORDER BY timestamp DESC LIMIT 10", [id]);
			if (!screenshots) screenshots = [];
			let getTime = await this.timeSource.query("SELECT * FROM time_data.get_summarized_time_per_date($1,$2,$3)", [id, date, date]);
			if (!getTime) getTime = [];
			return { user, screenshots, getTime };
		} catch (error) {
			return new Error("User not found");
		}
	}

	async agentDate(id: string, body: any) {
		const { from, to } = body;

		try {
			const result: any = await this.timeSource.query("SELECT * FROM time_data.get_summarized_time_per_date($1,$2,$3)", [id, from, to]);
			if (!result) return new Error("Unable to query the database");
			return result;
		} catch (error) {
			return new Error("Unable to query the database");
		}
	}
}
