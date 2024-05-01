import { getVenues } from "./database.js"

const venues = getVenues()



export const Venues = () => {
    let html = "<ul class='listFont'>"

    for (const venue of venues) {
        html += `<li data-type="venue"
                     data-id="${venue.id}"
                     data-name="${venue.name}"
                     data-price="${venue.price}">
                    ${venue.name}
                    </li>`
    }

    html += "</ul>"

    return html
}
