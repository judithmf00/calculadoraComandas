import Menu from './Components/Menu';
import Pedido from './Components/Pedido';
import './styles/main.css';

export default function App() {
  return (
    <div className="main flex flex-column gap-6 px-28 py-5">
      <Menu/>
      <Pedido/>
    </div>
  )
}
