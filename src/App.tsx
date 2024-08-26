import Menu from './Components/Menu';
import Pedido from './Components/Pedido';
import './styles/main.css';
import useOrder from './hooks/useOrder';

export default function App() {
  const { order,placeOrder,addItem, removeItem, tip, setTip} = useOrder()
  return (
    <div className="main px-8 gap-6 h-full grid lg:h-screen box-border lg:px-28 lg:py-5  lg:grid-cols-2 overflow-hidden items-center">
      <Menu addItem={addItem} />
      <Pedido 
        order={order} 
        placeOrder={placeOrder}
        removeItem={removeItem}
        tip={tip}
        setTip={setTip}
      />
    </div>
  )
}
