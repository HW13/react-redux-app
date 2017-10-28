import React from 'react';

import App from './client/components/App.react';
import MessageList from './client/components/MessageList.react';
import Message from './client/components/Message.react';

import fetchAllMessages from './lib/fetchAllMessages.js';

import fetchMessage from './lib/fetchMessage';

export default [
  {
    path: '/',
    Component: App,
    children: [
      {
        Component: () => <div>SVZ Tech Test</div>,
      },
      {
        path: 'messages',
        getData: () => fetchAllMessages(),
        Component: MessageList,
      },
      {
        path: 'messages/:messageId',
        Component: Message,
        getData: ({ params: { messageId } }) => (
          fetchMessage(messageId)
        )
      }
    ] 
  },
];