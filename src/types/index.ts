export type TMenuItem = {
    id: number,
    name: string,
    price: number
}

//Type para el pedido, necesitamos las cantidades
export type OrderItem = TMenuItem & {
    quantity: number
}