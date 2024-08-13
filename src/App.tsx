import Menu from './Components/Menu';
import Pedido from './Components/Pedido';
import './styles/main.css';


export default function App() {

  return (
    <div className="main px-8 gap-6 h-full grid md:h-screen box-border md:px-28 md:py-5  md:grid-cols-2 overflow-hidden items-center">
      <Menu/>
      <Pedido/>
    </div>
  )
}
