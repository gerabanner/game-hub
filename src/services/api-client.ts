import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'd283dafcafbb4864ae7b4b96f3278a5b'
    }
})
