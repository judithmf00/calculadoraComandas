import Menu from './Components/Menu';
import Pedido from './Components/Pedido';
import './styles/main.css';

export default function App() {
  return (
    <div className="main flex flex-column gap-6 p-10">
      <Menu/>
      <Pedido/>
    </div>
  )
}
