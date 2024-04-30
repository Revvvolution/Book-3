import { getEmployees } from "./database.js"

const employees = getEmployees()

export const Employees = () => {
    let html = "<ul class='listFont'>"

    for (const employee of employees) {
        html += `<li>${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

