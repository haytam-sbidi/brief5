const instance = axios.create({
    baseURL:"https://seriescope-api.vercel.app/api",
    timeout:80000,
    headers:{"X-Learner":"h.sbidi"}
})
export const movies = await instance.get("/series").then(response=>response.data).catch(err=>console.error("error message: ",err))
console.log(movies)