import { db } from "../data/db"
import { useState, useEffect, useMemo } from "react"


export const useOrder = () => {

    const order[] = orderItem[];
    const [tip, setTip] = useState(0);
    const [data] = useState(db);



    //Carro iniicializao
    const initialCart = () => {
        const localStorageCart = localStorage.getItem('cart');
        try {
            const parsed = localStorageCart ? JSON.parse(localStorageCart) : [];
            return Array.isArray(parsed) ? parsed : [];
        } catch (error) {
            console.error("Error al leer el pedido de localStorage:", error);
            localStorage.removeItem('cart');
            return [];
        }
    }



    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(orderItem)); // guarda carrito convertido a string
    }, [orderItem]);

    const MIN_ITEMS = 1;
    const MAX_ITEMS = 10;

    function addItem(item: MenuItem) {
        const itemExist = orderItem.findIndex(guitar => guitar.id === item.id);
        if (itemExist >= 0) {
            if (orderItem[itemExist].quantity >= MAX_ITEMS) return
            const updatedCart = [...orderItem];
            updatedCart[itemExist] = {
                ...updatedCart[itemExist],
                quantity: updatedCart[itemExist].quantity + 1
            };
            setOrderItem(updatedCart);
        } else {
            const newItem = { ...item, quantity: 1 };
            setOrderItem([...orderItem, newItem]);
        }
    }

    function removeItem(id) {
        setOrderItem(prevcart => prevcart.filter(guitar => guitar.id !== id));

    }
    function placeOrder() {
        setOrderItem([])
    }

    return {
        // todo lo que se necesita retornar
        //metodos / variables
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder

    }
}