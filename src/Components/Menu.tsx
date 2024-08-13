import { menuItems } from "../data/db"
import MenuItem from "./MenuItem"

export default function Menu() {
    return (
      <section className="containerMenu w-full content-center h-screen">
        <h1 className="containerMenu__title">Menú</h1>
        <div className="overflow-y-auto h-[85%]">
          {menuItems.map(item=>(
            <MenuItem 
              key={item.id}
              item={item}
            />
          ))}
        </div>
        
      </section>
    )
  }