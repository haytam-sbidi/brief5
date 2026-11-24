export const url = "https://seriescope-api.vercel.app/api"
export const instance = axios.create({
    baseURL:url,
    timeout:5000,
    headers:{"X-Learner":"h.sbidi"}
})
