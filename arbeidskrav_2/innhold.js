
//Sjekke hva som ligger av innhold i arrayet som holder på ressurser


//Vise innhold i main/section, basert på hvilken kategori bruker klikker på

//1. Mapp
// let resourcesHTML = ""
// resources.map(resourcesItem => {
//     resourcesHTML +=
//         `<section>
//             <h1>${resourcesItem.category}</h1>
//             <article>
//             <p>${resourcesItem.text}</p>
//             <ul>`
//     resourcesItem.sources.forEach(source => {
//                 resourcesHTML +=
//                 `<li><a href="${source.url}">${source.title}</a></li>`
//             })
//     resourcesHTML +=
//            `</ul>
//         </article>
//     </section>`

//         })
    
// // console.log(resourcesHTML);
// const main = document.getElementsByTagName("main")
// main[0].innerHTML=resourcesHTML;


document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("#categories button");
    const main = document.getElementsByTagName("main")[0];
    
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const category = this.getAttribute("category");
            const resource = resources.find(item => item.category === category);

            if (resource) {
                let resourcesHTML =
                    `<section>
                        <h1>${resource.category}</h1>
                        <article>
                            <p>${resource.text}</p>
                            <ul>`;

                resource.sources.forEach(source => {
                    resourcesHTML +=
                        `<li><a href="${source.url}">${source.title}</a></li>`;
                });

                resourcesHTML +=
                    `</ul>
                    </article>
                </section>`;
                
                main.innerHTML = resourcesHTML;
            }
        });
    });
});

console.log(resources);


// let resourcesText = 
// document.getElementById("html-content").onclick = function() {showContent()};
// function showContent() {

//     document.getElementById("text").innerHTML = 
// }


// function ( resources.map => (reso) {

// }



