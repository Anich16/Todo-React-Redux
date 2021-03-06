import React from 'react';
import style from "CompleteList.module.css";
import NoteItem from "../TodoList/TodoList";

let CompliteList = (props) => {
    return (
        {
            props.state.notes.map((element) => {
                return <NoteItem text={element.text} key={element.id} id={element.id} store={props.store}/>

            })
        }
    )
};

export default CompliteList;
