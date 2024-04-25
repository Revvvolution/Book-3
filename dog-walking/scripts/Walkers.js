import { getWalkers } from "./database.js"

const walkers = getWalkers()

document.addEventListener(
    "click",
    (theClickEventTaco) => {
        const whatWasClickedOnTaco = theClickEventTaco.target

        if (whatWasClickedOnTaco.dataset.type === "walkerTaco") {
            window.alert(`This walker works in ${whatWasClickedOnTaco.dataset.city}`)
        }
        
    }
)


export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li data-id="${walker.id}"
                           data-city="${walker.city}"
                           data-type="walkerTaco"            
                           >${walker.name}</li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML
}

