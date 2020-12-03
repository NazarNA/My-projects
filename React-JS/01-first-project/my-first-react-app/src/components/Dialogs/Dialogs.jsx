import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {

    return(
      <div className={style.dialogs}>
        <div className={style.dialogsItem}>
        Dialogs
        
        {props.dialogsData.map(el => {
          return <DialogItem name={el.name} id={el.id} url={el.url}/>
          })
        }
        </div>

        <div className={style.messages}>
        {props.messagesData.map(el => {
          return <Message id={el.id} message={el.message} url={el.url}/>
        })}
        </div>
      </div>
    )
}

export default Dialogs;