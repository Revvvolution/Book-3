import { getProducts } from "./database.js"

const products = getProducts()


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        
        let currency = "$" + parseFloat(itemClicked.dataset.price)

        // Had to get creative here for these trailing zeros, but it may not work for any price... 
        // parseFloat didn't affect data definition.
        
            const decimalPart = currency.split(".")[1]  //[1] is the second part of the split string after the split point (.)

            if (!currency.includes(".")) {
            // If no period in the price string, add .00
            currency += ".00"
          }
            else if (decimalPart.length === 1) {
              // If the decimal part has only one digit, append a trailing zero  (using an else if kept the page from breaking when decimalPart was undefined)
              currency += "0"
            }
        

        if (itemClicked.dataset.type === "product") {
            window.alert(`${itemClicked.dataset.name} costs\n${currency}`)
        }  
    }
)


export const Products = () => {
    let html = "<ul class='listFont'>"

    for (const product of products) {
        html += `<li data-type="product"
                     data-id="${product.id}"
                     data-name="${product.name}"
                     data-price="${product.price}">
                    ${product.name}
                    </li>`
    }

    html += "</ul>"

    return html
}

