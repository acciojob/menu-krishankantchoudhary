import React from 'react'

const Menu = ({items}) => {
  return (
    <div className="menu-container">
        {items.map((item)=>(
            <div
            key={item.id}
            data-test-id={`menu-item-${item.category}`}
            className="menu-item">
                <img src={item.image}/>
                <h4>{item.name}</h4>
                <p>${item.price}</p>
                <p>{item.info}</p>
            </div>
        ))}
    </div>
  )
}

export default Menu
