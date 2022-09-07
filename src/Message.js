import React from 'react'
import { Avatar } from "@material-ui/core";
import profilePicture from './images/pictureProfile.jpg';
import './message.css'

function Message() {
  return (
    <div className='message'>
        <Avatar src={profilePicture} />
        <div className='message__info'>
            <h4>
                acfortunate
                <span className='message__timeStamp'>this is a time stamp</span>
            </h4>
            <p>This is a message</p>
        </div>

    </div>
  )
}

export default Message