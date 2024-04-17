export interface IOrder {
    id: number
    created_at: string
    clientCompanyName: string
    carrierFullName: string
    carrierPhone: string
    comments: string
    status: string,
    atiCode: string
}

export interface IResponse {
    data: IOrder;
}

export interface IGetResponse {
    data: IOrder[]
}