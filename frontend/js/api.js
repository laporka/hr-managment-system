class ApiService {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api/employees';
    }

    async getEmployees() {
        const response = await fetch(this.baseUrl);
        return await response.json();
    }

    async addEmployees(employee) {
        const response = await fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(employee)
        });
        
        const data = await response.json();

        if(!response.ok){
            throw new Error(data.message || 'помилка збереження на сервері')
        }

        return data;
    }

    async deleteEmployees(id) {
        await fetch(`${this.baseUrl}/${id}`, {
            method: 'DELETE'
        });
    }
}