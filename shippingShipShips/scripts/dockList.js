import { getDocks, getHaulingShips } from "./database.js"


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "dock") {

            const currentDock = itemClicked.dataset.id

            let unloadingWhat = ""

            const haulers = getHaulingShips()

            for (const hauler of haulers) {
                // getting a comma and a space to print after each matched entry, so I placed this first in the loop and it doesn't work properly.
                /*
                if (unloadingWhat !== "") {
                    unloadingWhat += ", "                    
                }
                */
                if (parseInt(currentDock) === hauler.dockId) {   // After many attempts, I combined my first idea with a "pre-print" of the comma and space ONLY if there is an initial entry.
                    if (unloadingWhat !== "") {
                        unloadingWhat += ", "                    
                    }
                }
                if (parseInt(currentDock) === hauler.dockId) {
                    unloadingWhat += hauler.name                    
                }
            }

            // After the for loop, checks to see if the value of unloadingWhat is still an empty string "" and THEN changes the value to "nothing" just before printing
            if (unloadingWhat === "") {
                unloadingWhat = "nothing"
            }

            window.alert(`The ${itemClicked.dataset.name} dock is currently unloading ${unloadingWhat}`)
        }
    }
)


export const DockList = () => {
    const docks = getDocks()

    let docksHTML = "<ul>"

    for (const dock of docks) {
        docksHTML += `<li data-id="${dock.id}"
                          data-type="dock"
                          data-name="${dock.location}">
        ${dock.location} can hold ${dock.maxVolume} million tons of cargo
        </li>`
    }

    docksHTML += "</ul>"

    return docksHTML
}

        // present a message to the user that follows the format below if a hauler is currently at that dock:
        // The Shanghai, China dock is currently unloading Boaty McBoatface

        // If there is no hauler at the dock, present the following message:
        // The Shanghai, China dock is currently unloading nothing

        // If there is more than one hauler at the dock, present the following message:
        // The Shanghai, China dock is currently unloading Boaty McBoatface, Seawise Giant
