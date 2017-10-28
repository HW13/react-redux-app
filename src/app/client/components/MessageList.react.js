import React from 'react';
import LinkItem from './LinkItem.react';

function MessageList(props) {
  return (
    <div>
      {
        props.data.map((message) => {
        return <LinkItem to={`/messages/${message.id}`}><li>{message.created_at} - {message.text}</li></LinkItem>
        })
      }
    </div>
  )
}

export default MessageList;