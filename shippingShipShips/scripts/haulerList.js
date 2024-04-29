import { getHaulingShips, getShippingShips } from "./database.js";


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        
         // Was a hauler list item clicked?
        if (itemClicked.dataset.type === "hauler") {

            // Get the id of the hauler clicked
            const haulerId = itemClicked.dataset.id

            // Start a counter variable at 0
            let shipCounter = 0

            // Iterate all of the shipping ships
            const shippingShips = getShippingShips()

            for (const ship of shippingShips) {
                
                // Does the haulerId foreign key match the id?
                if (parseInt(haulerId) === ship.haulerId) {
                    // Increase the counter by 1
                    shipCounter++   // ++ is like +=1
                }
            }

            window.alert(`This hauler is carrying ${shipCounter} shipping ship(s)`)
        }
    }
)


export const HaulerList = () => {
    const haulers = getHaulingShips()

    let haulerHTML = "<ul>"

    for (const hauler of haulers) {
        haulerHTML += `<li data-id="${hauler.id}"
                           data-type="hauler">
                          ${hauler.name}
                          </li>`
    }

    haulerHTML += "</ul>"

    return haulerHTML
}