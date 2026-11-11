import { data } from "./fetch.js"

const movies = data
let destination = document.getElementById("destination")

export function display() {
    for (let i = 0; i <= 20; i++) {
        let div1 = document.createElement("div")
        let img = document.createElement("img")
        let div2 = document.createElement("div")
        let h2 = document.createElement("h2")
        let div3 = document.createElement("div")
        let p = document.createElement("p")
        let desc = movies[i].summary
        let target = ["</p>","</b>"]
        let regex = new RegExp(target.join("|"),"gi")
        let clean = desc.replace(regex,"")

        div1.className = ("border-[0.5px] border-[#393939] rounded-xl mt-2")
        img.setAttribute("src", `${movies[i].image.original}`)
        img.className = "rounded-t-xl w-[100%] h-[202px]"
        div2.className = "pl-4 p-2"
        h2.className = "font-bold text-[15px]"
        div3.className = "flex truncate"
        p.className = "text-[14px] text-[#BABABA] truncate"

        h2.textContent = movies[i].name
        for (let j = 0; j < movies[i].genres.length; j++) {
            let h5 = document.createElement("h5")

            h5.className = "w-fit h-[18px] bg-[#292929] rounded-lg text-[11px] self-center pl-2 pr-2 mr-1"

            h5.textContent = movies[i].genres[j]
            div3.append(h5)
        }
        p.textContent = clean.replace(/<p>|<b>/g,"")

        div2.append(h2, div3, p)
        div1.append(img, div2)
        destination.append(div1)
    }
}