import React from 'react';


function Message(props) {
  return (
    <div>
      <b>{props.data.author}</b>: {props.data.text} - <b>Posted</b>: {props.data.created_at} 
    </div>
  )
}

export default Message;