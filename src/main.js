import { getAll } from "./services/serieservice.js";
import { display } from "./ui/cards.js";
import { add } from "./ui/form.js";

let submitbtn = document.getElementById("submit-butn")
let search = document.getElementById("search-bar")
const genresselect = document.getElementById("genres-select")
const resetbtn = document.getElementById("reset-btn")

async function showseries () {
    let series = await getAll()
    display(series)
}
showseries()

submitbtn.addEventListener("click",async (e)=>{
    e.preventDefault()
    await add()
    showseries()
})