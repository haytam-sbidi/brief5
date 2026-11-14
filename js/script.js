import {display} from "./display.js"
import { addtolist } from "./add.js"
import { movielist } from "./add.js"
import { precisedisplay } from "./filter.js"
import { genreadd } from "./filter.js"
import { reset } from "./filter.js"

let submitbtn = document.getElementById("submit-butn")
let search = document.getElementById("search-bar")
const genresselect = document.getElementById("genres-select")
const resetbtn = document.getElementById("reset-btn")
const movies = movielist

display(movies)
genreadd()

submitbtn.addEventListener("click",(e)=>{
    e.preventDefault()
    addtolist()
    display(movies)
    genreadd()
})
search.addEventListener("input",()=>{
    precisedisplay()
})
genresselect.addEventListener("change",()=>{
    precisedisplay()
})
resetbtn.addEventListener("click",(e)=>{
    e.preventDefault()
    reset()
    precisedisplay()
})