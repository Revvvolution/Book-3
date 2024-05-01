import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()


const employeeOrders = (id) => {
    let fulfilledOrders = 0

    for (const order of orders) {
        if (order.employeeId === parseInt(id)) {
            fulfilledOrders += 1
        }
    }

    return fulfilledOrders
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "employee") {

            const employeeId = itemClicked.dataset.id

            const orderCount = employeeOrders(employeeId)


            window.alert(` ${itemClicked.dataset.name} sold ${orderCount} products `)
            
            }
        }
)


export const Employees = () => {
    let html = "<ul class='listFont'>"

    for (const employee of employees) {
        html += `<li data-type="employee"
                     data-id="${employee.id}"
                     data-name="${employee.name}">
                    ${employee.name}
                    </li>`
    }

    html += "</ul>"

    return html
}

