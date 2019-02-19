import React, { Component } from 'react';
import style from "./NoteItem.module.css";
import {deleteNoteActionCreator} from "../../redux/TodoListReducer.js";

let NoteItem = (props) => {
    return (
        <div className={style.item}>
            <p className={style.text}>{props.text}</p>
            <button type="button" className={style.button} onClick={() => {props.store.dispatch(deleteNoteActionCreator(props.id))}}>Выполнено</button>
        </div>
    )
};

export default NoteItem;