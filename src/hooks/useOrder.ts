import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export const useOrder = () => {
    const [order, setOrder] = useState<OrderItem[]>([]);
    const [tip, setTip] = useState(0);

    function addItem(item: MenuItem) {
        setOrder(previousOrder => {
            const itemExist = previousOrder.findIndex(orderItem => orderItem.id === item.id);
            if (itemExist >= 0) {
                const updatedOrder = [...previousOrder];
                updatedOrder[itemExist] = {
                    ...updatedOrder[itemExist],
                    quantity: updatedOrder[itemExist].quantity + 1
                };
                return updatedOrder;
            }

            return [...previousOrder, { ...item, quantity: 1 }];
        });
    }

    function removeItem(id: MenuItem['id']) {
        setOrder(previousOrder => previousOrder.filter(item => item.id !== id));
    }
    
    function placeOrder() {
        setOrder([]);
        setTip(0);
    }

    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder
    }
}