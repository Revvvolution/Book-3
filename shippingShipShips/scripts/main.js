import { DockList } from "./dockList.js";
import { HaulerList } from "./haulerList.js";


const mainContainer = document.querySelector("#mainContainer")


const applicationHTML = `
<h1>Shipping Ship Ships <br> *Where your ships will be shipped by our shipping ship ships!*</h1>
<article class="details">
    <section class="details__docks">
        <h2>Docks</h2>
        ${DockList()}
    </section>
    <section class="details__haulers">
        <h2>Hauling Ships</h2>
        ${HaulerList()}
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML