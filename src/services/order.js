import ServiceAPi from "./APIService";

class Order extends ServiceAPi{
    constructor(){
        super()
        this.order = 'DepartureOrders/orders'
    }

    async getOrders(params){
        try {
            return await this.get(this.order, params)
        } catch (error) {
            throw new Error(error)
        }
    }
}

export default new Order()