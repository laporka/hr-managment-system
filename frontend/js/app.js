const api = new ApiService();

document.addEventListener('DOMContentLoaded', async () => {
    try{
        const employees = await api.getEmployees();
        UI.displayEmployees(employees);
    } catch (error) {
        console.error("Помилка завантаження даних", error);
    }
});

document.querySelector('#employee-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const fullName = document.querySelector('#fullname').value;
    const position = document.querySelector('#position').value;
    const phone = document.querySelector('#phone').value;
    const hireDate = document.querySelector('#hireDate').value;
    const salary = document.querySelector('#salary').value;

    const employee = new Employee(fullName, position, phone, hireDate, salary);

    try{
        const savedEmployee = await api.addEmployees(employee)

        UI.addEmployeeToList(savedEmployee);
        UI.clearFields();
    } catch (error) {
        console.error("Помилка збереження", error);
    }
});

document.querySelector('#employee-list').addEventListener('click', async (e) => {
    if(e.target.classList.contains('btn-delete')){
        const id = e.target.getAttribute('data-id');

        try{
            await api.deleteEmployees(id);
            e.target.parentElement.parentElement.remove();
        } catch (error) {
            console.error("Помилка видалення", error);
        }
    }
});