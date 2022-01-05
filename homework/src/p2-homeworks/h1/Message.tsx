import React from 'react';
import messageClasses from './Message.module.css';

type propsMessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: propsMessageType) {
    return (
        <div className={messageClasses.container}>
            <img src={props.avatar}/>
            <div className={messageClasses.messageContainer}>
                <div className={messageClasses.nameItem}>{props.name}</div>
                <div className={messageClasses.messageItem}>{props.message}</div>
                <div className={messageClasses.timeItem}>{props.time}</div>
                <div className={messageClasses.corner}>
                    <div> </div>
                </div>
            </div>

        </div>
    )
}

export default Message
