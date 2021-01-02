import React from 'react';

export default function Message(props){
  return(
    <span className={props.dark_mode ? 'message-dnd dark' : 'message-dnd'}>Drag and drop to reorder list</span>
  )
}
