import Menu from './Components/Menu';
import Pedido from './Components/Pedido';
import './styles/main.css';


export default function App() {

  return (
    <div className="main px-8 gap-6 h-full grid lg:h-screen box-border lg:px-28 lg:py-5  lg:grid-cols-2 overflow-hidden items-center">
      <Menu/>
      <Pedido/>
    </div>
  )
}
