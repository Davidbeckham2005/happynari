import axios from "axios";

const rawBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:3000"
const normalizedBaseUrl = rawBaseUrl.replace(/\/+$/, "")

export const api = axios.create({
    baseURL: normalizedBaseUrl,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})