class UI {
    static displayEmployees(employees){
        const list = document.querySelector('#employee-list');
        list.innerHTML = '';
        employees.forEach(employee => UI.addEmployeeToList(employee));
    }

    static addEmployeeToList(employee){
        const list = document.querySelector('#employee-list');
        const row = document.createElement('tr');

        const date = new Date(employee.hireDate).toLocaleDateString();

        row.innerHTML = `
            <td>${employee.fullName}</td>
            <td>${employee.position}</td>
            <td>${employee.phone}</td>
            <td>${date}</td>
            <td>${employee.salary}</td>
            <td>
                <button class="btn-delete" data-id="${employee._id}">Видалити</button>
            </td>
        `;
        list.appendChild(row);
    }

    static clearFields() {
        document.querySelector('#fullname').value = '';
        document.querySelector('#position').value = '';
        document.querySelector('#phone').value = '';
        document.querySelector('#hireDate').value = '';
        document.querySelector('#salary').value = '';
    }
}