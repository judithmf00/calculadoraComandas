import type { TMenuItem } from '../types'

// Indicar de que tipo es el dato item, lo pasamos por props en Menu
type MenuItemProps = {
    item : TMenuItem,
    addItem : (item: TMenuItem)=> void
}

export default function MenuItem({item,addItem}:MenuItemProps) {
  return (
        <li onClick={()=>addItem(item)}>
            <p>{item.name}</p>
            <p>{item.price}€</p>
        </li>
    
  )
}
