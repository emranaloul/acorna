import axios from 'axios'

class ServiceAPi {
    constructor(){
        this.url = process.env.REACT_APP_API
        this.token = localStorage.getItem('token')
    }

    async post(path, headers={'Content-Type': "application/json"},data){
        try {
            let result =  await axios({
                method: 'post',
                url: `${this.url}/${path}`,
                headers,
                data,
            })
            return result.data
        } catch (error) {
            console.log("🚀 ~ file: APIService.js:18 ~ ServiceAPi ~ post ~ error:", error)
            throw new Error(error);
        }
    }
    async get(path, params){
        try {
            let result =  await axios({
                method: 'get',
                url: `${this.url}/${path}`,
                headers: {Authorization:`Bearer ${this.token}`},
                params
            })
            return result.data
        } catch (error) {
            throw new Error(error);
        }
    }
}

export default ServiceAPi