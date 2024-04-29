import { getShippingShips, getHaulingShips } from "./database.js";


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a shipping ship list item clicked?
        if (itemClicked.dataset.type === "shippingShip") {

            // Get the haulerId value of the shipping ship clicked
            const haulerForShip = itemClicked.dataset.hauledby

            // Define a default object for the found hauler
            let haulingShip = { name: "Incorrect" }

            // Iterate the array of hauler objects
            const haulers = getHaulingShips()

            for (const hauler of haulers) {
                // Does the haulerId foreign key match the id of the current hauler?
                if (parseInt(haulerForShip) === hauler.id) {
                    // Reassign the value of `haulingShip` to the current hauler
                    haulingShip = hauler.name
                }
            }
            // Show an alert to the user with this format...
            // Palais Royal is being hauled by Seawise Giant
            window.alert(`${itemClicked.dataset.name} is being hauled by ${haulingShip}`)
        }
    }
)


export const ShippingShipList = () => {
    const shippingShips = getShippingShips()

    let shippingShipHTML = "<ul>"

    for (const ship of shippingShips) {
        shippingShipHTML += `<li data-id="${ship.id}"
                                 data-type="shippingShip"
                                 data-hauledby="${ship.haulerId}"
                                 data-name="${ship.name}">
                                ${ship.name}
                                </li>`
    }

    shippingShipHTML += "</ul>"

    return shippingShipHTML
}
