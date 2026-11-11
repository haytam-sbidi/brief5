import { data } from "./fetch.js"

export const movielist = data

let name = document.getElementById("name")
let genres = document.getElementById("genres")
let description = document.getElementById("description")

export function addtolist() {
    if(name.value.trim() == "" || genres.value.trim() == "" || description.value.trim() == ""){
        window.alert("Please fill out all spaces.")
        return
    }
    let temp = {
        "image":{"original":"assets/video-player-placeholder-very-large.png"},
        "name":name.value,
        "genres":genres.value.split(","),
        "summary":description.value
    }

    movielist.splice(0,0,temp)
    temp={}
    name.value = ""
    genres.value = ""
    description.value = ""
}