import { DockList } from "./dockList.js";


const mainContainer = document.querySelector("#mainContainer")


const applicationHTML = `
<h1>Shipping Ship Ships <br> *Where your ships will be shipped by our shipping ship ships!*</h1>
<article class="details">
    <section class="details__docks">
        <h2>Docks</h2>
        ${DockList()}
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML