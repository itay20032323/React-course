import React from 'react'
import { useState } from 'react'

const ListItems = () => {
    const [items, setItems] = useState([])

    function onSubmit(e){
      e.preventDefault()
      let newItem = e.target[0].value;
      for(let item of items){
        if (newItem === item){
          alert('This is already exsist')
          return ;
        }
      }
      setItems([...items, newItem]);
      e.target[0].value = "";
    }
    
    items.sort()
  return (
    <div className='test'>
      <h1>To Do List</h1>
      
      {items.length === 0 ? <h5>There is no Tasks yet</h5> : items.length === 1 && <h5>Lets goo</h5>}
      <ul>
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>

      <form onSubmit={onSubmit}>
        <label htmlFor="text">New item: </label>
        <input type="text" />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default ListItems
