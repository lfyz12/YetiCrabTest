import {$host} from "../http";
import {IGetResponse, IOrder, IResponse} from "../types/Types";



export default  class OrderService {

    static async createOrder(clientCompanyName: string, carrierFullName: string, carrierPhone: string, comments: string | null, status: string, atiCode: string) {
       return new Promise<IResponse>(resolve => resolve($host.post('api/order/createOrder', {clientCompanyName, carrierFullName, carrierPhone, comments, status, atiCode})))
    }

    static async deleteOrder(id: number){
        return  new Promise(resolve => resolve($host.post('api/order/deleteOrder', {id})))
    }
    static async updateCarrierFullName(id: number, carrierFullName: string){
        return  new Promise(resolve => resolve($host.put('api/order/updateCarrierFullName', {id, carrierFullName})))
    }

    static async updateCarrierPhone(id: number, carrierPhone: string){
        return  new Promise(resolve => resolve($host.put('api/order/updateCarrierPhone', {id, carrierPhone})))
    }

    static async updateComments(id: number, comments: string){
        return  new Promise(resolve => resolve($host.put('api/order/updateComments', {id, comments})))
    }

    static async updateStatus(id: number, status: string){
        return  new Promise(resolve => resolve($host.put('api/order/updateStatus', {id, status})))
    }

    static async updateAtiCode(id: number, atiCode: string){
        return  new Promise(resolve => resolve($host.put('api/order/updateAtiCode', {id, atiCode})))
    }

    static async updateClientCompanyName(id: number, clientCompanyName: string){
        return  new Promise(resolve => resolve($host.put('api/order/updateClientCompanyName', {id, clientCompanyName})))
    }

    static async getAllOrders() {
        return new Promise<IGetResponse>(resolve => resolve($host.get('api/order/getAllOrders')))
    }

}