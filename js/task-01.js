const listI = document.querySelector("#categories")

const numElement = listI.children.length
console.log(`Number of catrgories: ${numElement.length}`)

const listEl = listI.children;
[...listEl].forEach((list)=> {
    console.log(`Category:${list.firstElementChild.textContent}`),
    console.log(`Elements:${list.lastElementChild.children.length}`)

})

