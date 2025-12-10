const GET_SUPERVISORS_F_QUERY: string = "SELECT id_user, name from employees.get_supervisors()";
const GET_AGENT_QUERY: string = `SELECT * FROM employees.view_employees_master WHERE id_user = $1`;

export { GET_SUPERVISORS_F_QUERY, GET_AGENT_QUERY };
