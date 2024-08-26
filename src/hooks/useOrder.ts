import { useState } from "react"
import type { TMenuItem, OrderItem } from "../types"

export default function useOrder() {
    const [order,setOrder] = useState<OrderItem[]>([])
    const [tip,setTip] = useState(0)

    const addItem =(item : TMenuItem)=>{
        const itemExists = order.find((orderItem)=>orderItem.id === item.id)

        if (itemExists) {
            // Creamos nuevo arreglo con la cantidad actualizada
            const updateOrder = order.map((orderItem)=> orderItem.id === item.id ? 
                                                                        {...orderItem,quantity: orderItem.quantity + 1 } 
                                                                                : 
                                                                        orderItem)
            setOrder(updateOrder)

        }else{
            const newItem ={...item,quantity:1} 
            setOrder([...order,newItem])
        }
        
    }

    const removeItem = (id : TMenuItem['id']) =>{
        setOrder(order.filter((orderItem) => orderItem.id !== id))
    }

    const placeOrder = ()=>{
        setOrder([])
        setTip(0)
    }
    return {
        order,
        placeOrder,
        tip,
        setTip,
        addItem,
        removeItem
    }
}
