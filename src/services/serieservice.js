import { instance } from "./api.js"

export async function getAll() {
    try {
        const response = await instance.get("/series")
        console.log(response.data)
        return response.data
    } catch (error) {
        throw error
    }
}

export async function create(url,serie) {
        const response = await instance.post(url,serie)
        return response
}