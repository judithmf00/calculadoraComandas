import React from 'react'
import type { MenuItem } from '../types'

// Indicar de que tipo es el dato item, lo pasamos por props en Menu
type MenuItemProps = {
    item : MenuItem
}

export default function MenuItem({item}:MenuItemProps) {
  return (
       <ul>
            <li>
                <p>{item.name}</p>
                <p>{item.price}€</p>
            </li>
        </ul> 
    
  )
}
