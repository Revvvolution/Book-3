import { getShippingShips } from "./database.js";


export const ShippingShipList = () => {
    const shippingShips = getShippingShips()

    let shippingShipHTML = "<ul>"

    for (const ship of shippingShips) {
        shippingShipHTML += `<li>${ship.name}</li>`
    }

    shippingShipHTML += "</ul>"

    return shippingShipHTML
}
