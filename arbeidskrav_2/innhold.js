
//Sjekke hva som ligger av innhold i arrayet som holder på ressurser
console.log(resources);

//Vise innhold i main/section, basert på hvilken kategori bruker klikker på

//1. Mappe innhold basert på ressurs-id i arrayet "resources"

let resourcesHTML = "<h1>Ressursarkiv</h1>"
resources.map(resourcesItem => resourcesHTML +=
    `<section>
        <h1">${resourcesItem.category}</h1>
        <article>
            <p>${resourcesItem.text}</p>
            <ul>${resourcesItem.sources}
                <li> <a> ${resourcesItem.sources.url}<p>${resourcesItem.sources.title}</p></a></li>
            </ul>
        </article>
    </section>`
    )

console.log(resourcesHTML);

const main = document.getElementsByTagName("main")
main[0].innerHTML=resourcesHTML;

