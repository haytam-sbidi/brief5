async function getdata() {
    const url = "https://api.tvmaze.com/shows?page=0"
    const response = await fetch(url)
    if (!response.ok) {
        console.log("hello")
    }
    const result = await response.json()
    console.log(result)
    return result
}
getdata()
export const data = await getdata()

console.log(data)
// async function recupererSerie(){
//     try {
//         const response = await fetch('https://api.tvmaze.com/shows');
//         if (!response.ok)
//             throw new Error('Erreur' + response.status);
//         const data = await response.json();
//         return data;
//     }
//     catch (error) {
//         console.log('Erreur :', error.message)
//     }
// }

// const data = await recupererSerie();