import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelListContainer, ChannelContainer, Auth } from './components';
import './App.css'

const apiKey =`${process.env.REACT_APP_API_KEY_STREAM}`;
const client = StreamChat.getInstance(apiKey);
const authToken = false;

const App = () => {

  if(!authToken) return <Auth/>

  return (
    <div className='app__wrapper'>
      <Chat client={client} theme='team dark'>
        <ChannelListContainer/>
        <ChannelContainer/>
      </Chat>
    </div>
  )
}

export default App
