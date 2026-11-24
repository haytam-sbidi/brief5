import { getAll } from "./services/serieservice.js";
import { display } from "./ui/cards.js";
import { add } from "./ui/form.js";
import { precisedisplay } from "./ui/filters.js";
import { genreadd } from "./ui/filters.js";
import { reset } from "./ui/filters.js";

let submitbtn = document.getElementById("submit-butn")
let search = document.getElementById("search-bar")
let language = document.getElementById("language-bar")
const genresselect = document.getElementById("genres-select")
const resetbtn = document.getElementById("reset-btn")

async function showseries () {
    let series = await getAll()
    display(series)
    genreadd(series)
}
showseries()

submitbtn.addEventListener("click",async (e)=>{
    e.preventDefault()
    await add()
    showseries()
})

async function filterdisplay() {
    let series = await getAll()
    precisedisplay(series)
}

search.addEventListener("input",()=>{
    filterdisplay()
})

genresselect.addEventListener("change",filterdisplay)

resetbtn.addEventListener("click",(e)=>{
    e.preventDefault()
    reset()
    showseries()
})