async function getdata() {
    const url = "https://api.tvmaze.com/shows?page=0"
    const response = await fetch(url)
    if (!response.ok) {
    }
    const result = await response.json()
    return result
}
getdata()
export const data = await getdata()