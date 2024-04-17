import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { IOrder } from "../types/Types";
import {orderStore} from "../index";

const OrderTable: React.FC = () => {
    const [orders, setOrders] = useState<IOrder[]>([]);

    useEffect(() => {
        const fetchOrders = async () => {
            await orderStore.getAllOrders();
            setOrders(orderStore.orderList);
        };

        fetchOrders();
    }, []);

    return (
        <Table striped bordered hover responsive className='w-75 mt-5 me-auto ms-auto'>
            <thead>
            <tr>
                <th>ID</th>
                <th>Дата и время</th>
                <th>Название компании клиента</th>
                <th>Имя перевозчика</th>
                <th>Телефон перевозчика</th>
                <th>Комментарии</th>
                <th>Статус</th>
                <th>ATI код</th>
            </tr>
            </thead>
            <tbody>
            {orders.map((order) => (
                <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.created_at}</td>
                    <td>{order.clientCompanyName}</td>
                    <td>{order.carrierFullName}</td>
                    <td>{order.carrierPhone}</td>
                    <td>{order.comments}</td>
                    <td>{order.status}</td>
                    <td>
                        <a href={`https://ati.su/firms/${order.atiCode}/info`} target="_blank" rel="noopener noreferrer">
                            {order.atiCode}
                        </a>
                    </td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
};

export default OrderTable;
