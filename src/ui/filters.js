import { display } from "./cards.js"

const search = document.getElementById("search-bar")
const genresselect = document.getElementById("genres-select")
let destination = document.getElementById("destination")

export function precisedisplay(arr) {
    let val = search.value.toLowerCase()
    let result = arr.filter(item => item.name.toLowerCase().includes(val))

    let selectstatus = genresselect.value
    let filtered = result
    if (selectstatus != "") {
        filtered = result.filter(item => item.genres.includes(selectstatus))
    }
    if (filtered.length == 0) {
        empty()
    } else {
        display(filtered)
    }
}
export function genreadd(arr) {
    let list = []
    for (let i = 0; i < arr.length; i++) {
        let x = arr[i].genres
        list = [...new Set([...list, ...x])]
        list = list.sort()
    }
    genresselect.textContent = ""
    let option1 = document.createElement("option")
    option1.textContent = "select a genre"
    option1.setAttribute("value","")
    option1.className = "bg-black text-white"
    genresselect.append(option1)
    for (let i = 0; i < list.length; i++) {
        let option = document.createElement("option")
        option.textContent = list[i]
        option.setAttribute("value", `${list[i]}`)
        option.className = "bg-black text-white"
        genresselect.append(option)
    }
}
function empty() {
    destination.textContent = ""
    let p = document.createElement("p")
    p.textContent = "aucun film trouvé"
    p.className = "justify-self-center text-[30px]"
    destination.append(p)
}
export function reset() {
    search.value = ""
    genresselect.value = ""
}