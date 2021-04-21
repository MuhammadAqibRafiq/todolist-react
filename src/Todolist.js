import React from 'react'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import Tooltip from '@material-ui/core/Tooltip';


export const Todolist = (props) => {
    
    
    return (
        <>
        <div className='todo_style'>
        <Tooltip title="Delete">
            <DeleteOutlinedIcon className='fa fa-times' 
            aria-hidden='true' 
            
            onClick={() => {
                props.onSelect(props.id);
            }
            }
            />
            </Tooltip>
    <li> {props.text} </li>
    </div>
    </>
    ) 
}
