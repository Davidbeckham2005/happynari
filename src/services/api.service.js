import { api } from "../api";
export async function getHello() {
    const response = await api.get("/api/birthday-message")
    return response.data
}