import {display} from "./display.js"
import { movielist } from "./add.js"

const movies = movielist
const search = document.getElementById("search-bar")
const genresselect = document.getElementById("genres-select")
let destination = document.getElementById("destination")

export function precisedisplay(){
    let val = search.value.toLowerCase()
    let result = movies.filter(item => item.name.toLowerCase().includes(val))
    
    let selectstatus = genresselect.value
    let filtered = result
    if(selectstatus != ""){
        filtered = result.filter(item => item.genres.includes(selectstatus))
    }
    console.log(filtered)
    if(filtered.length == 0){
        empty()
    }else{
        display(filtered)
    }
    
}
function empty(){
    destination.textContent = ""
    let p = document.createElement("p")
    p.textContent = "aucun film trouvé"
    p.className = "justify-self-center text-[30px]"
    destination.append(p)
}
export function genreadd(){
    let list =[]
    for (let i = 0; i < movies.length; i++) {
        let x = movies[i].genres
        list = [...new Set([...list,...x])]
    }
    for (let i = 0; i < list.length; i++) {
        let option = document.createElement("option")
        option.textContent = list[i]
        option.setAttribute("value",`${list[i]}`)
        option.className = "bg-black text-white"
        genresselect.append(option)
    }
}
export function reset(){
    search.value = ""
    genresselect.value = ""
}