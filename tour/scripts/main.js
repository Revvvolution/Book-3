import { Venues } from "./Venues.js"
import { Bands } from "./Bands.js"
import { Bookings } from "./Bookings.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1 id="pageTitle">Tour Some Sugar On Me Venues, LLC</h1>
<article class="bookings">
    <h1>Bookings</h1>
    <div class="bookings__container">
    ${Bookings()}
    </div>
</article>
<article class="details">
    <section class="detail--column list details__venues">
        <h2>Venues</h2>
        ${Venues()}
    </section>
    <section class="detail--column list details__bands">
        <h2>Bands</h2>
        ${Bands()}
    </section>
</article>

`

mainContainer.innerHTML = applicationHTML

