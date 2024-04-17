import OrderService from "../service/orderService";
import {IGetResponse, IOrder, IResponse} from "../types/Types";
import {makeAutoObservable} from "mobx";



export default class OrderStore {
    currentOrder: IOrder | null;
    orderList: IOrder[];
    role: string;
    constructor() {
        this.currentOrder = null;
        this.orderList = [];
        this.role = "USER"
        makeAutoObservable(this)
    }

    setCurrentOrder(order: IOrder | null): void {
        this.currentOrder = order;
    }

    setOrderList(orderList: IOrder[]): void {
        this.orderList = orderList;
    }

    setRole(role: string) {
        this.role = role
    }

    changeRole(role: string) {
        this.setRole(role)
    }
    async createOrder(clientCompanyName: string, carrierFullName: string, carrierPhone: string, comments: string | null, status: string, atiCode: string) {
        const response: IResponse = await OrderService.createOrder(clientCompanyName, carrierFullName, carrierPhone, comments, status, atiCode);
        this.setCurrentOrder(response.data)
    }


    async deleteOrder(id: number): Promise<void> {
        await OrderService.deleteOrder(id);
    }

    async updateClientCompanyName(id: number, clientCompanyName: string): Promise<void> {
        const response = await OrderService.updateClientCompanyName(id, clientCompanyName)
    }

    async updateCarrierFullName(id: number, carrierFullName: string): Promise<void> {
        const response = await OrderService.updateCarrierFullName(id, carrierFullName)
    }
    async updateCarrierPhone(id: number, carrierPhone: string): Promise<void> {
        const response = await OrderService.updateCarrierPhone(id, carrierPhone)
    }
    async updateComments(id: number, comments: string): Promise<void> {
        const response = await OrderService.updateComments(id, comments)
    }
    async updateStatus(id: number, status: string): Promise<void> {
        const response = await OrderService.updateStatus(id, status)
    }
    async updateAtiCode(id: number, atiCode: string): Promise<void> {
        const response = await OrderService.updateAtiCode(id, atiCode)
    }

    async getAllOrders() {
        const response: IGetResponse = await OrderService.getAllOrders()
        this.setOrderList(response.data)
    }

}