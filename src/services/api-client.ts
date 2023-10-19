import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "81bf2f974a5040abbed7784efa49825d"
    }
})

