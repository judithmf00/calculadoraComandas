import { menuItems } from "../data/db"
import MenuItem from "./MenuItem"
import type { TMenuItem } from '../types';

type MenuProps = {
  addItem: (item: TMenuItem) => void;
};

export default function Menu({ addItem }: MenuProps) {

    return (
      <section className="containerMenu w-full content-center h-screen">
        <h1 className="containerMenu__title">Menú</h1>
        <div className="overflow-y-auto h-[85%]">

          <ul>
            {menuItems.map(item=>(
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </ul>

        </div>
      </section>
    )
  }