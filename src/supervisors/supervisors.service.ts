import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";

@Injectable()
export class SupervisorsService {
	constructor(private dataSource: DataSource) {}

	async findAll() {
		return await this.dataSource.query("SELECT id_user, name from employees.get_supervisors()");
	}

	async getAgents(employeeID: string) {
		try {
			return await this.dataSource.query(
				`
                SELECT 
                    e1.id_user,
                    (e1.name || ' ' || e1.last_name) AS agent_name
                FROM employees.hierarchy h
                LEFT JOIN employees.emp_info e1 
                    ON e1.id_emp = h.id_emp
                LEFT JOIN employees.status_emp se
                    ON se.id_emp = h.id_emp
                LEFT JOIN employees.status s
                    ON s.id_status = se.id_status
                WHERE h.supervisor = $1
                AND s.status = 'Active';
            `,
				[employeeID]
			);
		} catch (error) {
			return new Error("Your not a supervisor");
		}
	}
}
