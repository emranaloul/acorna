import ServiceAPi from "./APIService";

class Auth extends ServiceAPi {
    constructor() {
        super()
        this.login = 'Auth/login'
    }
    basic({username, password}) {
        return { Authorization: ` Basic ${btoa(`${username}:${password}`)}`, 'Content-Type': "application/json; charset=utf8" }
      }

    async loginAuth(data) {
        try {
            let result = await this.post(this.login, null, data)
            return result
        } catch (error) {
            throw new Error(error)
        }
    }
}

export default new Auth()