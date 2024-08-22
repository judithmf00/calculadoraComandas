import { useState } from "react"
import type { TMenuItem, OrderItem } from "../types"

export default function useOrder() {
    const [order,setOrder] = useState<OrderItem[]>([])

    const addItem =(item : TMenuItem)=>{
        const itemExists = order.find((orderItem)=>orderItem.id === item.id)

        if (itemExists) {
            // Creamos nuevo arreglo con la cantidad actualizada
            const updateOrder = order.map((orderItem)=> orderItem.id === item.id ? 
                                                                        {...orderItem,quantity: orderItem.quantity +1 } 
                                                                                : 
                                                                        orderItem)
            setOrder(updateOrder)

        }else{
            const newItem ={...item,quantity:1} 
            setOrder([...order,newItem])
        }

        
    }
    console.log(order)

    return {
        order,
        addItem
    }
}
