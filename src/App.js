import { findAllByTitle } from '@testing-library/dom';
import React, { useState } from 'react'
import { Todolist } from './Todolist';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Tooltip from '@material-ui/core/Tooltip';


export const App = () => {

const [inputlist,setinputlist]=useState('');
const [addlist,setaddlist] = useState([]);

const itemEvent = (e) => {
  setinputlist(e.target.value)
}

const click  = () => {
    setaddlist((olditem) =>{
    return [...olditem,inputlist]
     })
     setinputlist('');

}
const deleteItems = (id) => {

  setaddlist((oldItem) => {
    
    return oldItem.filter((arrElem,index) => {
      return index !== id ;
    })
     })
}

  return (
    <>
    <div className='main'>
      <div className='center'>

      <h1>TO DO LIST</h1>

      <input type='text' placeholder='ADD ITEMS' onChange={itemEvent} value={inputlist} />

      <Tooltip title='ADD'>
      <button onClick = {click}> <AddCircleIcon/> </button>
      </Tooltip>

      <ol>
        {
          addlist.map((itemvalue,index) => {
           return <Todolist text={itemvalue} key={index} id={index} onSelect={deleteItems}  />
           
           
          })
        }
      </ol>

    </div>
    </div>
  </>
  );
}
