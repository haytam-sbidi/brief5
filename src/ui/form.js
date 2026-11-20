import { create } from "../services/serieservice.js"
import { url } from "../services/api.js"

let name = document.getElementById("name")
let genres = document.getElementById("genres")
let description = document.getElementById("description")

export async function add(){
    if(name.value.trim() == "" || genres.value.trim() == "" || description.value.trim() == ""){
        window.alert("Please fill out all spaces.")
        return
    }
    let temp = {
        "name":name.value,
        "language":"english",
        "genres":genres.value.split(","),
        "summary":description.value
    }
    await create("/series/",temp)
    temp={}
    name.value = ""
    genres.value = ""
    description.value = ""
}