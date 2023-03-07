import {React, useContext} from 'react';
import { ItemsContext } from './context';


const PaginationPart = (props) => {
    console.log(props.content);
    const itemsContext = useContext(ItemsContext);
  return (

    <div className='pagination-part'>
      <h2>{itemsContext.name}</h2>
        {props.content.map((post) => {
            return (<h6 key={post.id} >{post.body}</h6>)
        })}
      <button onClick={() => itemsContext.itemStatus === 'red' ? itemsContext.setItemStatus('green') : itemsContext.setItemStatus('red')} >Change Status</button>
    </div>
  )
}

export default PaginationPart;

