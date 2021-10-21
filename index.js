const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}
function destructivelyRemoveLastCat() {
    cats.pop()
}
function destructivelyRemoveFirstCat() {
    cats.shift()
}




const newCats = []
 function appendCat(name) {
   const newCats = [...cats, "Broom"];
   return newCats;
}
const someDumbCats = [];
function prependCat(name) {
const someDumbCats = ["Arnold", ...cats]
return someDumbCats;
}

function removeLastCat() {
    let lastCat = cats.slice(0, 2)
    return lastCat
}

function removeFirstCat() {
    let firstCat = cats.slice(1)
    return firstCat;
}