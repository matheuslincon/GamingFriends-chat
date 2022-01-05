import React from 'react';
import { Channel, MessageTeam } from 'stream-chat-react';

import { ChannelInner, CreateChannel, EditChannel } from './';

const ChannelContainer = ({ isCreating, setIsCreating, isEditing, setIsEditing, createType }) => {

  if(isCreating) {
    return(
      <div className="channel__container">
        <CreateChannel createType={createType} setIsCreating={setIsCreating}/>
      </div>
    );
  }

  if(isEditing) {
    return(
      <div className="channel__container">
        <EditChannel setIsEditing={setIsEditing}/>
      </div>
    );
  }

  const emptyState = () => {
    return (
      <div className="channel-empty__container">
        <p className="channel-empty__first">This is the beginning of your channel history.</p>
        <p className="channel-empty__second">Send messages, attachments, links, emojis and more!.</p>
      </div>
    )
  }

  return (
    <div className="channel__container">
      <Channel
        EmptyStateIndicator={emptyState}
        Message={(messageProps, i) => <MessageTeam key={i} {...messageProps} />}
      >
        <ChannelInner setIsEditing={setIsEditing}/>
      </Channel>
    </div>
  );
}

export default ChannelContainer;
