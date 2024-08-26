import { useMemo } from 'react';
import { OrderItem } from '../types';

const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]

type PedidoProps = {
  order : OrderItem[],
  placeOrder: ()=>void,
  removeItem: (id: OrderItem["id"]) => void,
  tip: number,
  setTip:  React.Dispatch<React.SetStateAction<number>>
}
export default function Pedido({ order, placeOrder, removeItem,setTip,tip }: PedidoProps) {

  const total= useMemo(
    () => order.reduce((total,item)=> total+(item.quantity * item.price),0)
    ,[order] 
  )

  const tipAmount = useMemo(()=> total * tip,[order,tip])
  const totalAmount = useMemo(()=> total + tipAmount,[order,tip])

  return (
    <section className="containerPedido content-center flex flex-col w-full h-[90vh]">
      <h2 className="containerPedido__productos__title">Pedido</h2>
      <section className="containerPedido__productos flex-grow-[10] ">
        {order.length === 0 ?
          <h3 className='text-center mt-14'>El pedido está vacío</h3>
          :
          <ul>
            {order.map(item =>(
              <li key={item.id}>
                <div>
                  <p>{item.name} - <span> {item.price}€</span> </p>
                  <p>Cantidad: {item.quantity} - <span> {item.price * item.quantity}€</span></p>
                </div>
                <button onClick={()=>removeItem(item.id)}>X</button>
              </li>
            ))}
          </ul>
        }
      </section>

      <form className="containerPedido__propina flex-grow-[2]">
        <h3>Propina:</h3>
        <section className='flex'>
          {tipOptions.map(tip=>(
            <div key={tip.id}>
              <input 
                type="radio" 
                name="propina" 
                id={tip.id} 
                value={tip.value}
                onChange={e => setTip(+e.target.value)}
              />
              <label>{tip.label}</label>
            </div>
          ))}
        </section>
      </form>

      <section className="containerPedido__total flex-grow-[1]">
        <h3>Total y propina:</h3>
        <p>Subtotal a pagar: {total}€</p>
        <p>Propina: {+tipAmount}€</p>
        <p>Total a pagar: {+totalAmount}€</p>
      </section>

      <button 
        className="self-center mt-4 disabled:opacity-60" 
        disabled={totalAmount===0}
        onClick={placeOrder}
      >
        Guardar
      </button>
    </section>
  );
}
