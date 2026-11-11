import {display} from "./display.js"
import { addtolist } from "./add.js"

display()

let submitbtn = document.getElementById("submit-butn")

submitbtn.addEventListener("click",(e)=>{
    e.preventDefault()
    addtolist()
    display()
})